// Mobile Menu

document.body.classList.remove('no-js');

const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__nav-toggle');
mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {

  mainNav.classList.toggle('main-nav--closed');
  navToggle.classList.toggle('menu-button--closed');
  navToggle.classList.toggle('menu-button--opened');

  if (navToggle.classList.contains('menu-button--opened')) {
    navToggle.setAttribute('aria-label', 'Закрыть меню');
  } else {
    navToggle.setAttribute('aria-label', 'Открыть меню');
  }
});

// Slider

const updateImageWidth = (val) => {
  const imageWrapper = document.querySelector('.example__photo-after');
  imageWrapper.style.width = `${val}%`;
}
