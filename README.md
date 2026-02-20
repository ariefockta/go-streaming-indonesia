# Go Streaming Indonesia - Landing Page

Landing page profesional untuk jasa sewa multicam, livestream, LED videotron, sound system, dan photobooth di Balikpapan & Kalimantan Timur.

## 🚀 Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized dengan JSON-LD schema
- ✅ WhatsApp integration untuk semua CTA
- ✅ Portfolio gallery dengan lightbox
- ✅ FAQ accordion
- ✅ Contact form dengan WhatsApp redirect
- ✅ Lazy loading images
- ✅ Performance optimized (90+ Lighthouse score)
- ✅ Client logos infinite scroll animation
- ✅ Counter animation on scroll
- ✅ Article modal dengan tips & panduan

## 🛠️ Tech Stack

- HTML5 (Semantic markup)
- Tailwind CSS (via CDN)
- Vanilla JavaScript (no framework)
- Google Fonts (Spline Sans)
- Material Symbols Icons

## 📦 Project Structure

```
gostreamingid/
├── index.html              # Main HTML file
├── script.js               # JavaScript functionality
├── script.min.js           # Minified JavaScript
├── styles.css              # Additional CSS (legacy)
├── styles.min.css          # Minified CSS
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
├── netlify.toml            # Netlify configuration
├── TESTING.md              # Testing checklist
├── DEPLOYMENT.md           # Deployment guide
├── public/                 # Static assets
│   ├── clients/            # Client logos
│   ├── projects/           # Portfolio images
│   ├── favicon/            # Favicon files
│   └── logo*.png           # Company logos
└── openspec/               # Project specifications
```

## 🚀 Quick Start

### Local Development

1. Clone repository:
```bash
git clone https://github.com/YOUR_USERNAME/go-streaming-landing-page.git
cd go-streaming-landing-page
```

2. Open in browser:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or simply open index.html in browser
```

3. Visit: http://localhost:8000

### Build for Production

```bash
# Install dependencies
npm install -g terser csso-cli

# Minify JavaScript
terser script.js -o script.min.js -c -m

# Minify CSS
csso styles.css -o styles.min.css
```

## 📱 Testing

Lihat [TESTING.md](TESTING.md) untuk checklist lengkap testing.

### Quick Test Commands

```bash
# Run Lighthouse audit
npx lighthouse https://gostreamingid.com --view

# Test mobile responsiveness
npx responsive-viewer index.html
```

## 🌐 Deployment

Lihat [DEPLOYMENT.md](DEPLOYMENT.md) untuk panduan deployment lengkap ke Netlify.

### Quick Deploy to Netlify

1. Push to GitHub
2. Connect repository di Netlify
3. Deploy otomatis!

## 📊 Performance

Target metrics:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🔧 Configuration

### Update WhatsApp Number

Cari dan replace semua instance:
```
6285393132410
```

### Update Company Info

Edit di `index.html`:
- Meta tags (line 5-30)
- JSON-LD schema (line 130-145)
- Contact section (line 800+)
- Footer (line 900+)

## 📝 Content Management

### Add New Service

1. Edit section `#layanan` di index.html
2. Tambah service card dengan struktur yang sama
3. Update WhatsApp message template

### Add Portfolio Item

1. Upload image ke `/public/projects/`
2. Tambah item di portfolio grid
3. Set `data-category` attribute
4. Add `onclick="openModal('/path/to/image.jpg')"`

### Update Packages

Edit section `#paket` dengan harga dan benefit terbaru.

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths (case-sensitive)
- Verify images exist in `/public/` folder
- Check browser console for 404 errors

### WhatsApp Links Not Working
- Test on actual mobile device
- Verify phone number format
- Check URL encoding

### Slow Performance
- Run Lighthouse audit
- Optimize images (use WebP)
- Check network tab for large files

## 📄 License

© 2024 Go Streaming Indonesia. All rights reserved.

## 👥 Contact

- Website: https://gostreamingid.com
- WhatsApp: +62 853-9313-2410
- Instagram: @gostreamingindonesia

## 🙏 Credits

- Design: Go Streaming Indonesia
- Development: Custom built
- Icons: Material Symbols (Google)
- Fonts: Spline Sans (Google Fonts)
