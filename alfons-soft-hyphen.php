<?php

/**
 * Plugin Name: Alfons Soft Hyphen Inserter
 * Description: A plugin to add soft hyphen characters (&shy;) into Gutenberg editor content.
 * Version: 1.0
 * Author: Aapo Virta / Alfons Digital Oy
 * License: MIT
 */

// Enqueue the JavaScript file to add the custom format for soft hyphen
function enqueue_alfons_soft_hyphen_script()
{
    wp_enqueue_script(
        'alfons-soft-hyphen-format',
        plugin_dir_url(__FILE__) . 'shy.js', // Path to the JS file
        array(
            'wp-blocks',
            'wp-element',
            'wp-editor',
            'wp-components',
            'wp-i18n',
            'wp-rich-text',
            'wp-block-editor'
        ),
        filemtime(plugin_dir_path(__FILE__) . 'shy.js') // To ensure proper cache-busting
    );
}
add_action('enqueue_block_editor_assets', 'enqueue_alfons_soft_hyphen_script');

// Optional CSS to make soft hyphens visible in the Gutenberg editor
function add_alfons_soft_hyphen_styles()
{
    echo '
    <style>
        .block-editor .shy-editor::after {
            content: "\00AD";
            background-color: #e2e4e7;
            opacity: 0.5;
        }
    </style>
    ';
}
add_action('admin_head', 'add_alfons_soft_hyphen_styles');
