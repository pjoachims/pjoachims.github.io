---
layout: default
title: Hash
permalink: /hash/
custom_css: hash
---

<head>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/emn178/js-sha256/build/sha256.min.js"></script>
    <script src="{{ site.baseurl }}/assets/js/hash.js"></script>
</head>

<script>
// Configuration
const config = {
    method: sha256,
    inputType: 'text',
    autoUpdate: true
};

// Adjust textarea height automatically
const textAreaAdjust = (element) => {
    element.style.height = '1px';
    element.style.height = `${10 + element.scrollHeight}px`;
};

// Toggle password visibility
const togglePasswordVisibility = () => {
    const input = document.getElementById('input');
    input.type = input.type === 'password' ? 'text' : 'password';
};

// Initialize when document is ready
$(document).ready(() => {
    // Set up any initial bindings or configurations here
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', () => textAreaAdjust(textarea));
    }
});
</script>