// UI interactions for portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Current year in footer
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

    // Smooth anchor offset for sticky header (optional tweak)
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
});