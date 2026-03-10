<?php
/**
 * Agencia TAB Theme functions and definitions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function agencia_tab_scripts() {
    // Dynamically load the Vite built assets
    // We assume the vite build runs and outputs to /dist inside the theme folder
    $theme_dir = get_template_directory_uri();
    
    // Scan the dist/assets directory for the main css and js files since Vite hashes them
    $dist_path = get_template_directory() . '/dist/assets/';
    $dist_uri = $theme_dir . '/dist/assets/';

    if ( is_dir( $dist_path ) ) {
        $files = scandir( $dist_path );
        
        foreach( $files as $file ) {
            if ( pathinfo( $file, PATHINFO_EXTENSION ) === 'css' && strpos( $file, 'index' ) !== false ) {
                wp_enqueue_style( 'agencia-tab-style', $dist_uri . $file, array(), filemtime( $dist_path . $file ) );
            }
            if ( pathinfo( $file, PATHINFO_EXTENSION ) === 'js' && strpos( $file, 'index' ) !== false ) {
                wp_enqueue_script( 'agencia-tab-script', $dist_uri . $file, array(), filemtime( $dist_path . $file ), true );
                // Add type="module" to the script tag
                add_filter( 'script_loader_tag', function( $tag, $handle, $src ) use ( $file, $dist_uri ) {
                    if ( 'agencia-tab-script' === $handle ) {
                        return '<script type="module" src="' . esc_url( $dist_uri . $file ) . '"></script>';
                    }
                    return $tag;
                }, 10, 3 );
            }
        }
    }
}
add_action( 'wp_enqueue_scripts', 'agencia_tab_scripts' );

// Add basic theme supports
function agencia_tab_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'agencia_tab_setup' );
