import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      afterInit: function () {
        updateButtons(this);
      },
      slideChange: function () {
        updateButtons(this);
      },
    },
  });

  // Події на кнопках
  prevBtn.addEventListener('click', () => swiper.slidePrev());
  nextBtn.addEventListener('click', () => swiper.slideNext());

  function updateButtons(swiperInstance) {
    const atBeginning = swiperInstance.isBeginning;
    const atEnd = swiperInstance.isEnd;

    // Дизейбл кнопок
    prevBtn.disabled = atBeginning;
    nextBtn.disabled = atEnd;

    // Тогл класу "disabled"
    prevBtn.classList.toggle('disabled', atBeginning);
    nextBtn.classList.toggle('disabled', atEnd);

    // Тогл класу "active"
    prevBtn.classList.toggle('active', !atBeginning);
    nextBtn.classList.toggle('active', !atEnd);
  }
});
