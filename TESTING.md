# Testing Checklist - Go Streaming Landing Page

## Mobile Testing (iOS/Android)

### WhatsApp Links
- [ ] Test floating WhatsApp button on mobile
- [ ] Test WhatsApp widget functionality
- [ ] Test all service "Tanya Harga" buttons
- [ ] Test package selection WhatsApp links
- [ ] Test contact form WhatsApp submission
- [ ] Verify pre-filled messages are correct

### Responsive Layout
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test landscape orientation
- [ ] Verify mobile menu toggle works
- [ ] Check hero section on mobile
- [ ] Verify service cards stack properly
- [ ] Check package cards on mobile
- [ ] Test portfolio grid on mobile
- [ ] Verify testimonials display correctly
- [ ] Check FAQ accordion on mobile
- [ ] Test contact form on mobile

## Desktop Testing

### Navigation
- [ ] Test sticky header behavior
- [ ] Verify smooth scroll to sections
- [ ] Test active section highlighting
- [ ] Check all navigation links work

### Interactive Elements
- [ ] Test portfolio filter buttons
- [ ] Verify lightbox open/close
- [ ] Test FAQ accordion expand/collapse
- [ ] Check counter animation on scroll
- [ ] Test client logos infinite scroll
- [ ] Verify hover effects on cards

### Forms
- [ ] Test contact form validation
- [ ] Verify required fields work
- [ ] Test date picker functionality
- [ ] Check dropdown selection
- [ ] Test form submission to WhatsApp

## Cross-Browser Testing

### Chrome
- [ ] Test all functionality
- [ ] Check layout and styling
- [ ] Verify animations work

### Safari
- [ ] Test all functionality
- [ ] Check layout and styling
- [ ] Verify animations work

### Firefox
- [ ] Test all functionality
- [ ] Check layout and styling
- [ ] Verify animations work

### Edge
- [ ] Test all functionality
- [ ] Check layout and styling
- [ ] Verify animations work

## Performance Testing

### Lighthouse Audit
- [ ] Run Lighthouse on desktop (target 90+)
- [ ] Run Lighthouse on mobile (target 85+)
- [ ] Check Performance score
- [ ] Check Accessibility score
- [ ] Check Best Practices score
- [ ] Check SEO score

### Core Web Vitals
- [ ] Measure LCP (Largest Contentful Paint) - target < 2.5s
- [ ] Measure FID (First Input Delay) - target < 100ms
- [ ] Measure CLS (Cumulative Layout Shift) - target < 0.1

### Loading Speed
- [ ] Test on 3G connection
- [ ] Test on 4G connection
- [ ] Test on WiFi
- [ ] Verify lazy loading works for images
- [ ] Check font loading (no FOIT/FOUT)

## SEO Testing

- [ ] Verify meta tags are present
- [ ] Check Open Graph tags
- [ ] Verify JSON-LD schema markup
- [ ] Test canonical URL
- [ ] Check heading hierarchy (H1, H2, H3)
- [ ] Verify alt text on images
- [ ] Test sitemap.xml accessibility
- [ ] Check robots.txt

## Accessibility Testing

- [ ] Test keyboard navigation
- [ ] Verify focus indicators
- [ ] Check color contrast ratios
- [ ] Test with screen reader
- [ ] Verify ARIA labels
- [ ] Check form labels

## Content Testing

- [ ] Verify all text is readable
- [ ] Check for typos
- [ ] Verify phone numbers are clickable
- [ ] Test all external links
- [ ] Verify images load correctly
- [ ] Check video/media embeds

## Notes
- Document any issues found
- Take screenshots of bugs
- Note device/browser versions
- Record performance metrics
