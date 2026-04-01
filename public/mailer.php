<?php
// Configuración
define('TO_EMAIL', 'contacto@agenciatab.cl');
define('FROM_EMAIL', 'noreply@agenciatab.cl');
define('SUBJECT_PREFIX', '[Agencia TAB] Nuevo contacto:');

// Headers CORS para que el fetch desde el frontend funcione
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Responder a preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit();
}

// Leer datos (puede venir como JSON o como form-urlencoded)
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (strpos($contentType, 'application/json') !== false) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
} else {
    parse_str(file_get_contents('php://input'), $data);
    if (empty($data)) {
        $data = $_POST;
    }
}

// Sanitizar campos
function clean(string $str): string {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}

$name    = clean($data['name']    ?? '');
$email   = filter_var(trim($data['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = clean($data['phone']   ?? '');
$company = clean($data['company'] ?? '');
$message = clean($data['message'] ?? '');

// Honeypot anti-spam
if (!empty($data['bot-field'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]); // Responde OK pero no envía nada
    exit();
}

// Validaciones básicas
if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Nombre, email y mensaje son requeridos']);
    exit();
}

// Construir el asunto
$subject = SUBJECT_PREFIX . ' ' . $name;

// Construir el cuerpo HTML del email
$body = "
<!DOCTYPE html>
<html lang='es'>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; background:#0a0a14; color:#e5e5e5; margin:0; padding:0; }
    .container { max-width:600px; margin:40px auto; background:#111; border:1px solid #222; border-radius:16px; overflow:hidden; }
    .header { background:#B9FF00; padding:24px 32px; }
    .header h1 { margin:0; font-size:22px; color:#0a0a14; font-weight:800; letter-spacing:-0.5px; }
    .header p { margin:4px 0 0; font-size:12px; color:#0a0a14; opacity:0.7; }
    .body { padding:32px; }
    .field { margin-bottom:20px; }
    .label { font-size:10px; text-transform:uppercase; letter-spacing:2px; color:#888; margin-bottom:4px; }
    .value { font-size:15px; color:#f0f0f0; background:#1a1a1a; padding:12px 16px; border-radius:8px; border-left:3px solid #B9FF00; }
    .footer { padding:16px 32px; border-top:1px solid #222; font-size:11px; color:#555; text-align:center; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>Nuevo contacto desde el sitio web</h1>
      <p>Agencia TAB — Protocolo Digital</p>
    </div>
    <div class='body'>
      <div class='field'>
        <div class='label'>Nombre Completo</div>
        <div class='value'>{$name}</div>
      </div>
      <div class='field'>
        <div class='label'>Correo Electrónico</div>
        <div class='value'><a href='mailto:{$email}' style='color:#B9FF00'>{$email}</a></div>
      </div>
      <div class='field'>
        <div class='label'>Teléfono</div>
        <div class='value'>{$phone}</div>
      </div>
      " . ($company ? "
      <div class='field'>
        <div class='label'>Empresa</div>
        <div class='value'>{$company}</div>
      </div>" : "") . "
      <div class='field'>
        <div class='label'>Mensaje</div>
        <div class='value'>" . nl2br($message) . "</div>
      </div>
    </div>
    <div class='footer'>
      Email generado automáticamente por agenciatab.cl — " . date('d/m/Y H:i') . "
    </div>
  </div>
</body>
</html>
";

// Headers del email
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . FROM_EMAIL . "\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Enviar
$sent = mail(TO_EMAIL, $subject, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => 'Email enviado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'No se pudo enviar el email. Contacta directamente a ' . TO_EMAIL]);
}
