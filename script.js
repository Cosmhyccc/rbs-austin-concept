'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
menuButton.addEventListener('click', () => { const opened = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(opened)); nav.classList.toggle('is-open', opened); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
const form = document.querySelector('#quote-form');
form.querySelector('[type=submit]').disabled = false;
const panel = document.querySelector('#draft-panel');
const draftText = document.querySelector('#draft-text');
const copyStatus = document.querySelector('#copy-status');
function invalidateDraft() { panel.hidden = true; copyStatus.textContent = ''; }
form.addEventListener('input', invalidateDraft);
form.addEventListener('change', invalidateDraft);
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { form.elements.service.value = link.dataset.service; invalidateDraft(); }));
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const value = key => String(data.get(key) || '').trim();
  const draft = `Hello RBS,\n\nI'm interested in ${value('service').toLowerCase()} for my property.\n\n${value('details')}\n\nName: ${value('name')}\n${value('company') ? `Company: ${value('company')}\n` : ''}Email: ${value('email')}\n\nPlease let me know the next steps. Thank you!`;
  draftText.textContent = draft;
  document.querySelector('#email-draft').href = `mailto:admin@rbsbuildingmaintenance.com?subject=${encodeURIComponent('Property service inquiry — ' + value('service'))}&body=${encodeURIComponent(draft)}`;
  copyStatus.textContent = '';
  panel.hidden = false;
  panel.focus({ preventScroll: true });
  panel.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
document.querySelector('#copy-draft').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(draftText.textContent); copyStatus.textContent = 'Draft copied. Paste it into your email app when you are ready.'; }
  catch { copyStatus.textContent = 'Copy is unavailable in this browser. Select the draft text above and copy it manually.'; }
});
document.querySelector('#edit-draft').addEventListener('click', () => { panel.hidden = true; form.elements.details.focus(); });
