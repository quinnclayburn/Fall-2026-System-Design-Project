# Design System — Medication Assistance Program Finder

## 1. Brand Principles
The application should feel professional, clean, and informative, with a calm and reassuring appearance that is easy on the eyes. Clear navigation, readable text, and uncluttered layouts should help healthcare staff find information quickly and efficiently. Favor clarity over decoration.


## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Primary |  #4C7CCE | Main brand color, primary buttons |
| Secondary | #245F9E | Accents, buttons, links |
| Background | #F5F7FA | Page background |
| Text | #24313D | Body text, headings |
| Surface | #FFFFFF | Cards and Search Fields |
| Border | #CFDBE8 | Card borders and dividers |

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Heading 1 | Arial, sans-serif | 40px | Bold |
| Heading 2 | Arial, sans-serif | 24px | Bold |
| Body | Arial, sans-serif | 16px | Regular |

## 4. Logo Usage
- File(s): assets/logo.svg
- Source: https://lucide.dev/icons/pill
- Place the pill icon beside the application name and use the brand colors.
- Do NOT: (stretch, recolor, place on busy backgrounds, etc.)

## 5. Spacing & Grid
- Base unit: 8px
- Grid/columns: centered content with max width 1200px, medication cards use three columns on desktop and stack into one column on smaller screens.
- Standard spacing scale: (e.g. 8 / 16 / 24 / 32 / 48px)
- Use 24px padding inside cards and 24px gaps between cards.

## 6. Core Components
List reusable UI patterns and their rules (e.g. radius, border, etc.).

| Component | Rules |
|-----------|-------|
| Button (primary) | Solid Secondary color (#245F9E), white text, 8px rounded corners, and 12px vertical / 24px horizontal padding |
| Button (secondary) | ckground, Secondary color text and border, 8px rounded corners, and 12px vertical / 24px horizontal padding |
| Card | White background, 1px Border color outline, 12px rounded corners, and 24px padding |
| Form field | Label above the input, white background, 1px Secondary color border, 8px rounded corners, and 16px padding |
| Navigation | White background with clearly labeled links. Underline the current page link and use bold Secondary color text |

## 7. Voice & Tone
- How the product "speaks" (formal/casual, short/long copy, use of humor, etc.)
- Tone should be professional and helpful with clear, short wording.
- Avoid unnecessary technical or clinical jargon and humor.
- Labels should be descriptive. ex. "view program", "save program."
- Clearly identify sample information and remind users to verify current details with the assistance program.

## 8. Accessibility Standards
- Minimum contrast ratio: 4.5:1 for normal text and 3:1 for large text.
- Standard to meet: WCAG 2.1 AA
- All links, buttons, and form fields should work with a keyboard and have a visible focus indicator.
- Give form fields clear labels and icon-only buttons descriptive accessible names.
- Do not use color alone to show saved states or errors; include text or an icon.
- Informative images should have descriptive alt text. Decorative images should use empty alt text.
- Use clear headings, labeled form fields, and descriptive buttons to support screen readers.
- Text should remain readable when enlarged to 200%, without content being cut off.
- Layouts should adjust to smaller screens without requiring horizontal scrolling for normal content.
- Buttons and other controls should be large enough to select easily, with space between them.
- Use plain language and explain abbreviations that may be unfamiliar.
- Keep medication names and program requirements easy to read. Avoid cutting off important information.
- Display search results, saved confirmations, and error messages in a way screen readers can announce.
- Keep navigation and information sections consistent across pages.
- Clearly label links that open an external program website.

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|--------------|
| 1.0 | 10/06/2026 | Initial version | Quinn Clayburn |

---

**Referenced by:** spec.md Section 6 (Constraints — Branding), Design step of each project.