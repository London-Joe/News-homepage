const navToggler = document.querySelector('.header__mobileNavToggle');
const nav = document.querySelector('.header__nav');
const navMenu = document.querySelector('.header__navMenu');

navToggler.addEventListener('click', () => {
 const visibility = navMenu.getAttribute('data-visible');
 console.log(visibility);
 if (visibility === 'false') {
  nav.setAttribute('data-visible', true);
  navMenu.setAttribute('data-visible', true);
  navToggler.setAttribute('aria-expanded', true);
 }else {
  nav.setAttribute('data-visible', false);
  navMenu.setAttribute('data-visible', false);
  navToggler.setAttribute('aria-expanded', false);
 }
})