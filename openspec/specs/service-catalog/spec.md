# Service Catalog

## Purpose
Showcase all 8 services with clear descriptions, benefits, and direct WhatsApp inquiry buttons to drive service-specific conversions.

## Requirements

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
