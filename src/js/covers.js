document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers-section');
  const coversLists = document.querySelectorAll('.covers-list');

  // Double ul to create continuous photo movement
  coversLists.forEach(list => {
    list.innerHTML += list.innerHTML;
  });

  const viewArea = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        coversLists.forEach(list => list.classList.add('animate'));
      } else {
        coversLists.forEach(list => list.classList.remove('animate'));
      }
    });
  }, viewArea);

  if (coversSection) {
    observer.observe(coversSection);
  }
});
