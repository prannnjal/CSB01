const fs = require('fs');
const path = require('path');

// Build script for Hostinger hosting
console.log('🚀 Building for Hostinger...');

// Ensure all necessary files are copied
const filesToCopy = [
  'public/.htaccess',
  'public/.htaccess-hostinger',
  'public/404.html',
  'public/sitemap.xml',
  'public/robots.txt'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Check if out directory exists
if (fs.existsSync('out')) {
  console.log('✅ Build directory exists');
  
  // Copy .htaccess to out directory
  if (fs.existsSync('public/.htaccess')) {
    fs.copyFileSync('public/.htaccess', 'out/.htaccess');
    console.log('✅ .htaccess copied to build directory');
  }
  
  // Copy alternative .htaccess to out directory
  if (fs.existsSync('public/.htaccess-hostinger')) {
    fs.copyFileSync('public/.htaccess-hostinger', 'out/.htaccess-hostinger');
    console.log('✅ .htaccess-hostinger copied to build directory');
  }
  
  // Copy 404.html to out directory
  if (fs.existsSync('public/404.html')) {
    fs.copyFileSync('public/404.html', 'out/404.html');
    console.log('✅ 404.html copied to build directory');
  }
  
  // Copy sitemap.xml to out directory
  if (fs.existsSync('public/sitemap.xml')) {
    fs.copyFileSync('public/sitemap.xml', 'out/sitemap.xml');
    console.log('✅ sitemap.xml copied to build directory');
  }
  
  // Copy robots.txt to out directory
  if (fs.existsSync('public/robots.txt')) {
    fs.copyFileSync('public/robots.txt', 'out/robots.txt');
    console.log('✅ robots.txt copied to build directory');
  }
  
  // Create a test file to verify routing
  const testContent = `<!DOCTYPE html>
<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <h1>Test Page</h1>
    <p>If you see this, .htaccess is working!</p>
    <script>
        // Redirect to main app
        window.location.href = '/index.html';
    </script>
</body>
</html>`;
  
  fs.writeFileSync('out/test.html', testContent);
  console.log('✅ test.html created for debugging');
  
} else {
  console.log('❌ Build directory not found. Run "npm run build" first.');
}

console.log('🎉 Hostinger build preparation complete!');
console.log('📁 Upload the contents of the "out" directory to your Hostinger hosting.');
console.log('🔧 If routing still doesn\'t work, try renaming .htaccess-hostinger to .htaccess');
