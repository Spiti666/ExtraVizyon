// Funktion zum Umschalten der Sprache
function switchLanguage(language) {
    const englishTexts = document.querySelectorAll('.lang.en');
    const turkishTexts = document.querySelectorAll('.lang.tr');
    const langEn = document.getElementById('lang-en');
    const langTr = document.getElementById('lang-tr');

    if (language === 'en') {
        englishTexts.forEach(el => el.style.display = 'block');
        turkishTexts.forEach(el => el.style.display = 'none');
        langEn.classList.add('active');
        langTr.classList.remove('active');
    } else if (language === 'tr') {
        englishTexts.forEach(el => el.style.display = 'none');
        turkishTexts.forEach(el => el.style.display = 'block');
        langEn.classList.remove('active');
        langTr.classList.add('active');
    }
}

// Standardmäßig Englisch aktivieren
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});
