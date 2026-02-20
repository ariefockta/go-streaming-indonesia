## ADDED Requirements

### Requirement: Meta tags for SEO

The page SHALL include proper meta tags for search engines and social sharing.

#### Scenario: Essential meta tags present
- **WHEN** page HTML is rendered
- **THEN** title tag contains: "Go Streaming Indonesia | Sewa Livestream, Sound, Videotron Balikpapan"
- **THEN** meta description contains: "Jasa sewa multicam & livestream, sound system, videotron, photobooth, 360 booth & EO di Balikpapan. WA 085393132410"
- **THEN** Open Graph tags are present for social sharing

### Requirement: Local business schema markup

The page SHALL include JSON-LD schema for LocalBusiness.

#### Scenario: LocalBusiness schema present
- **WHEN** page HTML is rendered
- **THEN** JSON-LD script includes LocalBusiness schema with: name, address, phone, geo coordinates, opening hours

#### Scenario: Service schema for each offering
- **WHEN** page HTML is rendered
- **THEN** JSON-LD includes Service schema for each of 8 services

### Requirement: FAQ schema markup

The FAQ section SHALL include FAQPage schema markup.

#### Scenario: FAQPage schema present
- **WHEN** page HTML is rendered
- **THEN** JSON-LD includes FAQPage schema with all FAQ questions and answers

### Requirement: Performance optimization for Core Web Vitals

The page SHALL meet Core Web Vitals thresholds.

#### Scenario: LCP under 2.5 seconds
- **WHEN** page loads on 3G connection
- **THEN** Largest Contentful Paint occurs within 2.5 seconds

#### Scenario: FID under 100ms
- **WHEN** user interacts with page
- **THEN** First Input Delay is less than 100 milliseconds

#### Scenario: CLS under 0.1
- **WHEN** page loads and renders
- **THEN** Cumulative Layout Shift score is less than 0.1

### Requirement: Image optimization

All images SHALL be optimized for web performance.

#### Scenario: WebP format with fallback
- **WHEN** images are served
- **THEN** WebP format is used for supported browsers
- **THEN** JPEG fallback is provided for unsupported browsers

#### Scenario: Lazy loading enabled
- **WHEN** page loads
- **THEN** offscreen images use loading="lazy" attribute
- **THEN** hero image uses loading="eager" or preload

### Requirement: Semantic HTML structure

The page SHALL use semantic HTML5 elements.

#### Scenario: Proper heading hierarchy
- **WHEN** page HTML is rendered
- **THEN** only one H1 tag is present (main headline)
- **THEN** H2 tags are used for section headings
- **THEN** heading hierarchy is logical (no skipped levels)

#### Scenario: Semantic elements used
- **WHEN** page HTML is rendered
- **THEN** semantic tags are used: header, nav, main, section, article, aside, footer
