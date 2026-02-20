## ADDED Requirements

### Requirement: Display client testimonials in carousel

The testimonial section SHALL display 3-6 testimonials in carousel format.

#### Scenario: Testimonials visible
- **WHEN** user views testimonial section
- **THEN** testimonial carousel displays with at least 3 testimonials
- **THEN** each testimonial shows quote, client name, event type, and city

#### Scenario: User navigates carousel
- **WHEN** user clicks next/previous arrows or swipes on mobile
- **THEN** carousel transitions to next/previous testimonial
- **THEN** active indicator updates

### Requirement: Auto-play carousel

Testimonial carousel SHALL auto-advance every 5 seconds.

#### Scenario: Auto-advance behavior
- **WHEN** user views testimonial section without interaction
- **THEN** carousel automatically advances to next testimonial after 5 seconds
- **THEN** auto-play pauses when user manually navigates
