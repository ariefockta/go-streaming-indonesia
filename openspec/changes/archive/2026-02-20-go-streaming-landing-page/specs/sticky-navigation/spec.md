## ADDED Requirements

### Requirement: Header remains visible on scroll

The header navigation SHALL remain fixed at top when user scrolls.

#### Scenario: Sticky header behavior
- **WHEN** user scrolls down the page
- **THEN** header remains fixed at top of viewport
- **THEN** header background becomes opaque for readability

### Requirement: Navigation links scroll to sections

Navigation menu links SHALL smoothly scroll to corresponding page sections.

#### Scenario: User clicks nav link
- **WHEN** user clicks any navigation menu item
- **THEN** page smoothly scrolls to corresponding section
- **THEN** section appears below fixed header (offset for header height)

### Requirement: Active section highlighted in nav

Navigation SHALL highlight the currently visible section.

#### Scenario: Active menu indicator
- **WHEN** user scrolls through page sections
- **THEN** navigation menu highlights the link corresponding to visible section
- **THEN** highlight updates as user scrolls to different sections

### Requirement: Mobile navigation menu

Navigation SHALL collapse to hamburger menu on mobile.

#### Scenario: Mobile menu toggle
- **WHEN** viewport width is less than 768px
- **THEN** navigation menu collapses to hamburger icon
- **THEN** clicking hamburger opens full-screen or slide-out menu
- **THEN** clicking menu item closes mobile menu and scrolls to section
