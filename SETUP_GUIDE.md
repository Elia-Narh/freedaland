# Freedaland Construction - Quick Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies
Open PowerShell in the project folder and run:
```powershell
npm install
```

This will install all required packages (~2 minutes).

### Step 3: Start the Development Server
```powershell
npm run dev
```

The website will open automatically at http://localhost:3000

## 🎨 Customization Checklist

### Essential Updates (15 minutes)

#### 1. Company Contact Information
Update these files with your actual information:

**src/components/Header.jsx** (Line ~29-35)
```javascript
// Replace with your phone and email
<a href="tel:+1234567890">+123 456 7890</a>
<a href="mailto:info@freedaland.com">info@freedaland.com</a>
```

**src/components/Footer.jsx** (Line ~63-75)
```javascript
// Update address, phone, and email
<span>123 Construction Ave<br />City, State 12345</span>
<a href="tel:+1234567890">+123 456 7890</a>
<a href="mailto:info@freedaland.com">info@freedaland.com</a>
```

#### 2. Block Pricing
**src/pages/SolidBlocks.jsx** (Line ~6)
```javascript
const pricePerUnit = 2.50  // Update to your actual price
```

**src/pages/HollowBlocks.jsx** (Line ~6)
```javascript
const pricePerUnit = 1.85  // Update to your actual price
```

#### 3. Property Listings
**src/pages/LandSales.jsx** (Line ~12-67)
Replace the sample properties with your actual listings.

**src/pages/PropertyRentals.jsx** (Line ~12-67)
Replace the sample rentals with your actual properties.

#### 4. Team Information
**src/pages/About.jsx** (Line ~32-55)
Update team member names, roles, and credentials.

**src/pages/Architecture.jsx** (Line ~67-81)
Update architect team information.

### Color Customization (5 minutes)

**src/index.css** (Line ~5-15)
```css
:root {
  --primary-color: #2563eb;      /* Your main brand color */
  --secondary-color: #f59e0b;    /* Your accent color */
  /* Change these to match your brand */
}
```

### Social Media Links (2 minutes)

**src/components/Footer.jsx** (Line ~36-51)
```javascript
// Update with your actual social media URLs
<a href="https://facebook.com/yourpage">
<a href="https://instagram.com/yourprofile">
<a href="https://linkedin.com/company/yourcompany">
```

## 📸 Adding Images

### Option 1: Using Image Placeholders
The site is designed to work with placeholder gradients initially.

### Option 2: Adding Real Images

1. Create folders in `public`:
   ```
   public/
   ├── images/
   │   ├── products/
   │   ├── properties/
   │   ├── team/
   │   └── projects/
   ```

2. Add your images to these folders

3. Update component code:
   ```javascript
   // Replace this:
   <div className="image-placeholder">...</div>
   
   // With this:
   <img src="/images/products/solid-blocks.jpg" alt="Solid Blocks" />
   ```

## 🔧 Common Tasks

### Update Business Hours
**src/components/Footer.jsx** (Line ~78-81)
```javascript
<p>Mon - Fri: 8:00 AM - 6:00 PM<br />
Sat: 9:00 AM - 4:00 PM<br />
Sun: Closed</p>
```

### Add a New Service
1. Create new page file: `src/pages/NewService.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/services/new-service" element={<NewService />} />
   ```
3. Add menu item in `src/components/Header.jsx`

### Update Meta Tags for SEO
**index.html** (Line ~6-12)
```html
<meta name="description" content="Your company description" />
<meta name="keywords" content="construction, blocks, architecture" />
```

## 🌐 Going Live

### Building for Production
```powershell
npm run build
```

This creates a `dist` folder with optimized files ready for hosting.

### Deployment Options

#### Option 1: Netlify (Easiest)
1. Sign up at https://netlify.com
2. Drag and drop the `dist` folder
3. Done! Your site is live.

#### Option 2: Vercel
1. Sign up at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel`
4. Follow the prompts

#### Option 3: Traditional Hosting (cPanel, etc.)
1. Build the project: `npm run build`
2. Upload contents of `dist` folder via FTP
3. Point your domain to the uploaded location

## 📊 Adding Google Analytics

**index.html** (Add before `</head>`)
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🔐 Form Integration

### Option 1: Formspree (Easiest)
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update forms:
   ```javascript
   <form action="https://formspree.io/f/YOUR-ID" method="POST">
   ```

### Option 2: EmailJS
1. Sign up at https://emailjs.com
2. Follow their React integration guide
3. Update contact forms with EmailJS code

### Option 3: Custom Backend
Build your own API or use services like:
- Firebase
- Supabase
- AWS Lambda
- Your own Node.js server

## ❓ Troubleshooting

### "Command not found" errors
Restart PowerShell or Command Prompt after installing Node.js.

### Port already in use
Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001,  // Change to different port
}
```

### Styles not loading
1. Check that CSS files are imported in `src/main.jsx`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart development server

### Build fails
1. Check for console errors
2. Ensure all components are properly imported
3. Run: `npm install` again

## 📞 Need Help?

- Check README.md for detailed documentation
- Review component files for inline comments
- Search online for React and Vite documentation

## ✅ Launch Checklist

Before going live:
- [ ] Update all contact information
- [ ] Replace sample content with real data
- [ ] Add real images (or keep placeholders)
- [ ] Test on mobile devices
- [ ] Test all forms
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics
- [ ] Test on different browsers
- [ ] Check all links work
- [ ] Set up domain and SSL certificate

---

**Time to complete setup: 30-60 minutes**

**Questions?** Review the main README.md for comprehensive documentation.
