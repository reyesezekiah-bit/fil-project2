const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));


// Accessible topic dropdown; retains the original mobile navigation behavior.
document.querySelectorAll('.nav-dropbtn').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.closest('.nav-dropdown');
    const open = parent.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
document.addEventListener('click', event => {
  document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      dropdown.querySelector('.nav-dropbtn')?.setAttribute('aria-expanded', 'false');
    }
  });
});
