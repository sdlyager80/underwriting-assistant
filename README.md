# Underwriting Assistant

A modern underwriting workbench portal built with React, Vite, and DXC Technology's Halstack design system.

## Features

- **Dashboard** - Overview metrics and submission queue with card/grid view toggle
- **Underwriting Workbench** - Detailed submission review with tabs for overview, requirements, timeline, and notes
- **Submission Intake** - Multi-step form for creating new underwriting submissions
- **Blue Theme** - Professional blue color scheme (#0095FF primary, #0077CC hover)
- **Halstack Components** - Enterprise-grade UI components following DXC design standards

## Tech Stack

- **React 18.3.1** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **Halstack React 16.0.0** - DXC Technology component library
- **Emotion** - CSS-in-JS styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Dashboard/              # Main dashboard view
    UnderwritingWorkbench/ # Detailed submission review
    SubmissionIntake/      # Multi-step intake form
    shared/                # Reusable components
  data/
    mockSubmissions.js     # Sample underwriting data
  App.jsx                  # Main layout and routing
  main.jsx                 # Entry point
  index.css                # Global styles
```

## Design Principles

- **Halstack Design Tokens** - All spacing, colors, and styling use Halstack variables
- **Open Sans Font** - Consistent with Halstack typography guidelines
- **Blue Color Scheme** - #0095FF primary, #0077CC hover, NO PURPLE
- **Tight Spacing** - Professional, compact layouts
- **Minimal Custom CSS** - Rely on Halstack components and tokens

## Key Metrics

The dashboard displays:
- Total Submissions
- New Today
- High Priority items
- Total Coverage amount
- Pending Review count
- Approved submissions
- Average Risk Score

## Components

### Dashboard
- Metrics cards with KPIs
- Tabbed view for filtering (All, Term Life, Whole Life, Universal Life)
- Search functionality
- Card/Grid view toggle
- Pagination

### Underwriting Workbench
- Summary cards (Status, Priority, Coverage, Risk Score, Assigned To)
- Tabbed interface (Overview, Requirements, Timeline, Notes)
- Requirement tracking with progress bar
- Activity timeline
- Notes section

### Submission Intake
- 4-step form wizard with progress bar
- Applicant Information
- Coverage Information
- Medical Information
- Additional Information
- Success confirmation with next steps

## License

© 2026 Insurance Company. All rights reserved.
