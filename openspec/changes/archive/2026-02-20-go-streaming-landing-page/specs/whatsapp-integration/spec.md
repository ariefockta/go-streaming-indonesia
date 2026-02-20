## ADDED Requirements

### Requirement: Floating WhatsApp button always visible

A floating WhatsApp button SHALL remain visible throughout page scroll.

#### Scenario: Floating button position
- **WHEN** user views any part of the page
- **THEN** WhatsApp button is fixed at bottom-right corner
- **THEN** button displays WhatsApp icon and is clearly clickable

#### Scenario: Button opens WhatsApp
- **WHEN** user clicks floating WhatsApp button
- **THEN** WhatsApp opens with generic inquiry message

### Requirement: Prefilled message templates per context

WhatsApp links SHALL include context-specific prefilled messages.

#### Scenario: Service-specific message
- **WHEN** user clicks "Tanya Harga" on a service card
- **THEN** WhatsApp message includes: "Halo Go Streaming Indonesia, Saya mau sewa [SERVICE_NAME]"

#### Scenario: Package-specific message
- **WHEN** user clicks "Minta Quote" on a package
- **THEN** WhatsApp message includes: "Halo Go Streaming Indonesia, Saya tertarik dengan [PACKAGE_NAME]"

#### Scenario: Contact form message
- **WHEN** user submits contact form
- **THEN** WhatsApp message includes: name, event date, location, selected service, and notes

### Requirement: WhatsApp number is correct

All WhatsApp links SHALL use phone number 6285393132410.

#### Scenario: Correct number format
- **WHEN** any WhatsApp link is generated
- **THEN** URL uses format: https://wa.me/6285393132410?text=[encoded_message]
