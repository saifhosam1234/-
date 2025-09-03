// Portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
    // Current year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Reveal on scroll
    const revealables = document.querySelectorAll('.reveal');
    const onScroll = () => {
        const trigger = window.innerHeight * 0.88;
        revealables.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < trigger) el.classList.add('visible');
        });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 6s Intro overlay then hide
    const intro = document.getElementById('intro');
    const hideIntro = () => {
        if (!intro || intro.classList.contains('hidden')) return;
        intro.classList.add('hidden');
        setTimeout(() => { if (intro && intro.parentNode) intro.parentNode.removeChild(intro); }, 800);
    };
    setTimeout(hideIntro, 6000);
    // Hide on any click anywhere on the page
    document.addEventListener('click', hideIntro, { passive: true });

    // Smooth anchor offset for sticky header
    const navHeight = document.querySelector('.site-header')?.offsetHeight || 0;
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // Hide hero section when clicking "شاهد أعمالي"
    const viewWorkBtn = document.querySelector('.btn.btn-primary[href="#projects"]');
    const heroSection = document.querySelector('.hero');
    if (viewWorkBtn && heroSection) {
        viewWorkBtn.addEventListener('click', () => {
            // Let the smooth scroll start, then hide the hero
            setTimeout(() => {
                heroSection.classList.add('hidden-hero');
                setTimeout(() => { if (heroSection && heroSection.parentNode) heroSection.parentNode.removeChild(heroSection); }, 600);
            }, 200);
        });
    }
});

