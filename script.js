// Animação de caveiras flutuantes
document.addEventListener('DOMContentLoaded', () => {
    const floatingSkulls = document.querySelector('.floating-skulls');

    for (let i = 0; i < 10; i++) {
        const skull = document.createElement('div');
        skull.classList.add('skull');
        skull.style.left = `${Math.random() * 100}vw`;
        skull.style.animationDuration = `${Math.random() * 5 + 3}s`;
        floatingSkulls.appendChild(skull);
    }
});
const btn = document.querySelector('.btn');
let hue = 0;

setInterval(() => {
    btn.style.background = `hsl(${hue}, 70%, 50%)`;
    hue = (hue + 1) % 360;
}, 50);
document.addEventListener('DOMContentLoaded', () => {
    const floatingSkulls = document.querySelector('.floating-skulls');

    for (let i = 0; i < 15; i++) {
        const skull = document.createElement('div');
        skull.classList.add('skull');
        skull.style.left = `${Math.random() * 100}vw`;
        skull.style.animationDuration = `${Math.random() * 8 + 4}s`;
        floatingSkulls.appendChild(skull);
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
