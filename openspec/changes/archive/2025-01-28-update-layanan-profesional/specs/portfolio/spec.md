# Delta Spec: Portfolio

## MODIFIED Requirements

### Requirement: Display Project Documentation
The system SHALL display project documentation in an accessible and organized manner.

#### Scenario: Horizontal scroll layout
- **GIVEN** user views portfolio section
- **WHEN** viewing on any device
- **THEN** layout should be horizontal scroll with 2 rows
- **AND** should not extend too far vertically

#### Scenario: Display 18 project photos
- **GIVEN** user views portfolio
- **WHEN** all photos are loaded
- **THEN** should display 18 photos total:
  - 4 photos from `/public/multicam/`
  - 3 photos from `/public/LED videotron/`
  - 11 photos from `/public/projects/`

#### Scenario: Category filtering
- **GIVEN** user views portfolio section
- **WHEN** filter buttons are displayed
- **THEN** should show 4 categories:
  - Semua (18 photos)
  - Siaran Langsung (11 photos)
  - LED Videotron (3 photos)
  - Booth (4 photos)

#### Scenario: Filter functionality
- **GIVEN** user clicks a filter button
- **WHEN** filter is applied
- **THEN** only photos matching `data-category` attribute should be visible
- **AND** other photos should have `hidden` class added
- **AND** filter should work with Tailwind CSS classes
