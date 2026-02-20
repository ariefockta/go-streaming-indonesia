## ADDED Requirements

### Requirement: Display FAQ in accordion format

The FAQ section SHALL display common questions in collapsible accordion format.

#### Scenario: FAQ items collapsed by default
- **WHEN** user views FAQ section
- **THEN** all FAQ items are collapsed showing only questions
- **THEN** expand/collapse icon is visible for each item

#### Scenario: User expands FAQ item
- **WHEN** user clicks on a FAQ question
- **THEN** answer content expands smoothly
- **THEN** other open items remain open (multi-expand allowed)

#### Scenario: User collapses FAQ item
- **WHEN** user clicks on an expanded FAQ question
- **THEN** answer content collapses smoothly

### Requirement: FAQ covers common questions

FAQ SHALL include at least 8 common questions about services.

#### Scenario: Essential questions covered
- **WHEN** user views FAQ section
- **THEN** questions include: coverage area, rental duration, overtime policy, DP requirements, reschedule policy, power requirements, crew availability, equipment backup
