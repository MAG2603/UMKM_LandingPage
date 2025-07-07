    document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
    function onScroll() {
        let scrollPos = window.scrollY + 80;
        let activeIdx = 0;
        sections.forEach((section, idx) => {
            if (section && section.offsetTop <= scrollPos) {
                activeIdx = idx;
            }
        });
        navLinks.forEach((link, idx) => {
            if (idx === activeIdx) {
                link.classList.add('active-nav');
            } else {
                link.classList.remove('active-nav');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    const ctaBtn = document.getElementById('cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', function() {
            ctaBtn.style.transform = 'scale(1.08) rotate(-2deg)';
            ctaBtn.style.boxShadow = '0 6px 24px #1976d255';
        });
        ctaBtn.addEventListener('mouseleave', function() {
            ctaBtn.style.transform = '';
            ctaBtn.style.boxShadow = '';
        });
        ctaBtn.addEventListener('click', function() {
            const msg = document.getElementById('message');
            msg.textContent = 'Terima kasih! Tim kami akan menghubungi Anda.';
            msg.style.color = '#1976d2';
            setTimeout(() => { msg.textContent = ''; }, 3500);
        });
    }

    const revealEls = document.querySelectorAll('.layanan-item, .tentang-content, .kontak-form');
    function revealOnScroll() {
        const trigger = window.innerHeight * 0.92;
        revealEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < trigger) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            } else {
                el.style.opacity = 0;
                el.style.transform = 'translateY(40px)';
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
