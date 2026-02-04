const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.section, .hero, .project-card, .cert-card').forEach((el) => {
  el.classList.add('reveal-hidden');
  observer.observe(el);
});

const filterButtons = document.querySelectorAll('.filter-btn');
const schoolProjects = document.querySelectorAll('.school-project');

if (filterButtons.length && schoolProjects.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((button) => button.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      schoolProjects.forEach((card) => {
        const categories = (card.dataset.categories || '').split(',');
        const matches = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });
}
