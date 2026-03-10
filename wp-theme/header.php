<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <style>
        /* Force CSS Isolation against WP Admin Bar and default themes */
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            min-height: 100vh;
            background-color: #05050A !important; /* Void Deep */
            color: #F0EFF4 !important; /* Ghost */
            overflow-x: hidden !important;
        }
        #wpadminbar { display: none !important; } /* Hide admin bar on frontend to prevent GSAP jumpiness */
        html { margin-top: 0 !important; }
    </style>
</head>
<body <?php body_class( 'antialiased bg-void-deep text-ghost selection:bg-neon/30 selection:text-neon overflow-x-hidden' ); ?>>
<?php wp_body_open(); ?>
