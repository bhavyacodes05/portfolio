# Bhavya Khandelwal — Portfolio

A responsive, static portfolio with a dark developer-workspace theme, lime accents, editorial typography, four project case studies, filters, and an email-based resume request chooser. No screenshots or “currently building” panel are included.

## Open it

Open `index.html` alongside `style.css`, `app.js`, and `assets/`. No backend is required. No Node.js installation or server is required.

The repository contains the regular source files for the public website.

## What is included

- Goldman Sachs engineering experience and reported annual automation impact
- DevDock, RiskLens, AURA, and WhatsApp Chat Analyzer
- Filterable project cards and keyboard-accessible case-study dialogs
- Education, grouped technical skills, leadership, and achievements
- Correct email: bhavyakhandelwalmit2023@gmail.com
- Correct IAESTE title: Chairperson
- GitHub profile and supplied RiskLens live URL
- Email links to request software engineering and finance/analytics resumes
- Mobile navigation and reduced-motion support

Full resume PDFs are excluded from this public repository. The portfolio uses the corrected email and Chairperson title, with email links for requesting a resume.

## Edit it

- `index.html`: page content, contact details, project cards, and links
- `style.css`: colour palette, typography, responsive layout
- `app.js`: case-study text, filters, menus, dialogs, email copying
- Resume links request a copy by email; no resume PDFs are stored in this repository.

After changing the source files, update the standalone HTML by embedding `style.css` in a `<style>` tag and `app.js` in a `<script>` tag in place of their external references. The regular `index.html` is the source version to deploy.

## Publish on GitHub Pages

This portfolio is entirely static and suitable for GitHub Pages. Put all files from this folder in a repository, keeping `index.html` at the root. In the repository's Pages settings, select the branch and root folder to publish. A repository named `bhavyacodes05.github.io` can host a root portfolio; another repository can host it beneath its repository name.

The portfolio source is maintained in `bhavyacodes05/portfolio`. GitHub Pages must be enabled for the `main` branch and root folder to serve the website. The portfolio does not expose DevDock's local backend; its case study describes the project. Add project-specific repository links once you have published and verified them. A LinkedIn URL was not supplied, so no LinkedIn link is shown.

## Validation

Frontend JavaScript syntax, anchor targets, local assets, project counts, contact text, case-study data, and HTML structure were checked. Browser interaction and visual rendering could not be verified in this environment because no browser was available. Test the page in Chrome or Edge at desktop and mobile widths before publishing.

Native dialogs require a modern browser. Email copying may be unavailable when the page is opened as a local file; the direct email link and selectable address still work.
