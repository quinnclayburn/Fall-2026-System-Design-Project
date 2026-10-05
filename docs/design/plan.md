# Plan — Medication Assistance Program Finder

> Written after specification. Every decision here must trace back to a requirement ID.

## 1. Approach Summary
We will adapt the provided web application template into a searchable reference for medication assistance programs. Healthcare staff will be able to browse or search real medication information by brand name, generic name, or part of a name, review assistance-program details that may be simulated, and bookmark programs they use often (R1–R10). Program information will come from a CSV file (R3), and bookmarks will stay in the user's browser (R9–R10); the application will not store patient information or decide whether anyone qualifies, in keeping with the specification's privacy and scope limits.

## 1.5 Tech Stack
- Frontend: Vue 3, Vue Router, HTML, CSS, JavaScript, Bootstrap (R1, R2, R4–R8)
- Backend/DB: None; program information will be stored in a CSV file (R3, R11)
- Hosting: GitHub Pages (R1–R3)
- Other services/APIs: None; Papa Parse will be used to read CSV data (R3, R11)

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|-------|----------|------------------|---------------------------|----------------|
| ADR-00 | Use Vue 3 and Vue Router with the existing HTML, CSS, JavaScript, and Bootstrap template. | R1, R2, R4–R8 | Build the views and hash routes directly with JavaScript | Vue Router supports the required page routes, while the existing template already uses Vue and Bootstrap. |
| ADR-01 | Load medication and assistance-program records from a static CSV file and host the app on GitHub Pages; do not add a backend or database. | R3–R7, R11 | Store records in a database and serve them through an API | CSV supports the required data loading, collection, and detail views without adding a backend or manufacturer integration. Static hosting fits the prototype's file-based approach. |
| ADR-02 | Save bookmarks in the user's browser without accounts or cloud sync. | R9, R10 | Store bookmarks in a database tied to user accounts | Local storage meets the bookmark requirement without collecting account or patient information. Bookmarks will be limited to the browser where they were saved. |
| ADR-03 | Support medication searches by brand name, generic name, or part of a medication name. | R8 | Require users to enter the full medication name | Multiple search options make it easier for users to find the medication information they need, including when they know only one name or part of a name. |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Page navigation and views | Provide the Home, Medication Collection, Medication/Program Detail, and About routes. | R1, R2 |
| CSV data loader | Read medication and program records at startup and show a clear message if the data cannot be loaded. | R3, R11 |
| Medication collection and search | Show a card for each record and find matches by brand name, generic name, or part of a medication name. | R4, R5, R8 |
| Medication/program detail view | Present available program, eligibility, documentation, application, website, and contact information. | R6, R7 |
| Local bookmarks | Save and visually identify bookmarked programs in the user's browser. | R9, R10 |

## 4. Dependencies & Assumptions
- External services/tools needed: GitHub Pages for hosting; Vue 3, Vue Router, Bootstrap, and Papa Parse are loaded from the template's existing CDNs (R1–R3, R11). No external APIs are planned.
- Assumptions being made (flag anything unverified):
  - Medication names and medication information will be real; assistance-program names and details may be simulated for the prototype (R3–R7).
  - The CSV will be updated to include the medication and program fields listed in the specification before the app is populated with project data (R3–R7).
  - Users can access the hosted site and its CDN dependencies over the internet (R1–R3, R11).
  - Bookmarks are browser-specific and will not follow a user to another device or browser (R9–R10).
  - Simulated assistance-program information is for demonstration only and is not verified as current application or eligibility guidance (R7).

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| Simulated program details could be mistaken for current assistance or eligibility guidance (R7). | Medium | High | Clearly label simulated assistance information and avoid presenting it as current or verified guidance. | Sole developer / project owner |
| The template CSV fields do not match the medication and program data required by the specification (R3–R7). | High | Medium | Define and test the CSV columns against the required data before building the collection and detail views. | Sole developer / project owner |
| The CSV or an external library cannot be loaded, preventing the app from starting or showing results (R3, R11). | Medium | High | Test the deployed site with its dependencies available and unavailable; show a clear data-load error as required by R11. | Sole developer / project owner |

## 6. Sequencing
1. Define the medication/program CSV columns and prepare a small sample dataset; collection, search, and detail views depend on a consistent data shape (R3–R7).
2. Connect CSV loading to the app and verify loading and error states before relying on the data throughout the interface (R3, R11).
3. Adapt the collection cards and implement search, then verify brand, generic, and partial-name matches (R4, R5, R8).
4. Adapt the detail view to present all available program and application information (R6, R7).
5. Add browser-local bookmarks and their saved visual state (R9, R10).
6. Verify navigation, all acceptance criteria, and the deployed GitHub Pages site, including data-load failure behavior (R1–R11).

## 7. Review & Approval
| Reviewer | Date | Approved? |
|----------|------|-----------|
| Quinn Clayburn | 10/05/2026 | Yes |

**Gate:** Do not generate tasks until this plan is done.