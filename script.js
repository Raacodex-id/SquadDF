// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10,10,10,0.98)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.85)';
  }
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

function closeMenu() {
  if (mobileMenu) mobileMenu.classList.remove('active');
}

// ===== COUNT UP =====
window.addEventListener('load', () => {
  document.querySelectorAll('.stat-big[data-target]').forEach(el => {
    const target = +el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    let count = 0;
    const step = Math.ceil(target / 50);

    const update = () => {
      count += step;
      if (count >= target) {
        el.textContent = target + suffix;
      } else {
        el.textContent = count + suffix;
        setTimeout(update, 30);
      }
    };
    update();
  });
});

// ===== GALLERY FILTER (untuk gallery.html) =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.getAttribute('data-type') !== filter);
    });
  });
});

// ===== PLAYLIST TABS (untuk playlist.html) =====
document.querySelectorAll('.pl-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.playlist-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(tab.getAttribute('data-player'));
    if (target) target.classList.add('active');
  });
});