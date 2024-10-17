// Funktion zur Sprachumschaltung
function switchLanguage(language) {
    const englishTexts = document.querySelectorAll('.lang.en');
    const turkishTexts = document.querySelectorAll('.lang.tr');

    if (language === 'en') {
        englishTexts.forEach(el => el.style.display = 'block');
        turkishTexts.forEach(el => el.style.display = 'none');
