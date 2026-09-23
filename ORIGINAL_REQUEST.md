# Original User Request

## 2026-08-31T12:08:33Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview
> Requested team: Small focused team

This is a single self-contained fix; keep it small and focused. Refactor the existing Next.js portfolio application to ensure the mobile view (responsive design) is polished, properly aligned, and aesthetically neat across all pages and components.

Working directory: c:\Users\Acer\Documents\porto1\Portofolio
Integrity mode: development

## Requirements

### R1. Responsive Mobile Layout Refactoring
Audit and update the Tailwind CSS classes across all major sections of the portfolio (Hero, About, Experience, Projects, etc.). Ensure standard UI/UX best practices are applied for mobile devices, including proper vertical stacking, consistent margins/padding, and readable text scaling.

### R2. Maintain Existing Aesthetics
While heavily modifying layouts for mobile screens, preserve the existing dark-mode cyberpunk/hacker aesthetic and color schemes. The desktop layout should remain intact or structurally consistent where possible.

## Acceptance Criteria

### Mobile Layout Quality
- [ ] All multi-column grids or flex layouts collapse to a single column (grid-cols-1 or lex-col) on mobile viewports (sm or < 768px).
- [ ] No content overflows horizontally (causing horizontal scrolling) on mobile screens.
- [ ] Padding, margins, and text sizes are appropriately scaled down for mobile screens to prevent cramped or overlapping elements.

### Build & Integrity
- [ ] The Next.js application builds successfully without new errors (
pm run build).
- [ ] All interactive elements (buttons, 3D pins, navigation) remain fully functional on mobile.
