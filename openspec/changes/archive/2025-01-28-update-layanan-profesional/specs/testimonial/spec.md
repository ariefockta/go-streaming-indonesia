# Delta Spec: Testimonial

## MODIFIED Requirements

### Requirement: Display Client Testimonials
The system SHALL display client testimonials in an engaging and credible manner.

#### Scenario: Horizontal scroll with animation
- **GIVEN** user views testimonial section
- **WHEN** page loads
- **THEN** testimonials should scroll horizontally with infinite loop animation
- **AND** animation should pause when user hovers over testimonials
- **AND** no scrollbar should be visible (overflow-hidden)

#### Scenario: Display 9 company testimonials
- **GIVEN** user views testimonials
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

#### Scenario: Testimonial format
- **GIVEN** user views a testimonial card
- **WHEN** reading the testimonial
- **THEN** should display person name in bold
- **AND** company name should be displayed below in smaller text
- **AND** testimonial quote should be displayed above
- **AND** 5-star rating should be visible
