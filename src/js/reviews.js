import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper/bundle';

const reviewList = document.querySelector('.reviews-list');
const swiperControllButtons = document.querySelector('.swiper-controll-buttons');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

const fetchReviews = () => {
  return axios.get('/api/reviews').then(response => response.data);
};

function createReviewLi(reviewData) {
  return `
    <li class="reviews-list-item swiper-slide">
      <img src="${reviewData.avatar_url}" alt="${reviewData.author}" class="reviews-list-item-img" />
      <h3 class="reviews-list-item-author">${reviewData.author}</h3>
      <p class="reviews-list-item-text">${reviewData.review}</p>
    </li>
  `;
}

const renderCard = reviews => {
  const markup = reviews.map(createReviewLi).join('');
  reviewList.insertAdjacentHTML('beforeend', markup);
};

const initializeReviews = async () => {
  try {
    const data = await fetchReviews();
    renderCard(data);

    // === Ініціалізуємо Swiper після рендеру відгуків ===
    new Swiper('.reviews-swiper.swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next.button-next',
        prevEl: '.swiper-button-prev.button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      grabCursor: true,
      mousewheel: false,
    });

  } catch (error) {
    iziToast.error({
      title: 'Error',
      position: 'topCenter',
      message: `Error fetching reviews: ${error}`,
    });
    reviewList.insertAdjacentHTML(
      'beforeend',
      `<p class="reviews-error-text">Not found</p>`
    );
    swiperControllButtons.classList.add('is-hidden');
  }
};

initializeReviews();