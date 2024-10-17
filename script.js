// Scroll-to-Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Formularvalidierung
const form = document.getElementById('kontakt-formular');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nachrichtInput = document.getElementById('nachricht');

form.addEventListener('submit', (e) => {
    let valid = true;

    // Name Validierung
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Bitte gib deinen Namen ein.');
        valid = false;
    } else {
        setSuccess(nameInput);
    }

    // E-Mail Validierung
    if (emailInput.value.trim() === '') {
        setError(emailInput, 'Bitte gib deine E-Mail-Adresse ein.');
        valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, 'Bitte gib eine gültige E-Mail-Adresse ein.');
        valid = false;
    } else {
        setSuccess(emailInput);
    }

    // Nachricht Validierung
    if (nachrichtInput.value.trim() === '') {
        setError(nachrichtInput, 'Bitte gib eine Nachricht ein.');
        valid = false;
    } else {
        setSuccess(nachrichtInput);
    }

    if (!valid) {
        e.preventDefault();
    }
});

function setError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.innerText = message;
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.innerText = '';
}

function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/.test(email);
}

// Swiper initialisieren
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
