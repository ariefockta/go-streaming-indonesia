## ADDED Requirements

### Requirement: Display 3-step booking process

The workflow section SHALL display 3 steps: Konsultasi, Penawaran & DP, Eksekusi & Support.

#### Scenario: Steps are visible
- **WHEN** user views workflow section
- **THEN** 3 steps are displayed in sequence with visual indicators
- **THEN** each step shows step number, title, and brief description

### Requirement: Mobile responsive layout

Workflow steps SHALL adapt for mobile viewing.

#### Scenario: Mobile vertical layout
- **WHEN** viewport width is less than 768px
- **THEN** steps display vertically instead of horizontally
- **THEN** step indicators remain visible
