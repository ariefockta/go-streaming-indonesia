# Contact Section

## Purpose
Provide multiple contact methods including NAP display, embedded map, and form that generates WhatsApp messages for easy inquiry submission.

## Requirements

### Requirement: Display contact information with WhatsApp direct link

The contact section SHALL display NAP with WhatsApp direct link and complete service list.

#### Scenario: WhatsApp direct link in footer
- **WHEN** user views footer contact section
- **THEN** should display WhatsApp icon (SVG)
- **THEN** number should be formatted as +62 853-9313-2410
- **THEN** clicking should open WhatsApp link to https://wa.me/6285393132410

#### Scenario: Complete service list in footer
- **WHEN** user views footer services section
- **THEN** should display 6 services:
  - Multicam & Livestream
  - LED Videotron
  - Sound System
  - Photobooth 360
  - Lighting System
  - Event Organizer

#### Scenario: Google Maps with accurate marker
- **WHEN** user views contact section
- **THEN** map should show accurate location
- **THEN** should display marker/pin for "Go Streaming Indonesia"

### Requirement: Display contact information with map

The contact section SHALL display NAP (Name, Address, Phone) with embedded Google Map.

#### Scenario: Contact details visible
- **WHEN** user views contact section
- **THEN** business name "Go Streaming Indonesia" is displayed
- **THEN** address "Kompleks Ramayana No 93-94 Balikpapan" is displayed
- **THEN** phone number "085393132410" is displayed as clickable link
- **THEN** Google Map embed shows business location

#### Scenario: User clicks map
- **WHEN** user clicks "Buka di Maps" button
- **THEN** Google Maps opens in new tab with business location

### Requirement: Contact form generates WhatsApp message

The contact form SHALL collect user info and generate WhatsApp message.

#### Scenario: User submits contact form
- **WHEN** user fills form with: name, event date, location, service selection, notes
- **THEN** form validates required fields
- **THEN** "Kirim via WhatsApp" button is enabled

#### Scenario: Form submission redirects to WhatsApp
- **WHEN** user clicks "Kirim via WhatsApp"
- **THEN** WhatsApp opens with prefilled message containing all form data
- **THEN** user can review and send message

### Requirement: Form is mobile friendly

Contact form SHALL be optimized for mobile input.

#### Scenario: Mobile form layout
- **WHEN** viewport width is less than 768px
- **THEN** form fields stack vertically
- **THEN** input fields have appropriate mobile keyboard types (tel, date, text)
