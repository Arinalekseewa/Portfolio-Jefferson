import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.about-me-accordion', {
    duration: 400,
    showMultiple: true,
    collapse: false,
  });
  const items = document.querySelectorAll('.about-me-item');
items.forEach(item => {
  const content = item.querySelector('div:nth-of-type(2)');
  const arrow = item.querySelector('.icon-arrow-about-me');
  const title = item.querySelector('.about-me-title');

  content.classList.add('about-me-content');

  item.classList.remove('open');
  content.style.maxHeight = '0px';
  arrow.style.transform = 'rotate(0deg)';
  title.classList.remove('active');
  arrow.classList.remove('active');
});

    document.querySelectorAll('.about-me-icon').forEach(icon => {
    icon.addEventListener('click', function () {
      const item = this.closest('.about-me-item');
      const content = item.querySelector('div:nth-of-type(2)');
      const arrow = item.querySelector('.icon-arrow-about-me');
      const title = item.querySelector('.about-me-title');
      const isOpen = item.classList.toggle('open');

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        title.classList.add('active');
        arrow.classList.add('active');
      } else {
        content.style.maxHeight = '0px';
        title.classList.remove('active');
        arrow.classList.remove('active');
      }

      arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  });

});
const swiper = new Swiper('.about-me-swiper-container', {
  loop: true,
  slidesPerView: 1,
  modules: [Navigation, Mousewheel, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: { enabled: true, onlyInViewport: false, pageUpDown: true },
  mousewheel: true,
  roundLengths: true,
  breakpoints: {
    375: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
});
swiper.on('slideChange', function () {
  const activeSlide = swiper.slides[swiper.activeIndex];

  if (activeSlide) {
    document
      .querySelectorAll('.about-me-item-skils')
      .forEach(el => el.classList.remove('active'));
    activeSlide.classList.add('active');
  }
});