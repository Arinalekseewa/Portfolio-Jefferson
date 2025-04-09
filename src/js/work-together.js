import axios from 'axios';
import Swal from 'sweetalert2';

import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 300,
    easing: 'ease-out-cubic',
    offset: 100,
    once: false,
    mirror: true,
  });
});

const form = document.querySelector('.js-form');

const elements = {
  emailInput: form.querySelector('.js-email'),
  commentInput: form.querySelector('.js-comment'),
  emailError: form.querySelector('.js-email-error'),
  commentError: form.querySelector('.js-comment-error'),
  submitButton: form.querySelector('.connect__button'),
};

const { emailInput, commentInput, emailError, commentError, submitButton } =
  elements;

// ===================== EVENT LISTENERS =====================

form.addEventListener('submit', handleFormSubmit);

emailInput.addEventListener('input', () => {
  validateField('email', emailInput, emailError);
  toggleSubmitButton();
});

commentInput.addEventListener('input', () => {
  validateField('comment', commentInput, commentError);
  toggleSubmitButton();
});

toggleSubmitButton(); // одразу блокуємо кнопку при завантаженні

// ===================== FORM SUBMIT =====================

async function handleFormSubmit(event) {
  event.preventDefault();
  clearValidationErrors();

  const formData = new FormData(form);
  const email = formData.get('email')?.trim();
  const comment = formData.get('comment')?.trim();

  const isValidEmail = validateField('email', emailInput, emailError);
  const isValidComment = validateField('comment', commentInput, commentError);

  if (!isValidEmail || !isValidComment) {
    showModalWarning();
    return;
  }

  try {
    showModalLoading();

    const { data } = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      { email, comment }
    );

    Swal.close();
    showModalSuccess(data.title, data.message);
    form.reset();
    clearValidationErrors();
    toggleSubmitButton();
  } catch (error) {
    Swal.close();
    console.error('Form submission error:', error);

    if (!navigator.onLine) {
      showModalNoConnection();
      return;
    }

    const message =
      error.response?.data?.message ||
      'Something went wrong. Please try again later.';

    showModalError(message);
  }
}

// ===================== VALIDATION =====================

function validateField(type, inputElement, errorElement, showMessage = true) {
  const value = inputElement.value.trim();
  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(com|net|org|ua|gov|edu)$/;

  if (!value) {
    if (showMessage) {
      errorElement.textContent =
        type === 'email' ? 'Email is required.' : 'Comment is required.';
      errorElement.style.color = '#ff6b6b';
      inputElement.classList.add('connect__input--invalid');
    }
    return false;
  }

  if (type === 'email' && !emailPattern.test(value)) {
    if (showMessage) {
      errorElement.textContent = 'Please enter a valid email address.';
      errorElement.style.color = '#ff6b6b';
      inputElement.classList.add('connect__input--invalid');
    }
    return false;
  }

  if (showMessage) {
    if (type === 'email') {
      errorElement.textContent = '✓ Email looks good.';
      errorElement.style.color = '#00ff99';
    } else {
      errorElement.textContent = '';
    }
    inputElement.classList.remove('connect__input--invalid');
  }

  return true;
}

function clearValidationErrors() {
  emailError.textContent = '';
  commentError.textContent = '';
  emailError.style.color = '#ff6b6b';
  commentError.style.color = '#ff6b6b';

  emailInput.classList.remove('connect__input--invalid');
  commentInput.classList.remove('connect__input--invalid');
}

function toggleSubmitButton() {
  const isValidEmail = validateField('email', emailInput, emailError, false);
  const isValidComment = validateField(
    'comment',
    commentInput,
    commentError,
    false
  );
  submitButton.classList.toggle(
    'is-disabled',
    !(isValidEmail && isValidComment)
  );
}

// ===================== MODALS =====================

function showModalSuccess(title, message) {
  Swal.fire({
    icon: 'success',
    title,
    text: message,
    background: '#1c1d20',
    color: 'white',
    customClass: {
      popup: 'custom-popup',
      title: 'custom-title',
      htmlContainer: 'custom-text',
      confirmButton: 'custom-button',
    },
  });
}

function showModalError(message) {
  Swal.fire({
    icon: 'error',
    title: 'Oops',
    text: message,
    background: '#1c1d20',
    color: 'white',
    customClass: {
      confirmButton: 'connect__button-modal',
    },
  });
}

function showModalLoading() {
  Swal.fire({
    title: 'Sending...',
    background: '#1c1d20',
    color: 'white',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
    customClass: {
      popup: 'custom-popup',
      title: 'custom-title',
      confirmButton: 'custom-button',
    },
  });
}
function showModalWarning() {
  Swal.fire({
    icon: 'warning',
    title: 'Incomplete Fields',
    text: 'Please fill in all required fields.',
    background: '#1c1d20',
    color: 'white',
    customClass: {
      popup: 'custom-popup',
      title: 'custom-title',
      htmlContainer: 'custom-text',
      confirmButton: 'custom-button',
    },
  });
}
