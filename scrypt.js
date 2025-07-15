function setTheme(isDark) {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
}

const themeSwitch = document.getElementById('theme-switch');
if (themeSwitch) {
    themeSwitch.addEventListener('change', function() {
        setTheme(this.checked);
    });
}