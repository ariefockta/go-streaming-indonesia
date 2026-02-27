# Portfolio Gallery

## Purpose
Showcase past work through categorized image/video gallery with lightbox viewing to build credibility and demonstrate service quality.

## Requirements

### Requirement: Display portfolio with horizontal scroll layout

The portfolio gallery SHALL display images in horizontal scroll format with category filtering.

#### Scenario: Horizontal scroll layout
- **WHEN** user views portfolio section on any device
- **THEN** layout should be horizontal scroll with 2 rows
- **THEN** should not extend too far vertically

#### Scenario: Display 18 project photos
- **WHEN** all photos are loaded
- **THEN** should display 18 photos total:
  - 4 photos from `/public/multicam/`
  - 3 photos from `/public/LED videotron/`
  - 11 photos from `/public/projects/`

#### Scenario: Category filtering with 4 categories
- **WHEN** user views portfolio section
- **THEN** 4 category filter buttons are visible: Semua (18), Siaran Langsung (11), LED Videotron (3), Booth (4)
- **THEN** default shows all photos

#### Scenario: Filter functionality
- **WHEN** user clicks a filter button
- **THEN** only photos matching `data-category` attribute should be visible
- **THEN** other photos should have `hidden` class added
- **THEN** filter should work with Tailwind CSS classes

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
