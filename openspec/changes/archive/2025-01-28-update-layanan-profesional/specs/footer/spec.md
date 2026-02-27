# Delta Spec: Footer

## MODIFIED Requirements

### Requirement: Display Contact Information
The system SHALL display accurate contact information with direct communication links.

#### Scenario: WhatsApp direct link
- **GIVEN** user views footer contact section
- **WHEN** viewing phone number
- **THEN** should display WhatsApp icon (SVG)
- **AND** number should be formatted as +62 853-9313-2410
- **AND** clicking should open WhatsApp link to https://wa.me/6285393132410

#### Scenario: Complete service list
- **GIVEN** user views footer services section
- **WHEN** viewing service list
- **THEN** should display 6 services:
  - Multicam & Livestream
  - LED Videotron
  - Sound System
  - Photobooth 360
  - Lighting System
  - Event Organizer

### Requirement: Display Location Information
The system SHALL display accurate location with interactive map.

#### Scenario: Google Maps with marker
- **GIVEN** user views contact section
- **WHEN** viewing Google Maps embed
- **THEN** map should show accurate location
- **AND** should display marker/pin for "Go Streaming Indonesia"
