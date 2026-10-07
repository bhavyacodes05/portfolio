const projects = {
  devdock: {
    title: 'DevDock', subtitle: 'Developer Workflow & Issue Management Platform',
    problem: 'Developer work can become scattered across notes, task lists, and status updates. DevDock brings issue tracking and a consistent review workflow into one workspace.',
    contribution: ['Built a responsive Kanban interface with issue creation, editing, project filters, search, and drag-and-drop status changes.', 'Implemented REST APIs, salted scrypt password hashing, server-side sessions, and user-level data isolation.', 'Added server-enforced critical-issue review rules, activity logging, and a focus timer with saved session totals.'],
    engineering: 'The frontend uses JavaScript and Fetch to talk to a Node.js backend. SQLite stores accounts, sessions, issues, rules, and activity. Parameterized queries and ownership checks protect data access. Workflow checks run on the server so clients cannot bypass them.',
    flow: 'Browser → authenticated REST API → validation & workflow checks → SQLite',
    evidence: 'The backend integration suite passed 13 tests covering authentication, isolation, workflow enforcement, and persistence across a server restart.',
    scope: 'An individual-workspace MVP. Team roles, real-time collaboration, and external integrations are not implemented.',
    tags: ['JavaScript', 'Node.js', 'SQLite', 'REST APIs']
  },
  risklens: {
    title: 'RiskLens', subtitle: 'Portfolio Risk Analysis & Stress Testing',
    problem: 'A portfolio’s exposures alone do not explain how much it could lose under market stress. RiskLens connects risk measures, scenario analysis, and backtesting in a portfolio dashboard.',
    contribution: ['Built a portfolio dashboard measuring Value at Risk and Expected Shortfall across equities, bonds, and foreign exchange.', 'Stress-tested bond exposures across 2Y, 5Y, and 10Y yield-curve movements, including steepening and flattening scenarios.', 'Assessed equity hedging effectiveness, identified stress-loss drivers, and monitored risk-limit breaches.', 'Backtested bond risk using 499 Treasury yield observations to examine the frequency and clustering of VaR breaches.'],
    engineering: 'The project brings together market-risk calculations, portfolio exposure analysis, and scenario controls. Yield-curve scenarios make bond sensitivity visible, while backtesting helps assess how estimated risk relates to historical losses.',
    flow: 'Portfolio exposures + yield observations → risk & scenario calculations → dashboard insights',
    evidence: 'Used 499 historical Treasury yield observations for bond-risk analysis and backtesting.',
    scope: 'An analytical project. Outputs are model estimates and depend on the input data and modelling assumptions.',
    tags: ['Portfolio risk', 'VaR', 'Expected Shortfall', 'Backtesting'],
    demo: 'https://bhavyacodes05.github.io/RiskLens/'
  },
  aura: {
    title: 'AURA', subtitle: 'AI Unified Risk Analyzer',
    problem: 'Fraud detection requires interpreting multiple behavioural signals together. AURA explores how engineered transaction features can identify suspicious activity and make model outputs more understandable.',
    contribution: ['Developed ML fraud detection using a Random Forest model with engineered behavioural features.', 'Used time, Haversine-based location, and transaction amount features; reported a 0.93 F1-score in the project evaluation.', 'Created visualizations of fraud probability distributions and contributing features.', 'Contributed to system design and UML diagrams covering user verification, ML evaluation, and proposed blockchain logging.'],
    engineering: 'Feature engineering transforms transaction attributes into inputs for a Random Forest classifier. Probability and feature visualizations support interpretation of the model’s predictions. System diagrams describe the broader application flow.',
    flow: 'Transaction data → behavioural features → Random Forest → prediction & interpretation',
    evidence: 'A 0.93 F1-score was reported in the project evaluation.',
    scope: 'A project evaluation, not evidence of production fraud-detection performance. Blockchain logging is described as a system-design contribution.',
    tags: ['Random Forest', 'Feature engineering', 'Explainability', 'UML']
  },
  chat: {
    title: 'WhatsApp Chat Analyzer', subtitle: 'Local Chat Parsing & Analytics',
    problem: 'Exported chat files contain useful patterns, but raw text is difficult to explore. This tool turns WhatsApp exports into visual summaries while processing them locally.',
    contribution: ['Developed a Python and Streamlit application to parse and visualize exported WhatsApp group chats.', 'Implemented custom regex-based parsers to extract participants, timestamps, and shared content.', 'Visualized top contributors, busiest hours, and conversation frequency using Matplotlib and Seaborn.'],
    engineering: 'A text export is parsed into structured records before analysis. The Streamlit interface presents participant activity and time-based patterns through visualizations. Local processing avoids uploading private chat content to a remote analytics service.',
    flow: 'Local .txt export → regex parser → structured chat records → interactive analytics',
    evidence: 'The project demonstrates text parsing, data preparation, and exploratory visualization.',
    scope: 'Export formats can vary by locale and WhatsApp version; parser behaviour depends on the supported format.',
    tags: ['Python', 'Streamlit', 'Regex', 'Matplotlib', 'Seaborn']
  }
};
const escapeHTML = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const projectDialog = document.getElementById('project-dialog');
const resumeDialog = document.getElementById('resume-dialog');
let lastFocus;
function openDialog(dialog) { lastFocus = document.activeElement; dialog.showModal(); }
[projectDialog,resumeDialog].forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>lastFocus?.focus());
});
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const project=projects[button.dataset.project];
  document.getElementById('project-detail').innerHTML=`<h2 id="case-title">${escapeHTML(project.title)}<span class="lime">.</span></h2><p class="dialog-intro">${escapeHTML(project.subtitle)}</p><div class="tags">${project.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div><section class="case-section"><h3>The problem</h3><p>${escapeHTML(project.problem)}</p></section><section class="case-section"><h3>My contribution</h3><ul>${project.contribution.map(c=>`<li>${escapeHTML(c)}</li>`).join('')}</ul></section><section class="case-section"><h3>Technical approach</h3><p>${escapeHTML(project.engineering)}</p><div class="case-flow">${escapeHTML(project.flow)}</div></section><section class="case-section"><h3>Evidence &amp; scope</h3><p>${escapeHTML(project.evidence)}</p><p>${escapeHTML(project.scope)}</p></section><div class="case-footer">${project.demo?`<a class="button primary" href="${project.demo}" target="_blank" rel="noopener noreferrer">Open live project ↗</a>`:''}<a class="button secondary" href="mailto:bhavyakhandelwalmit2023@gmail.com?subject=${encodeURIComponent('Tell me about '+project.title)}">Ask about this project ↗</a></div>`;
  openDialog(projectDialog);projectDialog.scrollTop=0;
}));
document.querySelectorAll('[data-resumes]').forEach(button=>button.addEventListener('click',()=>openDialog(resumeDialog)));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;let count=0;
  document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;if(!card.hidden)count++;});
  document.getElementById('project-count').textContent=`SHOWING ${count} PROJECT${count===1?'':'S'}`;
}));
const menuToggle=document.getElementById('menu-toggle'),nav=document.querySelector('.site-header nav');
function closeMenu(){nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='Menu ＋';}
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'Close ×':'Menu ＋';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.getElementById('copy-email').addEventListener('click',async()=>{
  const email='bhavyakhandelwalmit2023@gmail.com',status=document.getElementById('copy-status');
  try{if(!navigator.clipboard)throw new Error('Unavailable');await navigator.clipboard.writeText(email);status.textContent='Copied!';}catch{status.textContent='Select the email above to copy it.';}
  setTimeout(()=>status.textContent='',4500);
});
