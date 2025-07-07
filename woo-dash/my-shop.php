<?php
/*
Plugin Name: Woo Dash 
Description: A custom admin dashboard with React-powered subpages.
Version: 1.0
Author: Rishab Jain
Author URI: https://zionwebservices.com
*/

if (!defined('ABSPATH')) exit; // Exit if accessed directly

// 1. Register only ONE main menu page for React
add_action('admin_menu', function () {
    add_menu_page(
        'Woo Dash',
        'Woo Dash',
        'manage_options',
        'woo-dash-dashboard',
        'render_react_root',
        'dashicons-store',
        26
    );
});

// 2. Render the root div where React app will mount
function render_react_root() {
    echo '<div id="root"></div>';
}

// 3. Enqueue React JS and CSS only on our plugin page
add_action('admin_enqueue_scripts', function () {
    if (!isset($_GET['page']) || $_GET['page'] !== 'woo-dash-dashboard') {
        return;
    }

    wp_enqueue_script(
        'woo-dash-react-js',
        plugin_dir_url(__FILE__) . 'dist/app.js',
        [],
        null,
        true
    );

    wp_enqueue_style(
        'woo-dash-react-css',
        plugin_dir_url(__FILE__) . 'dist/app.css'
    );
});

// 4. OPTIONAL: Redirect old subpage URLs to the main dashboard
add_action('admin_init', function () {
    $legacy_pages = [
        'woo-dash-shipping',
        'woo-dash-inventory',
    ];

    if (isset($_GET['page']) && in_array($_GET['page'], $legacy_pages)) {
        wp_redirect(admin_url('admin.php?page=woo-dash-dashboard'));
        exit;
    }
});
