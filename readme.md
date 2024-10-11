# Alfons Soft Hyphen Inserter

## Description

The **Alfons Soft Hyphen Inserter** is a WordPress plugin that allows you to add soft hyphen characters (`&shy;`) in your content directly from the Gutenberg editor. This is useful for enhancing word-breaking in responsive content without disturbing the visual layout.

### Features

- Adds a custom format for inserting soft hyphen characters in the Gutenberg editor.

## Installation

1. Upload the plugin files to the `/wp-content/plugins/alfons-soft-hyphen-inserter` directory or install the plugin directly through the WordPress plugins screen.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Start editing your content in the Gutenberg editor with the ability to insert soft hyphens.

## How it Works

- The plugin enqueues a custom JavaScript file that adds the soft hyphen functionality to the Gutenberg editor.
- When editing content in the Gutenberg editor, you can add soft hyphens to your text via a custom formatting option.

## Usage

1. After installing and activating the plugin, go to any page or post in the Gutenberg editor.
2. Insert cursor to where you want to insert a soft hyphen.
3. Use the provided option (defined in JavaScript) to insert a soft hyphen (`&shy;`) at the desired location in your text.
4. Optionally, enable the CSS in the plugin to visualize the soft hyphens within the editor.

## Frequently Asked Questions

### Does this plugin affect the front-end display of my site?

No, soft hyphens (`&shy;`) are invisible unless the word needs to be hyphenated on the front-end based on the resp
