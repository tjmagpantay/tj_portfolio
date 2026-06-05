# Design Guidelines

This document defines the visual system for the upcoming portfolio redesign.

## Colors

Primary palette (new):
- Background: #0f0f14
- Secondary: #7b2cbf
- Surface: #171722
- Text: #f6f4ff
- Muted text: #b9b3c8
- Border: #2a2a3a
- Accent: #f7b801
- Success: #22c55e
- Warning: #f59e0b
- Error: #ef4444

Usage notes:

- Use the primary color for key CTAs, highlights, and active states.
- Keep backgrounds dark and surfaces slightly lifted to preserve contrast.

## Typography

- Display: "Product Sans" (already in the project)
- Body: "Product Sans"
- Fallbacks: system-ui, -apple-system, sans-serif
- Scale: 12, 14, 16, 20, 24, 32, 40, 48
- Line height: 1.4 for headings, 1.6 for body text

## Spacing

- Base unit: 4px
- Common steps: 4, 8, 12, 16, 24, 32, 48, 64
- Section padding: 48-72px vertical on desktop, 32-48px on mobile
- Card padding: 16-24px

## Animation Philosophy

- Calm, purposeful motion only; no continuous motion loops unless tied to user focus.
- Prefer 150-300ms for UI state changes, 400-700ms for section transitions.
- Use easing curves that feel soft and premium (ease-out, cubic-bezier).

## UI Inspiration

- Vercel

## Responsive Layout

- The sidebar is `position: fixed` with a narrow icon-only design (`w-20` / 80px).
- On mobile (< `lg`), the sidebar slides in from the right as an overlay with a hamburger toggle; a fixed top navbar replaces the desktop logo.
- On desktop (`lg`+), the sidebar is fixed to the left. The main content uses explicit `margin-left` to clear the sidebar — never rely on flexbox gap alone since the sidebar is out of flow.
- Always recalculate main content margins if sidebar position or wrapper padding changes. See `docs/ARCHITECTURE.md` for the formula.
