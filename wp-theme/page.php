<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <style>
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            min-height: 100vh;
            background-color: #05050A !important;
            color: #F0EFF4 !important;
            overflow-x: hidden !important;
        }
        #wpadminbar { display: none !important; }
        html { margin-top: 0 !important; }
    </style>
</head>
<body <?php body_class( 'antialiased bg-void-deep text-ghost' ); ?>>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>
</html>
