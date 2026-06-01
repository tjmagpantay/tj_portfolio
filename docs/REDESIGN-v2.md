# Portfolio Redesign v2

## Objective

Redesign the portfolio to improve recruiter experience, visual hierarchy, and overall professionalism while preserving existing functionality and data.

## Global Changes

### Layout

* Maintain equal horizontal spacing between sidebar and main content.
* Create a more balanced desktop layout.
* Ensure consistent container widths across all sections.

### Remove

* Remove floating email button.
* Remove floating email modal functionality.

### Theme Update

Add secondary accent color:

```css
#7b2cbf
```

Use for:

* Borders
* Active states
* Tags
* Highlights
* Interactive elements

Avoid overusing it as a background color.

---

## Sidebar Redesign

### Width

Reduce sidebar width significantly.

### Branding

Remove:

* "Tj Magpantay"
* "BSIT • Developer & Designer"

Keep:

* Personal logo only

### Navigation

Current:

* Icon + Label

New:

* Icon only

Requirements:

* Place every icon inside a square container.
* Consistent sizing.
* Hover and active states should use the secondary color.

### Socials

Change from horizontal layout to vertical layout.

---

## Main Profile Section

### Profile Tags

Apply secondary color border:

```css
border-color: #7b2cbf;
```

For:

* Email tag
* Share tag

### Experience and Education

Place on the same row.

Desktop:

```text
Experience | Education
```

Mobile:

```text
Experience
Education
```

### Experience/Education Tags

Update all tag borders to:

```css
#7b2cbf
```

---

## Experience Updates

Add location information.

### DevOps Intern

Location:
McKinley, Taguig City

### Full-Stack Developer

Location:
San Jose, Batangas

### Associate Project Manager for Product and Innovation

Location:
Lipa City

---

## Micro-Credentials Redesign

### Current Problem

Cards consume excessive vertical space because images are too large.

### New Layout

Desktop:

```text
[ Card ] [ Card ] [ Card ]
```

Three-column grid.

### Card Structure

Top:

* Credential image

Bottom:

* Title
* Issuer
* Date

### Requirements

* Reduce image height.
* Preserve text readability.
* Maintain equal card heights.
* Keep responsive behavior.

Mobile:

```text
[ Card ]

[ Card ]

[ Card ]
```

Single-column layout.

---

## Non-Negotiables

Do not:

* Change project data structure.
* Change section IDs.
* Remove dark mode.
* Add new libraries.
* Break mobile responsiveness.
* Modify existing content unless specified.

## Success Criteria

* Cleaner and more compact sidebar.
* Better use of horizontal space.
* Stronger visual hierarchy.
* Recruiter-friendly scanning experience.
* Consistent use of secondary accent color (#7b2cbf).
