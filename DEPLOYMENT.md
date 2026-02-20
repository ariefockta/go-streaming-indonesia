# Deployment Guide - Go Streaming Landing Page

## Prerequisites
- GitHub account
- Netlify account (free tier is sufficient)
- Domain name (optional, Netlify provides free subdomain)

## Step 1: Prepare Repository

### 1.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Go Streaming Landing Page"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Create new repository named "go-streaming-landing-page"
3. Don't initialize with README (we already have files)

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/go-streaming-landing-page.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### 2.1 Sign Up/Login to Netlify
1. Go to https://www.netlify.com
2. Sign up with GitHub account (recommended)
3. Authorize Netlify to access your repositories

### 2.2 Create New Site
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub" as your Git provider
3. Select your repository "go-streaming-landing-page"
4. Configure build settings:
   - **Branch to deploy:** main
   - **Build command:** (leave empty)
   - **Publish directory:** . (dot for root)
5. Click "Deploy site"

### 2.3 Wait for Deployment
- First deployment takes 1-2 minutes
- Netlify will provide a random subdomain (e.g., random-name-123.netlify.app)
- Site is now live!

## Step 3: Configure Custom Domain (Optional)

### 3.1 Add Custom Domain
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., gostreamingid.com)
4. Follow DNS configuration instructions

### 3.2 DNS Configuration
Add these records to your domain registrar:

**For root domain (gostreamingid.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 3.3 Enable HTTPS
1. Netlify automatically provisions SSL certificate
2. Wait 5-10 minutes for certificate activation
3. Enable "Force HTTPS" in domain settings

## Step 4: Configure Environment

### 4.1 Update Site Name
1. Go to Site settings → General
2. Change site name to something memorable
3. Your URL becomes: your-name.netlify.app

### 4.2 Enable Forms (if needed)
1. Go to Site settings → Forms
2. Enable form notifications
3. Add notification email

## Step 5: Post-Deployment Tasks

### 5.1 Test Production Site
- [ ] Test all WhatsApp links
- [ ] Verify images load correctly
- [ ] Test mobile responsiveness
- [ ] Check all navigation links
- [ ] Test contact form
- [ ] Verify portfolio lightbox works

### 5.2 Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property with your domain
3. Verify ownership (use HTML tag method)
4. Submit sitemap: https://gostreamingid.com/sitemap.xml

### 5.3 Setup Google Analytics 4
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to index.html before </head>:
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
4. Commit and push changes

## Step 6: Continuous Deployment

### 6.1 Automatic Deployments
- Every push to main branch triggers automatic deployment
- Netlify rebuilds and deploys in 1-2 minutes
- No manual intervention needed

### 6.2 Deploy Previews
- Pull requests automatically get preview URLs
- Test changes before merging to main
- Preview URLs are temporary

## Step 7: Monitoring & Maintenance

### 7.1 Monitor Performance
- Use Netlify Analytics (paid) or Google Analytics (free)
- Check Core Web Vitals in Search Console
- Run monthly Lighthouse audits

### 7.2 Update Content
1. Edit files locally
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push`
4. Netlify auto-deploys in 1-2 minutes

### 7.3 Backup
- GitHub serves as version control backup
- Netlify keeps deployment history
- Download site files from Netlify if needed

## Troubleshooting

### Site Not Loading
- Check Netlify deploy log for errors
- Verify DNS settings are correct
- Clear browser cache

### Images Not Showing
- Check file paths are correct (case-sensitive)
- Verify images are in /public/ folder
- Check image file extensions

### WhatsApp Links Not Working
- Test on actual mobile device
- Verify phone number format (+62...)
- Check URL encoding in links

### Slow Loading
- Run Lighthouse audit
- Optimize images further
- Check Netlify bandwidth limits

## Support Resources
- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
- GitHub Issues: Create issue in your repository

## Deployment Checklist
- [ ] Code pushed to GitHub
- [ ] Site deployed to Netlify
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Sitemap submitted to Google
- [ ] Google Analytics configured
- [ ] All links tested on production
- [ ] Mobile testing completed
- [ ] Performance audit passed (90+ score)
