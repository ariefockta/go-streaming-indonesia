# Testimonial Carousel

## Purpose
Build trust and credibility through client testimonials displayed in an engaging carousel format with auto-play functionality.

## Requirements

### Requirement: Display client testimonials with auto-scroll animation

The testimonial section SHALL display client testimonials in horizontal scroll with infinite loop animation.

#### Scenario: Horizontal scroll with animation
- **WHEN** page loads
- **THEN** testimonials should scroll horizontally with infinite loop animation
- **THEN** animation should pause when user hovers over testimonials
- **THEN** no scrollbar should be visible (overflow-hidden)

#### Scenario: Display 9 company testimonials
- **WHEN** all testimonials are loaded
- **THEN** should display 9 testimonials from major companies:
  - Budi Santoso - Kementerian PUPR
  - Dian Wijaya - Pertamina
  - Ahmad Prasetyo - Pemkot Balikpapan
  - Rina Hartono - Waskita Karya
  - Fajar Aditya - Adhi Karya
  - Siti Maulida - Kementerian Keuangan
  - Indra Kusuma - Hutama Karya
  - Linda Novita - Pemprov Kaltim
  - Taufik Pratama - Kementerian Kominfo

#### Scenario: Testimonial format with company names
- **WHEN** user views a testimonial card
- **THEN** should display person name in bold
- **THEN** company name should be displayed below in smaller text
- **THEN** testimonial quote should be displayed above
- **THEN** 5-star rating should be visible

### Requirement: Display client testimonials in carousel

The testimonial section SHALL display 3-6 testimonials in carousel format.

#### Scenario: Testimonials visible
- **WHEN** user views testimonial section
- **THEN** testimonial carousel displays with at least 3 testimonials
- **THEN** each testimonial shows quote, client name, event type, and city

#### Scenario: User navigates carousel
- **WHEN** user clicks next/previous arrows or swipes on mobile
- **THEN** carousel transitions to next/previous testimonial
- **THEN** active indicator updates

### Requirement: Auto-play carousel

Testimonial carousel SHALL auto-advance every 5 seconds.

#### Scenario: Auto-advance behavior
- **WHEN** user views testimonial section without interaction
- **THEN** carousel automatically advances to next testimonial after 5 seconds
- **THEN** auto-play pauses when user manually navigates
