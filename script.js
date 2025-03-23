// AOS Initialization
AOS.init({
    duration: 1000,
    once: true,
});

// GSAP Animation
gsap.from(".profile-section", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".cv h2", { opacity: 0, y: -50, duration: 1 });
gsap.from(".cv p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// تأثير اللمعان الأبيض البسيط كل 25 ثانية
function applyGlowEffect() {
    const elements = document.querySelectorAll("h1, h2, h3, p, li, .profile-card h2, .profile-card p, .contact-info p, .quote-content p");

    elements.forEach(element => {
        gsap.to(element, {
            duration: 1,
            color: "#ffffff",
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(element, {
                    color: element.tagName.toLowerCase() === 'h2' ? 'var(--primary-color)' : 'inherit',
                    duration: 0.5,
                });
            }
        });
    });
}

setInterval(applyGlowEffect, 25000);