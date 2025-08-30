const fs = require('fs');
const path = require('path');

// Build script for Hostinger hosting
console.log('🚀 Building for Hostinger...');

// Function to safely copy files
function safeCopyFile(source, destination) {
  try {
    // Check if source exists
    if (!fs.existsSync(source)) {
      console.log(`❌ Source file not found: ${source}`);
      return false;
    }
    
    // Check if destination directory exists
    const destDir = path.dirname(destination);
    if (!fs.existsSync(destDir)) {
      console.log(`❌ Destination directory not found: ${destDir}`);
      return false;
    }
    
    // Try to copy the file
    fs.copyFileSync(source, destination);
    console.log(`✅ ${source} copied to ${destination}`);
    return true;
  } catch (error) {
    console.log(`❌ Error copying ${source}: ${error.message}`);
    return false;
  }
}

// Ensure all necessary files are copied
const filesToCopy = [
  'public/.htaccess',
  'public/.htaccess-hostinger',
  'public/404.html',
  'public/sitemap.xml',
  'public/robots.txt'
];

console.log('📋 Checking source files...');
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
  
  // Copy files to out directory
  const copyResults = [
    { source: 'public/.htaccess', dest: 'out/.htaccess' },
    { source: 'public/.htaccess-hostinger', dest: 'out/.htaccess-hostinger' },
    { source: 'public/404.html', dest: 'out/404.html' },
    { source: 'public/sitemap.xml', dest: 'out/sitemap.xml' },
    { source: 'public/robots.txt', dest: 'out/robots.txt' }
  ];
  
  console.log('📁 Copying files to build directory...');
  copyResults.forEach(({ source, dest }) => {
    safeCopyFile(source, dest);
  });
  
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
  
  try {
    fs.writeFileSync('out/test.html', testContent);
    console.log('✅ test.html created for debugging');
  } catch (error) {
    console.log(`❌ Error creating test.html: ${error.message}`);
  }
  
} else {
  console.log('❌ Build directory not found. Run "npm run build" first.');
}

console.log('🎉 Hostinger build preparation complete!');
console.log('📁 Upload the contents of the "out" directory to your Hostinger hosting.');
console.log('🔧 If routing still doesn\'t work, try renaming .htaccess-hostinger to .htaccess');
