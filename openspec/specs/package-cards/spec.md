# Package Cards

## Purpose
Present 3 tiered package options (Basic, Pro, Premium) with clear inclusions and pricing to facilitate package-based inquiries.

## Requirements

### Requirement: Display 3 package tiers

The package section SHALL display 3 package options: Basic, Pro, and Premium.

#### Scenario: Package cards visible
- **WHEN** user views package section
- **THEN** 3 package cards are displayed side by side on desktop
- **THEN** each card shows package name, included items list, and "Minta Quote" button

#### Scenario: Mobile responsive layout
- **WHEN** viewport width is less than 768px
- **THEN** package cards display in carousel or vertical stack

### Requirement: Package CTA opens WhatsApp

Each package card SHALL have a CTA that opens WhatsApp with package details.

#### Scenario: User requests package quote
- **WHEN** user clicks "Minta Quote" on any package
- **THEN** WhatsApp opens with message including package name and request for quotation
