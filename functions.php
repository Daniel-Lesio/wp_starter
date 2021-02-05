<?php
add_filter('wpcf7_autop_or_not', '__return_false');

function load_stylesheets()
{   
      wp_enqueue_style('style', get_template_directory_uri() . './style.css');    
      wp_enqueue_style('styles', get_template_directory_uri() . './dist/index.css');    
      wp_enqueue_script( 'index', get_template_directory_uri() . './dist/index.js', ['wp-element','wp-blocks','wp-i18n', 'wp-block-editor','wp-api'], time(), 'all' );
}

add_action('wp_enqueue_scripts','load_stylesheets');

add_theme_support( 'post-thumbnails' );
include_once get_theme_file_path( 'inc/my_customizer.php' );

?>