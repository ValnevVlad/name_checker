const root = document.documentElement;
const themeIcons = document.querySelectorAll('.theme-icon');

function setTheme(theme) {
if (theme === 'dark') {
    root.classList.add('dark');
} else {
    root.classList.remove('dark');
}

localStorage.setItem('theme', theme);

themeIcons.forEach(icon => {
    icon.classList.toggle('active', icon.dataset.theme === theme);
});
}

// Обработка кликов по иконкам
themeIcons.forEach(icon => {
icon.addEventListener('click', () => {
    const selected = icon.dataset.theme;
    setTheme(selected);
});
});

// Загрузка темы при старте
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);