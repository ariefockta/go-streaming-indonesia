# Deployment Guide - Cloudflare Pages

## Prerequisites
- GitHub account
- Cloudflare account (free tier)
- Domain name (optional, Cloudflare provides free subdomain)

## Step 1: Prepare Repository

### 1.1 Initialize Git
```bash
git init
git add .
git commit -m "Initial commit - Go Streaming Landing Page"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Create repository: "go-streaming-landing-page"
3. Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/go-streaming-landing-page.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Cloudflare Pages

### 2.1 Login to Cloudflare
1. Go to https://dash.cloudflare.com
2. Login atau sign up (gratis)
3. Pilih "Workers & Pages" dari sidebar

### 2.2 Create New Project
1. Click "Create application"
2. Pilih tab "Pages"
3. Click "Connect to Git"
4. Authorize Cloudflare dengan GitHub
5. Select repository "go-streaming-landing-page"

### 2.3 Configure Build Settings
```
Project name: gostreamingid
Production branch: main
Build command: (kosongkan)
Build output directory: /
Root directory: /
```

### 2.4 Deploy
1. Click "Save and Deploy"
2. Wait 1-2 menit untuk deployment
3. Site live di: https://gostreamingid.pages.dev

## Step 3: Custom Domain (Optional)

### 3.1 Add Custom Domain
1. Go to project → Custom domains
2. Click "Set up a custom domain"
3. Enter domain: gostreamingid.com
4. Cloudflare auto-configure DNS

### 3.2 Enable HTTPS
- Cloudflare auto-provision SSL (gratis)
- HTTPS aktif dalam 5 menit
- Force HTTPS otomatis enabled

## Step 4: Optimize Settings

### 4.1 Enable Speed Optimizations
1. Go to project → Settings → Speed
2. Enable:
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - Early Hints
   - HTTP/3 (QUIC)

### 4.2 Configure Caching
1. Go to Caching → Configuration
2. Set Browser Cache TTL: 1 year
3. Enable "Always Online"

### 4.3 Security Settings
1. Go to Security → Settings
2. Enable:
   - Bot Fight Mode
   - Security Level: Medium
   - Challenge Passage: 30 minutes

## Step 5: Post-Deployment

### 5.1 Test Production
```bash
# Test site
curl -I https://gostreamingid.pages.dev

# Run Lighthouse
npx lighthouse https://gostreamingid.pages.dev --view
```

### 5.2 Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: gostreamingid.com
3. Verify ownership (DNS method)
4. Submit sitemap: https://gostreamingid.com/sitemap.xml

### 5.3 Setup Analytics
**Option 1: Cloudflare Web Analytics (Recommended)**
1. Go to Analytics → Web Analytics
2. Enable for your site
3. Add tracking code to index.html:
```html
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

**Option 2: Google Analytics 4**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Step 6: Continuous Deployment

### Auto Deploy
- Push ke main branch → auto deploy
- Deploy time: 30-60 detik
- Preview deployments untuk PR

### Manual Deploy
1. Go to project → Deployments
2. Click "Create deployment"
3. Upload files atau connect branch

## Performance Features

### Cloudflare CDN
- 300+ edge locations worldwide
- Auto caching static assets
- DDoS protection included

### Speed Optimizations
- Brotli compression
- HTTP/3 support
- Early Hints
- Image optimization (Cloudflare Images)

### Monitoring
- Real-time analytics
- Core Web Vitals tracking
- Traffic insights
- Security events

## Troubleshooting

### Site Not Loading
```bash
# Check DNS
nslookup gostreamingid.com

# Check deployment status
# Go to Deployments tab in dashboard
```

### Images Not Showing
- Verify file paths (case-sensitive)
- Check _headers file configuration
- Clear Cloudflare cache

### Slow Performance
```bash
# Purge cache
# Go to Caching → Configuration → Purge Everything

# Check Cloudflare Analytics
# Go to Analytics → Performance
```

## Advanced Features

### 1. Cloudflare Workers (Optional)
Add custom logic at edge:
```javascript
// workers/redirect.js
export default {
  async fetch(request) {
    // Custom redirects or logic
    return fetch(request);
  }
}
```

### 2. Page Rules (Optional)
1. Go to Rules → Page Rules
2. Add rules for specific URLs
3. Configure caching, redirects, etc.

### 3. Cloudflare Images (Optional)
- Automatic image optimization
- WebP/AVIF conversion
- Responsive images
- Pricing: $5/month for 100k images

## Deployment Checklist

- [x] Code pushed to GitHub
- [x] Cloudflare Pages project created
- [x] Site deployed successfully
- [x] Custom domain configured (optional)
- [x] HTTPS enabled
- [x] Speed optimizations enabled
- [x] Analytics configured
- [x] Sitemap submitted to Google
- [x] All links tested
- [x] Mobile testing completed
- [x] Lighthouse score 90+

## Cost

**Cloudflare Pages Free Tier:**
- Unlimited bandwidth
- Unlimited requests
- 500 builds/month
- 1 build at a time
- Free SSL certificate
- Free DDoS protection

**Upgrade to Pro ($20/month):**
- 5,000 builds/month
- 5 concurrent builds
- Advanced analytics
- Priority support

## Support

- Docs: https://developers.cloudflare.com/pages
- Community: https://community.cloudflare.com
- Status: https://www.cloudflarestatus.com

## Comparison: Cloudflare vs Netlify

| Feature | Cloudflare Pages | Netlify |
|---------|-----------------|---------|
| Bandwidth | Unlimited | 100GB/month |
| Builds | 500/month | 300/month |
| CDN | 300+ locations | 6 locations |
| DDoS Protection | Included | Not included |
| Price | Free | Free |
| Build Time | Faster | Standard |

## Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ✅ Configure custom domain
3. ✅ Enable speed optimizations
4. ✅ Setup analytics
5. ✅ Submit sitemap
6. ✅ Monitor performance
