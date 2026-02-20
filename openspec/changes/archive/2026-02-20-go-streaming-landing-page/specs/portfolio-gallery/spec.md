## ADDED Requirements

### Requirement: Display portfolio with category tabs

The portfolio gallery SHALL display images/videos organized by category tabs.

#### Scenario: Category tabs available
- **WHEN** user views portfolio section
- **THEN** 4 category tabs are visible: Livestream, Videotron, Booth, EO
- **THEN** default tab "Livestream" is active on page load

#### Scenario: User switches category
- **WHEN** user clicks a category tab
- **THEN** gallery filters to show only items from that category
- **THEN** active tab is visually highlighted

### Requirement: Gallery items open in lightbox

Portfolio items SHALL open in lightbox overlay when clicked.

#### Scenario: User clicks portfolio item
- **WHEN** user clicks any portfolio thumbnail
- **THEN** lightbox overlay opens showing full-size image or video
- **THEN** close button is visible to dismiss lightbox

#### Scenario: User closes lightbox
- **WHEN** user clicks close button or overlay background
- **THEN** lightbox closes and returns to gallery view

### Requirement: Images are lazy loaded

Portfolio images SHALL use lazy loading for performance.

#### Scenario: Images load on scroll
- **WHEN** user scrolls to portfolio section
- **THEN** only visible images load initially
- **THEN** additional images load as user scrolls
