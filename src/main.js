import './js/header.js';
import './js/about-me-2.js';
import './js/projects.js';
import './js/faq.js';
import './js/covers.js';
import './js/reviews.js';
import './js/work-together.js';

const scrollTopBtn = document.querySelector('.scroll-top-btn');
const aboutMeSection = document.querySelector('#about-me');

window.addEventListener('scroll', () => {
  const sectionTop = aboutMeSection.offsetTop;

  if (window.scrollY >= sectionTop) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});