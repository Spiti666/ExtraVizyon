// Funktion zur Sprachumschaltung
function switchLanguage(language) {
    const englishTexts = document.querySelectorAll('.lang.en');
    const turkishTexts = document.querySelectorAll('.lang.tr');

    if (language === 'en') {
        englishTexts.forEach(el => el.style.display = 'block');
        turkishTexts.forEach(el => el.style.display = 'none');
        document.getElementById('lang-en').classList.add('active');
        document.getElementById('lang-tr').classList.remove('active');
    } else if (language === 'tr') {
        englishTexts.forEach(el => el.style.display = 'none');
        turkishTexts.forEach(el => el.style.display = 'block');
        document.getElementById('lang-en').classList.remove('active');
        document.getElementById('lang-tr').classList.add('active');
    }
}

// Standardmäßig Englisch aktivieren
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});
