## ADDED Requirements

### Requirement: Hero section displays value proposition

The hero section SHALL display the main headline, subheadline, and primary call-to-action buttons above the fold.

#### Scenario: User lands on page
- **WHEN** user visits the landing page
- **THEN** hero section displays headline "Sewa Multicam, Livestream, Soundsystem, Videotron, Photobooth, 360 Booth & EO – Balikpapan"
- **THEN** two CTA buttons are visible: "WhatsApp Sekarang" and "Cek Ketersediaan Tanggal"

### Requirement: Trust badges visible

The hero section SHALL display trust badges to build credibility.

#### Scenario: Trust indicators shown
- **WHEN** user views hero section
- **THEN** four badges are displayed: "Crew Berpengalaman", "Setup Tepat Waktu", "Support Selama Acara", "Balikpapan & Kaltim"

### Requirement: Hero is mobile responsive

The hero section SHALL adapt layout for mobile devices.

#### Scenario: Mobile view
- **WHEN** viewport width is less than 768px
- **THEN** headline font size reduces appropriately
- **THEN** CTA buttons stack vertically
- **THEN** trust badges display in 2x2 grid or horizontal scroll
