const openNavBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-list");
const openModalBtn = document.querySelector(".burger-btn");
const closeModalBtn = document.querySelector(".mobile-close-btn");
const modal = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".mobile-navigation-link");

openNavBtn.addEventListener('click', toggleNav);

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

function toggleNav() {
    nav.classList.toggle('is-open');
}

function openModal() {
    modal.classList.add("is-open");
    document.body.classList.add("no-scroll");
}

function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
}

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});