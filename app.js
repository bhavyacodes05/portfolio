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

// Keep the content readable without JavaScript or with reduced motion enabled.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const revealTargets = document.querySelectorAll('.section-heading, .experience-card, .project-card, .about-copy, .skills-panel, .leadership-grid article, .contact-panel');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${index % 2 * 70}ms`);
    revealObserver.observe(element);
  });
  document.body.classList.add('motion-ready');
}

const roleElement = document.getElementById('rotating-role');
const roles = ['software & systems', 'data & patterns', 'useful automation', 'problems worth solving'];
let roleIndex = 0, roleTimeout;
function scheduleRole() {
  clearTimeout(roleTimeout);
  if (motionPreference.matches || document.hidden) return;
  roleTimeout = setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    const text = roles[roleIndex];
    let characters = 0;
    function typeNext() {
      if (motionPreference.matches || document.hidden) { roleElement.textContent = text; return; }
      roleElement.textContent = text.slice(0, ++characters);
      if (characters < text.length) roleTimeout = setTimeout(typeNext, 42);
      else scheduleRole();
    }
    typeNext();
  }, 3000);
}
scheduleRole();
document.addEventListener('visibilitychange', scheduleRole);
motionPreference.addEventListener('change', () => {
  roleElement.textContent = roles[roleIndex];
  scheduleRole();
  document.querySelectorAll('.project-card').forEach(resetCard);
  document.querySelector('.hero-note').style.setProperty('--note-x', '0px');
  document.querySelector('.hero-note').style.setProperty('--note-y', '0px');
});

const focusAreas = {
  software: { project: 'devdock', label: 'Developer tools. Real workflows.' },
  data: { project: 'aura', label: 'Behavioural signals. Clearer predictions.' },
  finance: { project: 'risklens', label: 'Market scenarios. Measurable risk.' }
};
document.querySelectorAll('[data-focus]').forEach(button => button.addEventListener('click', () => {
  const focus = focusAreas[button.dataset.focus];
  document.querySelectorAll('[data-focus]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.getElementById('focus-description').textContent = focus.label;
  const link = document.getElementById('focus-project');
  link.dataset.project = focus.project;
  link.setAttribute('aria-label', `Explore ${projects[focus.project].title}`);
  const preview = document.querySelector('.focus-preview');
  preview.classList.remove('changed');
  requestAnimationFrame(() => preview.classList.add('changed'));
}));

function resetCard(card) {
  card.style.setProperty('--tilt-x', '0deg');
  card.style.setProperty('--tilt-y', '0deg');
}
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('pointermove', event => {
    if (motionPreference.matches || !finePointer.matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--spot-x', `${x * 100}%`);
    card.style.setProperty('--spot-y', `${y * 100}%`);
    card.style.setProperty('--tilt-x', `${(0.5 - y) * 4}deg`);
    card.style.setProperty('--tilt-y', `${(x - 0.5) * 4}deg`);
  });
  card.addEventListener('pointerleave', () => resetCard(card));
});
const hero = document.querySelector('.hero');
const heroNote = document.querySelector('.hero-note');
hero.addEventListener('pointermove', event => {
  if (motionPreference.matches || !finePointer.matches) return;
  const rect = hero.getBoundingClientRect();
  heroNote.style.setProperty('--note-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 10}px`);
  heroNote.style.setProperty('--note-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 8}px`);
});
hero.addEventListener('pointerleave', () => {
  heroNote.style.setProperty('--note-x', '0px');
  heroNote.style.setProperty('--note-y', '0px');
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.remove('filter-enter');
    if (!card.hidden) {
      card.classList.add('is-visible');
      requestAnimationFrame(() => card.classList.add('filter-enter'));
    }
  });
}));

const progressBar = document.querySelector('.scroll-progress');
const trackedSections = [...document.querySelectorAll('main section[id]')];
let scrollPending = false;
function updateScroll() {
  const scrollRange = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.transform = `scaleX(${scrollRange > 0 ? Math.min(1, Math.max(0, scrollY / scrollRange)) : 0})`;
  const current = [...trackedSections].reverse().find(section => section.getBoundingClientRect().top <= 150);
  nav.querySelectorAll('a').forEach(link => {
    if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
addEventListener('scroll', () => {
  if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateScroll); }
}, { passive: true });
addEventListener('resize', updateScroll);
updateScroll();

const countElement = document.querySelector('[data-count]');
if ('IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    countObserver.disconnect();
    if (motionPreference.matches) return;
    const total = Number(countElement.dataset.count), started = performance.now();
    function countFrame(now) {
      const elapsed = Math.min((now - started) / 1200, 1);
      countElement.textContent = Math.round(total * (1 - (1 - elapsed) ** 3));
      if (elapsed < 1 && !motionPreference.matches) requestAnimationFrame(countFrame);
      else countElement.textContent = total;
    }
    requestAnimationFrame(countFrame);
  }, { threshold: 0.5 });
  countObserver.observe(countElement);
}

// A searchable shortcut menu supplements the visible navigation.
const commandDialog = document.getElementById('command-dialog');
const commandSearch = document.getElementById('command-search');
const commandResults = document.getElementById('command-results');
const commands = [
  ...Object.entries(projects).map(([key, project]) => ({ label: project.title, type: 'Project', keywords: project.tags.join(' '), run: () => document.querySelector(`[data-project="${key}"]`).click() })),
  ...['experience', 'projects', 'about', 'contact'].map(id => ({ label: id[0].toUpperCase() + id.slice(1), type: 'Section', run: () => { document.querySelector(`nav a[href="#${id}"]`).click(); document.getElementById(id).querySelector('h2')?.focus({ preventScroll: true }); } })),
  { label: 'View resumes', type: 'Documents', keywords: 'CV software finance', run: () => document.querySelector('[data-resumes]').click() },
  { label: 'Copy email', type: 'Contact', keywords: 'connect', run: () => document.getElementById('copy-email').click() }
];
trackedSections.forEach(section => section.querySelector('h2')?.setAttribute('tabindex', '-1'));
let visibleCommands = [], selectedCommand = 0;
function selectCommand(index) {
  selectedCommand = index;
  commandResults.querySelectorAll('button').forEach((button, i) => button.classList.toggle('is-selected', i === index));
}
function renderCommands() {
  const query = commandSearch.value.trim().toLowerCase();
  visibleCommands = commands.filter(command => `${command.label} ${command.type} ${command.keywords || ''}`.toLowerCase().includes(query));
  commandResults.replaceChildren();
  visibleCommands.forEach((command, index) => {
    const button = document.createElement('button');
    button.className = 'command-option';
    button.innerHTML = `<span>${escapeHTML(command.label)}</span><span>${escapeHTML(command.type)} ↗</span>`;
    button.addEventListener('click', () => executeCommand(index));
    commandResults.append(button);
  });
  document.getElementById('command-status').textContent = visibleCommands.length ? '' : 'No matches. Try a project name or “resume”.';
  selectCommand(0);
}
function executeCommand(index) {
  const command = visibleCommands[index];
  if (!command) return;
  commandDialog.close();
  // Let close restore focus before a second dialog opens or a section receives focus.
  requestAnimationFrame(command.run);
}
function showCommands() {
  if (document.querySelector('dialog[open]')) return;
  commandSearch.value = '';
  renderCommands();
  openDialog(commandDialog);
  commandSearch.focus();
}
commandDialog.querySelector('.close-dialog').addEventListener('click', () => commandDialog.close());
commandDialog.addEventListener('close', () => lastFocus?.focus());
commandDialog.addEventListener('click', event => {
  if (event.target !== commandDialog) return;
  const rect = commandDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) commandDialog.close();
});
document.querySelector('[data-command]').addEventListener('click', showCommands);
commandSearch.addEventListener('input', renderCommands);
commandDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    if (!visibleCommands.length) return;
    selectCommand((selectedCommand + (event.key === 'ArrowDown' ? 1 : -1) + visibleCommands.length) % visibleCommands.length);
    commandResults.children[selectedCommand]?.focus();
  } else if (event.key === 'Enter' && event.target === commandSearch) {
    event.preventDefault();
    executeCommand(selectedCommand);
  }
});
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (commandDialog.open) commandDialog.close();
    else showCommands();
  }
});
