# Public Directory

This directory contains static assets that are served directly by the web server.

## Contents

- `favicon.ico`: The icon displayed in the browser tab
- `index.html`: The main HTML file that serves as the entry point for the React application
- `logo192.png` and `logo512.png`: Logo images in different sizes for various device displays
- `manifest.json`: Web app manifest file for Progressive Web App functionality
- `robots.txt`: Instructions for search engine crawlers
- `images/`: Directory containing additional image assets

## Purpose

The public directory is used for static files that:
- Need to be referenced by their exact path
- Don't require processing by webpack
- Need to maintain their original filename