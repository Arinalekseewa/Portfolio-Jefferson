const openNavBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-list");
const openModalBtn = document.querySelector(".burger-btn");
const closeModalBtn = document.querySelector(".mobile-close-btn");
const modal = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".mobile-navigation-link");
const orderBtn = document.querySelector(".order-nav-mobile");

function toggleNav(event) {
    event.stopPropagation();
    nav.classList.toggle('is-open');
}

document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnButton = openNavBtn.contains(event.target);

    if (!isClickInsideNav && !isClickOnButton) {
        nav.classList.remove('is-open');
    }
});

openNavBtn.addEventListener('click', toggleNav);

function openModal() {
    modal.classList.add("is-open");
    document.body.classList.add("no-scroll");
}

function closeModal() {
    modal.classList.remove("is-open");
    setTimeout(() => {
        document.body.classList.remove("no-scroll");
    }, 300);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeModal();
    });
});

orderBtn.addEventListener("click", () => {
    closeModal();
});
