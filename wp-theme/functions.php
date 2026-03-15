<?php
/**
 * Agencia TAB Theme functions and definitions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function agencia_tab_inject_vite_assets() {
    $dist_path = get_template_directory() . '/dist/assets/';
    $dist_uri = get_template_directory_uri() . '/dist/assets/';
    
    // Inject required Google Fonts for the design
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
    echo '<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">' . "\n";

    // Hardcoded paths to bypass scandir/filesystem issues on heavily restricted servers
    $js_file = 'index.js';
    $css_file = 'index.css';

    $v = filemtime( get_template_directory() . '/dist/assets/' . $js_file ) ?: time();
    echo '<link rel="stylesheet" crossorigin href="' . esc_url( $dist_uri . $css_file ) . '?v=' . $v . '">' . "\n";
    echo '<script type="module" crossorigin src="' . esc_url( $dist_uri . $js_file ) . '?v=' . $v . '"></script>' . "\n";
    
    // Inject WP Customizer Data to React
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $logo_url = $custom_logo_id ? wp_get_attachment_image_url( $custom_logo_id, 'full' ) : '';
    
    $wpData = array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'rest_url' => esc_url_raw( rest_url( 'agenciatab/v1/contact' ) ),
        'logo' => $logo_url,
        'hero_title' => get_theme_mod( 'tab_hero_title', 'Toma la ventaja' ),
        'hero_subtitle' => get_theme_mod( 'tab_hero_subtitle', 'Convertimos tu pasión en una presencia visual de la que sentirte orgulloso. Deja de ser uno más y conviértete en la agencia digital de referencia en tu sector.' ),
        'hero_cta' => get_theme_mod( 'tab_hero_cta', 'Iniciar Proyecto' ),
        'contact_email' => get_theme_mod( 'tab_contact_email', 'contacto@agenciatab.cl' ),
        'rrss_instagram' => get_theme_mod( 'tab_rrss_instagram', 'https://www.instagram.com/tab_agencia_/' ),
        'rrss_linkedin' => get_theme_mod( 'tab_rrss_linkedin', 'https://www.linkedin.com/company/agenciatab/' ),
        'footer_text' => get_theme_mod( 'tab_footer_text', 'La tecla que impulsa tu marca. Hacemos que la presencia digital de tu negocio sea increíble.' ),
    );
    echo '<script>window.wpData = ' . wp_json_encode( $wpData ) . ';</script>' . "\n";
}
add_action( 'wp_head', 'agencia_tab_inject_vite_assets', 99 );

// Add basic theme supports
function agencia_tab_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'               => 256,
        'width'                => 256,
        'flex-height'          => true,
        'flex-width'           => true,
        'header-text'          => array( 'site-title', 'site-description' ),
    ) );
}
add_action( 'after_setup_theme', 'agencia_tab_setup' );

// Register WP Customizer settings
function agencia_tab_customize_register( $wp_customize ) {
    // Section: Agencia TAB Data
    $wp_customize->add_section( 'agencia_tab_data', array(
        'title'      => __( 'Agencia TAB - Textos y Enlaces', 'agencia-tab' ),
        'priority'   => 30,
    ) );

    // Helpers to create settings and controls
    $fields = [
        'tab_hero_title' => 'Título del Hero',
        'tab_hero_subtitle' => 'Subtítulo del Hero',
        'tab_hero_cta' => 'Texto del Botón CTA',
        'tab_rrss_instagram' => 'Link Instagram',
        'tab_rrss_linkedin' => 'Link LinkedIn',
        'tab_contact_email' => 'Email de Contacto',
        'tab_footer_text' => 'Texto Footer',
    ];

    foreach ( $fields as $id => $label ) {
        $wp_customize->add_setting( $id, array(
            'default'   => '',
            'transport' => 'refresh',
        ) );
        $type = (strpos($id, 'subtitle') !== false || strpos($id, 'footer') !== false) ? 'textarea' : 'text';
        $wp_customize->add_control( $id, array(
            'label'    => $label,
            'section'  => 'agencia_tab_data',
            'type'     => $type,
        ) );
    }
}
add_action( 'customize_register', 'agencia_tab_customize_register' );

// Register Contact Form REST API Endpoint
add_action( 'rest_api_init', function () {
    register_rest_route( 'agenciatab/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'agencia_tab_handle_contact',
        'permission_callback' => '__return_true'
    ) );
});

function agencia_tab_handle_contact( $request ) {
    $params = $request->get_json_params();
    $name = sanitize_text_field( $params['name'] );
    $email = sanitize_email( $params['email'] );
    $phone = sanitize_text_field( $params['phone'] );
    $company = sanitize_text_field( $params['company'] );
    $message = sanitize_textarea_field( $params['message'] );

    $to = get_theme_mod( 'tab_contact_email', get_option( 'admin_email' ) );
    $subject = 'Nuevo Contacto Web: ' . $name;
    $body = "Has recibido un nuevo mensaje desde el sitio web.\n\n" .
            "Nombre: $name\n" .
            "Correo: $email\n" .
            "Teléfono: $phone\n" .
            "Empresa: $company\n\n" .
            "Mensaje:\n$message\n";
    $headers = array('Content-Type: text/plain; charset=UTF-8');

    $sent = wp_mail( $to, $subject, $body, $headers );

    if ($sent) {
        return new WP_REST_Response( array( 'status' => 'success', 'message' => 'Message sent' ), 200 );
    } else {
        return new WP_REST_Response( array( 'status' => 'error', 'message' => 'Failed to send it' ), 500 );
    }
}
