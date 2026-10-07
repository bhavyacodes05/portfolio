# Bhavya Khandelwal — Portfolio

A responsive, static portfolio with a dark developer-workspace theme, lime accents, editorial typography, four project case studies, filters, and a resume chooser. No screenshots or “currently building” panel are included.

## Open it

Extract the ZIP. Double-click `index.html` inside the extracted folder. Keep the `assets` folder alongside it so resume links work. No Node.js installation or server is required.

`Bhavya-Khandelwal-Portfolio.html` is an additional standalone copy with CSS and JavaScript embedded. It can also be opened directly. Its resume links need the included `assets` folder beside it.

## What is included

- Goldman Sachs engineering experience and reported annual automation impact
- DevDock, RiskLens, AURA, and WhatsApp Chat Analyzer
- Filterable project cards and keyboard-accessible case-study dialogs
- Education, grouped technical skills, leadership, and achievements
- Correct email: bhavyakhandelwalmit2023@gmail.com
- Correct IAESTE title: Chairperson
- GitHub profile and supplied RiskLens live URL
- Original software engineering and finance/analytics resume PDFs
- Mobile navigation and reduced-motion support

The PDFs are the original uploaded files. Their older email formatting and IAESTE wording have not been edited; replace them with corrected resumes before publicly publishing. The portfolio itself uses the corrected details.

## Edit it

- `index.html`: page content, contact details, project cards, and links
- `style.css`: colour palette, typography, responsive layout
- `app.js`: case-study text, filters, menus, dialogs, email copying
- `assets/resumes/`: replace resume PDFs while keeping filenames

After changing the source files, update the standalone HTML by embedding `style.css` in a `<style>` tag and `app.js` in a `<script>` tag in place of their external references. The regular `index.html` is the source version to deploy.

## Publish on GitHub Pages

This portfolio is entirely static and suitable for GitHub Pages. Put all files from this folder in a repository, keeping `index.html` at the root. In the repository's Pages settings, select the branch and root folder to publish. A repository named `bhavyacodes05.github.io` can host a root portfolio; another repository can host it beneath its repository name.

The portfolio source is maintained in `bhavyacodes05/portfolio`. GitHub Pages must be enabled for the `main` branch and root folder to serve the website. The portfolio does not expose DevDock's local backend; its case study describes the project. Add project-specific repository links once you have published and verified them. A LinkedIn URL was not supplied, so no LinkedIn link is shown.

## Validation

Frontend JavaScript syntax, anchor targets, local assets, project counts, contact text, case-study data, and HTML structure were checked. Browser interaction and visual rendering could not be verified in this environment because no browser was available. Test the page in Chrome or Edge at desktop and mobile widths before publishing.

Native dialogs require a modern browser. Email copying may be unavailable when the page is opened as a local file; the direct email link and selectable address still work.
