# Delta Spec: Layanan Profesional

## MODIFIED Requirements

### Requirement: Display Service Information
The system SHALL display professional service information with accurate descriptions and equipment specifications.

#### Scenario: Multicam service caption
- **GIVEN** user views Multicam service section
- **WHEN** reading the service description
- **THEN** caption should say "broadcast profesional" not "broadcast televisi"

#### Scenario: Service images from real projects
- **GIVEN** user views service sections
- **WHEN** viewing Multicam service
- **THEN** image should be from `/public/multicam.jpeg`
- **AND WHEN** viewing LED Videotron service
- **THEN** image should be from `/public/led.jpeg`

#### Scenario: LED Videotron SEO optimization
- **GIVEN** user views LED Videotron section
- **WHEN** reading the description
- **THEN** text should include keyword "sewa videotron" for SEO

#### Scenario: Photobooth headline accuracy
- **GIVEN** user views Photobooth section
- **WHEN** reading the headline
- **THEN** headline should be "Photobooth Cetak dan Videobooth 360"

#### Scenario: Equipment specifications transparency
- **GIVEN** user views Multicam service details
- **WHEN** checking equipment list
- **THEN** specifications should include:
  - Sony PXW Z190 4K
  - Switcher DataVideo HS1300
  - Wireless Video System Hollyland
  - Clearcomm Hollyland
