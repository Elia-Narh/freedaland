# 🚀 Freedaland Construction - Quick Reference

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 File Locations

### Update Contact Info
- `src/components/Header.jsx` - Top navigation bar
- `src/components/Footer.jsx` - Footer contact details
- `src/pages/Contact.jsx` - Contact page details

### Update Pricing
- `src/pages/SolidBlocks.jsx` - Line 6
- `src/pages/HollowBlocks.jsx` - Line 6

### Update Properties
- `src/pages/LandSales.jsx` - Lines 12-67
- `src/pages/PropertyRentals.jsx` - Lines 12-67

### Update Team
- `src/pages/About.jsx` - Lines 32-55
- `src/pages/Architecture.jsx` - Lines 67-81

### Update Colors
- `src/index.css` - Lines 5-15 (CSS variables)

### Update SEO
- `index.html` - Lines 6-12 (meta tags)

## 🎨 Color Variables

```css
--primary-color: #2563eb      (Main blue)
--secondary-color: #f59e0b    (Orange accent)
--success: #10b981            (Green)
--error: #ef4444              (Red)
--warning: #f59e0b            (Yellow/Orange)
```

## 📄 Page URLs

- Home: `/`
- Solid Blocks: `/products/solid-blocks`
- Hollow Blocks: `/products/hollow-blocks`
- Architecture: `/services/architecture`
- Land Sales: `/real-estate/land-sales`
- Rentals: `/real-estate/rentals`
- About: `/about`
- Contact: `/contact`

## 🔧 Common Tasks

### Add a New Property
```javascript
// In LandSales.jsx or PropertyRentals.jsx
const properties = [
  {
    id: X,
    title: 'Property Name',
    location: 'Location',
    price: 100000,
    // ... other details
  }
]
```

### Change Company Name
Update in:
1. `src/components/Header.jsx` (Logo)
2. `src/components/Footer.jsx` (Footer logo)
3. `index.html` (Page title)
4. All page headers and content

### Add Social Media Links
`src/components/Footer.jsx` - Lines 36-51

### Update Business Hours
`src/components/Footer.jsx` - Lines 78-81

## 🌐 Deployment Quick Guide

### Netlify
1. Build: `npm run build`
2. Drag `dist` folder to netlify.com
3. Done!

### Vercel
```bash
npm i -g vercel
vercel
```

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder contents via FTP
3. Point domain to uploaded files

## 📞 Quick Contact Template

Update all instances of:
- Phone: `+123 456 7890`
- Email: `info@freedaland.com`
- Address: `123 Construction Ave, City, State 12345`

## 🎯 Priority Customizations

1. ✅ Contact information (Header, Footer, Contact page)
2. ✅ Block pricing (SolidBlocks, HollowBlocks)
3. ✅ Property listings (LandSales, PropertyRentals)
4. ✅ Team members (About, Architecture)
5. ⏭️ Add real images (optional)
6. ⏭️ Update business hours
7. ⏭️ Add social media links
8. ⏭️ Configure forms (Formspree/EmailJS)

## 🐛 Troubleshooting

### Server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles not working
1. Clear browser cache (Ctrl+Shift+Del)
2. Check CSS imports in `main.jsx`
3. Restart dev server

### Build errors
1. Check console for error messages
2. Verify all imports are correct
3. Ensure all components return JSX

## 📱 Test Checklist

- [ ] All pages load correctly
- [ ] Mobile menu works
- [ ] Forms submit properly
- [ ] Calculator works
- [ ] Search/filter functions work
- [ ] All links are correct
- [ ] Looks good on mobile
- [ ] Contact info is correct

## 🔗 Important Links

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Lucide Icons: https://lucide.dev
- Formspree: https://formspree.io
- Netlify: https://netlify.com

## 📚 Documentation Files

- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Step-by-step setup
- `DEV_NOTES.md` - Technical details and future plans
- `QUICK_REF.md` - This file

---

**Need Help?** Check the other documentation files for detailed instructions.

**Ready to Launch?** Follow the deployment guide in README.md!
