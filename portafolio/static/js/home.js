// Lógica para selector de fondos y persistencia (homest)
document.addEventListener('DOMContentLoaded', () => {
  const btnModificar = document.getElementById('btn-modificar-perfil');
  const modal = document.getElementById('bg-modal');
  const closeBtn = document.getElementById('bg-close');
  const resetBtn = document.getElementById('bg-reset');
  const bgOptions = document.querySelectorAll('.bg-option');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    const first = modal.querySelector('.bg-option');
    if (first) first.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (btnModificar) btnModificar.addEventListener('click', () => openModal());
  if (closeBtn) closeBtn.addEventListener('click', () => closeModal());
  if (resetBtn) resetBtn.addEventListener('click', () => { removeBackground(); closeModal(); });

  bgOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const bg = btn.dataset.bg;
      applyBackground(bg);
      closeModal();
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('open')) closeModal();
    }
  });

  const saved = localStorage.getItem('profile_bg');
  if (saved) applyBackground(saved);
});

function applyBackground(name) {
  document.body.classList.remove('bg1','bg2','bg3','bg4','bg5');
  if (name && ['bg1','bg2','bg3','bg4','bg5'].includes(name)) {
    document.body.classList.add(name);
    try { localStorage.setItem('profile_bg', name); } catch (err) { /* ignore */ }
  }
}

function removeBackground() {
  document.body.classList.remove('bg1','bg2','bg3','bg4','bg5');
  try { localStorage.removeItem('profile_bg'); } catch (err) { /* ignore */ }
}