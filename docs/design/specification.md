# Medication Assistance Program Finder — Specification

## 0. Constitution

| # | Principle | Why it exists |
|---|-----------|---------------|
| 1 | Do not store patient information. | The application is meant to provide program information, not manage patients. |
| 2 | Information should be easy to find. | The purpose of the application is to make Patient Assistance Program information easier to access. |
| 3 | Do not determine whether a patient qualifies for a program. | Eligibility is determined by the individual assistance program. |

---

## 1. Problem & Intent

**Who is this for?**

Healthcare staff who help patients access medications they cannot afford, including patient care coordinators, medication assistance coordinators, and pharmacy staff.

**What problem do they have today?**

Information about Patient Assistance Programs is spread across manufacturer websites and other resources. Staff may have to search multiple places to find available programs, eligibility requirements, required documentation, and application instructions.

**Why now / why us?**

Putting this information in one application would make it easier for healthcare staff to find Patient Assistance Programs and their requirements.

**What does success look like?**

A user can find an assistance program for a medication, view the information needed to apply, and bookmark programs they use frequently.

---

## 2. Scope

### In Scope

- Browse medications and available assistance programs.
- Search by brand or generic medication name.
- Search using part of a medication name.
- View eligibility requirements.
- View required documentation.
- View application instructions.
- View program website or contact information when available.
- Bookmark frequently used programs.

### Out of Scope

- Storing patient information.
- Determining whether a patient qualifies for a program.
- Submitting applications.
- Managing patients, medication reorders, or medication deliveries.
- User accounts or authentication.
- Connecting directly to manufacturer systems.

---

## 3. Style and Theme

The application should be simple and professional for use in healthcare. Information should be easy to find with no unnecessary visual clutter.

Overall mood: Clean, professional, organized, and easy to use.

Use the `style-guide.html` for details on styling, fonts, colors, and layout.

Keep the basic Bootstrap layout with a clean healthcare-style color scheme and blue accents. Cards should be simple and easy to scan, with clear headings and enough spacing between sections. The search bar should be easy to find near the top of the medication collection page.

---

## 4. User Scenarios

### Scenario 1: Find an Assistance Program

**Actor:** Patient care coordinator

**Trigger:** A patient needs help accessing an unaffordable medication.

**Steps:**
1. The user opens the application.
2. The user browses or searches for the medication.
3. The user selects the medication.
4. The user views information about the available assistance program.
5. The user reviews the eligibility requirements, required documentation, and application instructions.

**Success outcome:** The user finds an assistance program and the information needed to apply.

**Failure outcome:** The medication cannot be found or the program information cannot be loaded.

### Scenario 2: Bookmark a Program

**Actor:** Medication assistance coordinator

**Trigger:** The user finds a program they use frequently.

**Steps:**
1. The user opens the program.
2. The user bookmarks the program.
3. The application saves the bookmark.

**Success outcome:** The program is saved and visually identified as bookmarked.

**Failure outcome:** The bookmark is not saved.

### Scenario 3: Browse Available Programs

**Actor:** Pharmacy staff member

**Trigger:** The user wants to see what programs are available without searching for a specific medication.

**Steps:**
1. The user opens the medication collection.
2. The user browses the available medications and programs.
3. The user selects a medication or program to view more information.

**Success outcome:** The user can browse the available programs and open the program information.

**Failure outcome:** The collection cannot be loaded.

---

## 5. Requirements

| ID | Requirement | Pattern |
|---|---|---|
| R1 | The system shall include Home (`#/`), Medication Collection (`#/items`), Medication/Program Detail (`#/items/:id`), and About (`#/about`) pages. | Ubiquitous |
| R2 | The system shall provide navigation to Home, Medications, and About. | Ubiquitous |
| R3 | When the application loads, the system shall load medication assistance program data from `items-template.csv`. | Event |
| R4 | When the collection page is opened, the system shall display one card for each medication or assistance program represented in the data file. | Event |
| R5 | The system shall display the medication name, program or manufacturer name, short description, and image when available on each card. | Ubiquitous |
| R6 | When a user selects a card, the system shall open the detail page for that medication or program. | Event |
| R7 | When a detail page is opened, the system shall display the available program information, including the medication name, manufacturer or program name, description, eligibility requirements, required documentation, application instructions, and program website or contact information when available. | Event |
| R8 | When a user searches by brand name, generic name, or part of a medication name, the system shall display matching results. | Event |
| R9 | When a user bookmarks a program, the system shall save the bookmark locally in the user's browser. | Event |
| R10 | While a program is bookmarked, the system shall visually identify it as saved. | State |
| R11 | If the application cannot load the program data, then the system shall display a clear error message instead of an empty page. | Unwanted behavior |

### Key Data

Medication Assistance Program data should include:

- `id`
- `medication_name`
- `generic_name`
- `program_name`
- `manufacturer`
- `description`
- `category`
- `eligibility`
- `required_documents`
- `application_instructions`
- `program_url`
- `image_url`

---

## 6. Acceptance Criteria

| Requirement | Test | Pass Condition |
|---|---|---|
| R1-R2 | Open the application and use the navigation. | Home, Medications, and About can be reached. |
| R3-R5 | Open the medication collection. | Program data loads and the cards display the expected information. |
| R6-R7 | Select a medication or program. | The correct detail page opens and displays the available program information. |
| R8 | Search using a brand name, generic name, or part of a medication name. | Relevant results are displayed. |
| R9-R10 | Bookmark a program. | The program is saved and visually identified as bookmarked. |
| R11 | Attempt to load the application when the program data is unavailable. | A clear error message is displayed instead of an empty page. |

---

## 7. Constraints & Non-Functional Requirements

**Security/Privacy**
- The application will not store patient information.
- The prototype will not require user authentication.

**Technology**
- The application will use HTML, CSS, JavaScript, and Bootstrap.
- Program information will be stored in a CSV file.
- Bookmarks may be stored locally in the user's browser.

**Maintenance**
- Program information in a real version would need to be reviewed and updated regularly because program availability and eligibility requirements can change.

**Design**
- The application should be simple and professional.
- Information should be easy to find and scan.
- The application will use the Bootstrap structure provided by the starter application.

---

## 8. Open Questions

None at this time.

---

## 9. Plan

Once the specification is approved, the project plan and tasks will be developed from the requirements in this specification.

---

## 10. Approval

| Role | Name | Date | Signed off? |
|---|---|---|---|
| Spec owner | | | |
| Reviewer | | | |