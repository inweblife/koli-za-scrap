// Мобилно меню
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '✕' : '☰';
  });
}

// Плавно появяване при скрол
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('visible'));
}

// Година във футъра
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
