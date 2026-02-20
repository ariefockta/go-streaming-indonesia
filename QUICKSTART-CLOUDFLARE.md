# Quick Deploy to Cloudflare Pages

## 🚀 Deploy dalam 5 Menit

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/go-streaming-landing-page.git
git push -u origin main
```

### 2. Deploy ke Cloudflare
1. Login: https://dash.cloudflare.com
2. Workers & Pages → Create application → Pages
3. Connect to Git → Pilih repository
4. Settings:
   - Build command: (kosongkan)
   - Build output: /
5. Save and Deploy

### 3. Done! 🎉
Site live di: `https://gostreamingid.pages.dev`

## Files untuk Cloudflare Pages
- ✅ `_headers` - Security & caching headers
- ✅ `_redirects` - SPA routing
- ✅ `wrangler.toml` - Cloudflare config
- ✅ `sitemap.xml` - SEO
- ✅ `robots.txt` - Search engines

## Keuntungan Cloudflare Pages
- ✅ Unlimited bandwidth (gratis)
- ✅ 300+ CDN locations worldwide
- ✅ DDoS protection included
- ✅ Auto SSL certificate
- ✅ Deploy time < 1 menit
- ✅ Free custom domain

## Custom Domain
1. Project → Custom domains
2. Add domain: gostreamingid.com
3. Cloudflare auto-configure DNS
4. HTTPS aktif dalam 5 menit

## Monitoring
- Analytics: Cloudflare Web Analytics (gratis)
- Performance: Built-in Core Web Vitals
- Security: Real-time threat monitoring

## Support
📖 Docs: https://developers.cloudflare.com/pages
💬 Community: https://community.cloudflare.com
