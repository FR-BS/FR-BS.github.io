console.log('Script carregado!');
document.getElementById('theme-switch').addEventListener('change', function() {
    const theme = this.checked ? 'dark' : 'light';
    console.log('Tema alterado para:', theme);
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

const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});