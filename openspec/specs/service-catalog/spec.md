# Service Catalog

## Purpose
Showcase all 8 services with clear descriptions, benefits, and direct WhatsApp inquiry buttons to drive service-specific conversions.

## Requirements

### Requirement: Display service information with accuracy

The service catalog SHALL display professional service information with accurate descriptions and equipment specifications.

#### Scenario: Multicam service caption accuracy
- **WHEN** user views Multicam service section
- **THEN** caption should say "broadcast profesional" not "broadcast televisi"

#### Scenario: Service images from real projects
- **WHEN** user views Multicam service
- **THEN** image should be from `/public/multicam.jpeg`
- **WHEN** user views LED Videotron service
- **THEN** image should be from `/public/led.jpeg`

#### Scenario: LED Videotron SEO optimization
- **WHEN** user views LED Videotron section
- **THEN** text should include keyword "sewa videotron" for SEO

#### Scenario: Photobooth headline accuracy
- **WHEN** user views Photobooth section
- **THEN** headline should be "Photobooth Cetak dan Videobooth 360"

#### Scenario: Equipment specifications transparency
- **WHEN** user views Multicam service details
- **THEN** specifications should include:
  - Sony PXW Z190 4K
  - Switcher DataVideo HS1300
  - Wireless Video System Hollyland
  - Clearcomm Hollyland

### Requirement: Display 8 service cards

The service catalog SHALL display all 8 services in a grid layout.

#### Scenario: Desktop view shows grid
- **WHEN** user views service section on desktop
- **THEN** 8 service cards are displayed in 4-column grid
- **THEN** each card shows: icon, service name, 3 benefit points, "Tanya Harga" button

#### Scenario: Mobile view shows single column
- **WHEN** viewport width is less than 768px
- **THEN** service cards display in single column layout

### Requirement: Service order matches brand priority

Services SHALL be ordered with streaming/production services first.

#### Scenario: Service display order
- **WHEN** user views service catalog
- **THEN** services appear in order: Multicam & Livestream, Sound System, LED Videotron, Photobooth Classic, Photobooth AI, 360 Videobooth, Event Organizer, Produksi Event

### Requirement: Each service has WhatsApp CTA

Each service card SHALL have a "Tanya Harga" button that opens WhatsApp with prefilled message.

#### Scenario: User clicks service CTA
- **WHEN** user clicks "Tanya Harga" on any service card
- **THEN** WhatsApp opens with message template including service name
