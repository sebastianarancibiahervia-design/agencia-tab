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
    $js_file = 'index-C859wFZ7.js';
    $css_file = 'index-vtnIxUeg.css';

    echo '<link rel="stylesheet" crossorigin href="' . esc_url( $dist_uri . $css_file ) . '">' . "\n";
    echo '<script type="module" crossorigin src="' . esc_url( $dist_uri . $js_file ) . '"></script>' . "\n";
}
add_action( 'wp_head', 'agencia_tab_inject_vite_assets', 99 );

// Add basic theme supports
function agencia_tab_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'agencia_tab_setup' );
