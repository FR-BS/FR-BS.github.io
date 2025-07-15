function setTheme(isDark) {
    document.body.dataset.theme = isDark ? 'dark' : 'light';
}

document.getElementById('theme-switch').addEventListener('change', function() {
    setTheme(this.checked);
});