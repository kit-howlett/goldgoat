var menuBtn = document.getElementById('js-button--event');
var mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', function() {
  if (mobileMenu.classList.contains('mobile-menu--open')) {
    mobileMenu.classList.remove('mobile-menu--open');
  } else {
    mobileMenu.classList.add('mobile-menu--open');
  }
});