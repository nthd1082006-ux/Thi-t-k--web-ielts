// lotrinh.js - Interactive functionality for roadmap detail pages

document.addEventListener('DOMContentLoaded', function() {
    // Accordion for modules
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            
            // Close others
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-body').classList.remove('active');
                }
            });
            
            // Toggle current
            item.classList.toggle('active');
            body.classList.toggle('active');
        });
    });

    // Animate roadmap items on scroll
    const roadmapObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.roadmap-item').forEach(item => {
        roadmapObserver.observe(item);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Register CTA
    const registerBtns = document.querySelectorAll('.cta-register');
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Save course info to sessionStorage for form
            const courseTitle = document.querySelector('.hero-title').textContent;
            const courseId = window.location.pathname.split('/').pop().replace('.html', '');
            sessionStorage.setItem('selectedCourse', JSON.stringify({
                title: courseTitle,
                id: courseId,
                timestamp: Date.now()
            }));
            
            // Redirect to register
            window.location.href = 'register.html';
        });
    });

    // Counter animation for stats (if any)
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }

    // Observe stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.success-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Mobile menu (reuse from Home.js if needed)
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('active');
            document.querySelector('.auth-buttons').classList.toggle('active');
        });
    }

    console.log('Lotrinh.js loaded successfully');
});

