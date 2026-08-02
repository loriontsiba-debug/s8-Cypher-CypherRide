//MENU MOBILE
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('navPrin');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      burgerBtn.classList.toggle('is-open', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Ferme le menu 
  document.addEventListener('click', function (event) {
    if (!mobileMenu || !burgerBtn) return;

    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedBurger = burgerBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedBurger) {
      mobileMenu.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  //ANNÉE AUTOMATIQUE
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});