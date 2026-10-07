# Tasks — Medication Assistance Program Finder

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | Select 10 real medications from a sourced list of commonly used, higher-cost medications (for example, Eliquis or Januvia) and verify their medication names and generic names. | R3, R8, ADR-01 | — | Done |
| T2 | Update `items-template.csv` with the specification's medication/program columns and sample records for the 10 selected medications, using simulated assistance-program details. | R3–R7, ADR-01 | T1 | Done |
| T3 | Update the existing CSV mapping in `app.js` to expose the medication and assistance-program fields while preserving the current loading and error states. | R3, R11, ADR-01 | T2 | Done |
| T4 | Adapt the existing collection cards to show the medication name, program or manufacturer, short description, and image when available; mark simulated program details as simulated. | R4, R5, R7, ADR-00, ADR-01 | T3 | Done |
| T5 | Add collection search that matches brand names, generic names, and partial medication names. | R8, ADR-03 | T3, T4 | Done |
| T6 | Adapt the existing detail component to show the medication and available program, eligibility, required documentation, application, website, and contact information; mark simulated program details as simulated. | R6, R7, ADR-00, ADR-01 | T3, T4 | Done |
| T7 | Add a bookmark action that saves and restores program IDs using browser `localStorage`. | R9, ADR-02 | T3, T6 | Done |
| T8 | Show a clear saved state for bookmarked programs in the collection and detail views. | R10, ADR-02 | T4, T6, T7 | Done |
| T9 | Replace template branding and placeholder copy in the existing Home, About, and navigation components with Medication Assistance Program Finder content and labels. | R1, R2, ADR-00 | — | Done |
| T10 | Apply the colors, typography, spacing, and component rules from design-system.md throughout the existing application interface, preserving functionality. | T4, T5, T6, T8, T9 | Done |
| T11 | Verify the interface matches design-system.md and meets its documented accessibility standards. | T10 | Done |
| T12 | Verify the Home, Medication Collection, Medication/Program Detail, and About routes and navigation links. | R1, R2 | T9 | Done |
| T13 | Verify that the CSV loads and each collection card shows the expected medication/program fields. | R3–R5 | T3, T4 | Done |
| T14 | Verify that selecting a card opens the matching detail view with the required available program information. | R6, R7 | T6 | Not started |
| T15 | Test brand-name, generic-name, and partial-name searches separately and confirm each returns matching medications. | R8, ADR-03 | T5 | Not started |
| T16 | Verify bookmarks are saved locally, remain saved after a page reload, and are visibly identified in the collection and detail views. | R9, R10, ADR-02 | T7, T8 | Not started |
| T17 | Verify that unavailable or unreadable CSV data produces a clear error message instead of an empty page. | R11 | T3 | Not started |
| T18 | Publish the static app with GitHub Pages and verify the deployed routes and CSV loading. | ADR-01 | T10–T15 | Not started |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)
- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions
| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| — | No current blockers. Choose and record the medication data source while completing T1. | — | — |
