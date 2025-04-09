import Accordion from 'accordion-js';

new Accordion('.faq-list', {
  duration: 400,
  showMultiple: true,
  onToggle: function (event) {
    const button = event.target.closest('.questions');
    if (button) {
      button.classList.toggle('is-active');
    }
  },
});

document.querySelectorAll('.questions').forEach((questionBlock, index) => {
  const button = questionBlock.querySelector('.btn-answer');
  const title = questionBlock.querySelector('.title-item-list');
  const panel = document.querySelectorAll('.ac-panel')[index]; // відповідний .ac-panel

  button.addEventListener('click', () => {
    title.classList.toggle('active');
    panel.classList.toggle('open');
    button.classList.toggle('active');
  });
});





