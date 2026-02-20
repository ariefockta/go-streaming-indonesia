## Context

Go Streaming Indonesia saat ini tidak memiliki web presence. Project ini membangun landing page one-page dari nol untuk 8 layanan event production di Balikpapan. Target user: calon klien yang mencari jasa event via Google/sosial media, dengan ekspektasi respons cepat via WhatsApp.

**Current State**: Empty project dengan npm initialized, swagger-parser dan express sudah terinstall.

**Constraints**:
- Budget minimal: vanilla JS, no framework
- Hosting: static hosting (Netlify/Vercel) atau simple Node server
- Primary conversion: WhatsApp (085393132410)
- SEO lokal: fokus keyword "Balikpapan" + layanan

## Goals / Non-Goals

**Goals:**
- One-page responsive website dengan 9 sections (Hero → Footer)
- WhatsApp conversion optimization: floating button + prefilled messages
- SEO lokal: schema markup LocalBusiness, meta tags, Core Web Vitals <2.5s LCP
- Mobile-first: 70% traffic dari mobile
- Zero backend: form submit via WhatsApp deep-link

**Non-Goals:**
- Admin dashboard atau CMS
- Payment gateway atau booking system
- Multi-language support
- Blog atau content pages

## Decisions

### 1. Tech Stack: Vanilla HTML/CSS/JS (No Framework)

**Decision**: Pure HTML5 + CSS3 + vanilla JavaScript

**Rationale**:
- Fastest load time (no framework overhead)
- Easiest deployment (static files)
- No build step complexity
- Total bundle <100KB

**Alternatives Considered**:
- React/Next.js: Overkill untuk one-page, adds 40KB+ bundle
- Vue: Lebih ringan tapi tetap unnecessary untuk static content

### 2. WhatsApp Integration: Deep-Link dengan Template Message

**Decision**: `https://wa.me/6285393132410?text=<encoded-message>`

**Rationale**:
- No backend needed
- Works on all devices
- Pre-fills context (layanan, tanggal, lokasi)
- Instant conversion tracking via WhatsApp Business

**Template Format**:
```
Halo Go Streaming Indonesia,
Saya mau sewa [LAYANAN]
Tanggal: [DATE]
Lokasi: [LOCATION]
Durasi: [DURATION]
```

### 3. Image Optimization: WebP + Lazy Loading

**Decision**: 
- WebP format dengan JPEG fallback
- Native lazy loading (`loading="lazy"`)
- Max width 1920px, compress 80% quality

**Rationale**:
- WebP saves 30-50% file size vs JPEG
- Lazy load defers offscreen images
- Target LCP <2.5s

**Alternatives Considered**:
- CDN (Cloudinary): Adds cost, unnecessary untuk <50 images
- AVIF: Browser support masih 70%

### 4. Portfolio Gallery: CSS Grid + Vanilla Lightbox

**Decision**: CSS Grid layout + custom lightbox (no library)

**Rationale**:
- Grid responsive tanpa media query breakpoints
- Custom lightbox <5KB vs Lightbox2 (60KB)
- Tab filtering via CSS classes + JS toggle

**Implementation**:
```js
// Lightbox: overlay + img + close button
// Tab filter: data-category attribute + classList
```

### 5. SEO Schema: JSON-LD LocalBusiness + Service

**Decision**: Inline JSON-LD dalam `<head>`

**Schema Types**:
- LocalBusiness (NAP + geo coordinates)
- Service (per 8 layanan)
- FAQPage (accordion items)

**Rationale**:
- Google rich results eligibility
- Local pack ranking boost
- Zero external dependency

### 6. Navigation: Smooth Scroll + Intersection Observer

**Decision**: 
- Anchor links dengan `scroll-behavior: smooth`
- Intersection Observer untuk active menu highlight

**Rationale**:
- Native smooth scroll (no jQuery)
- Intersection Observer performa lebih baik vs scroll event listener
- Fallback: instant jump untuk browser lama

### 7. Form Handling: No Backend, Direct WhatsApp Redirect

**Decision**: Form submit → generate WhatsApp URL → `window.location.href`

**Rationale**:
- Zero server cost
- No email deliverability issues
- User sees message before sending (transparency)

**Flow**:
```
User fills form → JS builds message → Redirect to wa.me → User confirms send
```

### 8. Deployment: Static Hosting (Netlify)

**Decision**: Netlify (free tier) dengan custom domain

**Rationale**:
- Free SSL + CDN
- Auto deploy from Git
- Form handling (optional fallback)
- Edge caching untuk Indonesia

**Alternatives Considered**:
- Vercel: Sama bagus, pilih salah satu
- GitHub Pages: No server-side redirects

## Risks / Trade-offs

**[Risk]** WhatsApp deep-link tidak berfungsi di desktop tanpa WhatsApp Web  
→ **Mitigation**: Detect device, show phone number fallback untuk desktop

**[Risk]** Image-heavy portfolio memperlambat LCP  
→ **Mitigation**: Hero image priority fetch, lazy load sisanya, WebP compression

**[Risk]** No analytics untuk conversion tracking  
→ **Mitigation**: Google Analytics 4 event tracking pada WhatsApp button clicks

**[Risk]** SEO one-page sulit rank untuk multiple keywords  
→ **Mitigation**: Fokus 3 keyword utama (multicam, sound system, videotron) + lokasi, sisanya long-tail

**[Trade-off]** No CMS = update konten perlu edit HTML  
→ **Acceptable**: Update jarang (portfolio 1x/bulan), trade-off untuk performa

## Migration Plan

**Phase 1: Development (Week 1)**
- Build HTML structure + CSS styling
- Implement JS interactions (lightbox, form, navigation)
- Add schema markup + meta tags

**Phase 2: Content Population (Week 1)**
- Add 8 service descriptions + images
- Portfolio gallery (15-20 items)
- Testimonials (6 items)
- FAQ (8 questions)

**Phase 3: Testing (Week 1)**
- Mobile responsiveness (iOS/Android)
- WhatsApp deep-link testing
- Lighthouse audit (target: 90+ performance)
- Cross-browser (Chrome, Safari, Firefox)

**Phase 4: Deployment (Week 2)**
- Deploy to Netlify
- Setup custom domain (gostreamingid.com)
- Submit sitemap ke Google Search Console
- Setup Google Business Profile

**Rollback Strategy**: 
- Git revert untuk code issues
- Netlify instant rollback ke previous deploy
- DNS TTL 300s untuk domain switch

## Open Questions

1. **Domain name**: Sudah punya domain atau perlu beli? (gostreamingid.com available)
2. **Portfolio assets**: Berapa banyak foto/video yang sudah ada? Format apa?
3. **Testimonial content**: Ada testimonial real atau perlu request ke klien lama?
4. **Google Business Profile**: Sudah setup atau perlu dibuat dari nol?
5. **Paket pricing**: Apakah harga ditampilkan atau "starting from" saja?
