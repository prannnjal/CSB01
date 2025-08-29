# Hostinger Setup Guide

## 🚀 Quick Fix for Routing Issues

### Step 1: Build and Deploy
```bash
npm run build:hostinger
```

### Step 2: Upload to Hostinger
1. Upload all files from `out/` directory to your Hostinger root directory
2. Make sure `.htaccess` is in the root directory
3. Ensure `index.html` is in the root directory

### Step 3: Test URLs
- ✅ `https://chalksnboard.in/` (should work)
- ✅ `https://chalksnboard.in/career/` (should work)
- ✅ `https://chalksnboard.in/about/` (should work)
- ✅ `https://chalksnboard.in/services/` (should work)

## 🔧 If Routing Still Doesn't Work

### Option 1: Try Alternative .htaccess
1. Rename `.htaccess-hostinger` to `.htaccess`
2. Upload the new `.htaccess` file
3. Test the URLs again

### Option 2: Hostinger Control Panel Settings
1. Go to Hostinger Control Panel
2. Navigate to "Advanced" → "Apache Configuration"
3. Make sure mod_rewrite is enabled
4. Add this to your Apache configuration:
   ```apache
   <Directory "/">
       AllowOverride All
   </Directory>
   ```

### Option 3: Contact Hostinger Support
If nothing works, contact Hostinger support and ask them to:
1. Enable mod_rewrite
2. Allow .htaccess files
3. Configure Apache for SPA routing

## 🧪 Testing Your Setup

### Test 1: Check .htaccess
Visit: `https://chalksnboard.in/test.html`
- If you see "Test Page", .htaccess is working
- If you get redirected to main page, .htaccess is working

### Test 2: Check Direct URLs
Try these URLs directly:
- `https://chalksnboard.in/career/`
- `https://chalksnboard.in/about/`
- `https://chalksnboard.in/services/`

### Test 3: Check Browser Console
1. Open browser developer tools
2. Go to Console tab
3. Visit a direct URL
4. Look for any errors

## 📁 Required Files Structure
```
your-hostinger-root/
├── .htaccess
├── index.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── _next/
├── images/
└── ... (other files)
```

## 🆘 Common Issues & Solutions

### Issue: 404 Error on Direct URLs
**Solution:** Check if `.htaccess` is properly uploaded and enabled

### Issue: Redirect Loop
**Solution:** Try the alternative `.htaccess-hostinger` file

### Issue: Files Not Found
**Solution:** Make sure all files from `out/` directory are uploaded

### Issue: HTTPS Redirect Issues
**Solution:** Uncomment HTTPS rules in `.htaccess` if needed

## 📞 Support
If you're still having issues:
1. Check Hostinger error logs
2. Contact Hostinger support
3. Try a different hosting provider (Vercel, Netlify work great with Next.js)
