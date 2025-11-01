
const fs = require('fs');
const path = require('path');

const buildPath = path.resolve('./build');
const indexFile = path.join(buildPath, 'index.html');

let html = fs.readFileSync(indexFile, 'utf8');

// Match either <link rel="stylesheet" href="..."> OR <link href="..." rel="stylesheet">
html = html.replace(
  /<link[^>]+href="(\/static\/css\/main\.[^"]+\.css)"[^>]*>/,
  `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="$1"></noscript>`
);

fs.writeFileSync(indexFile, html, 'utf8');
console.log('✅ Postscript applied: CSS preloaded successfully');