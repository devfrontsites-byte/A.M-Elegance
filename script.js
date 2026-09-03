// Loader e Animação Inicial do Hero
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => { 
            loader.style.display = 'none'; 
        }, 600);
    }

    const heroText = document.getElementById('heroText');
    if (heroText) {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
        heroText.style.transition = '1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s';
    }
});

// Efeito na Navbar ao Rolar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Intersection Observer para Efeito Reveal
const observerOptions = { 
    threshold: 0.1, 
    rootMargin: "0px 0px -30px 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox da Galeria
const lightbox = document.getElementById('lightbox');
const lightImg = lightbox ? lightbox.querySelector('img') : null;

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        if (lightbox && lightImg) {
            lightbox.style.display = 'flex';
            lightImg.src = img.src;
            document.body.style.overflow = 'hidden'; 
        }
    });
});

if (lightbox) {
    lightbox.onclick = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}