document.getElementById('theme-switch').addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = savedTheme;
document.getElementById('theme-switch').checked = savedTheme === 'dark';

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));