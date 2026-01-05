// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// (Contact form removed; using direct social links instead)

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (navbar) {
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    }

    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations (guarded for older browsers)
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for animation
    document.querySelectorAll('.experience-card, .project-card, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Skills dropdown now handled natively via <details>/<summary>

// Email icon: reveal readonly textbox with email for manual copy
const emailIcon = document.getElementById('emailIcon');
const emailCopyContainer = document.getElementById('emailCopyContainer');
const emailCopyInput = document.getElementById('emailCopyInput');

if (emailIcon) {
    emailIcon.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailIcon.getAttribute('data-email');
        if (!email) return;

        if (emailCopyContainer && emailCopyInput) {
            emailCopyInput.value = email;
            emailCopyContainer.style.display = 'block';
            emailCopyContainer.setAttribute('aria-hidden', 'false');
            emailCopyInput.focus();
            emailCopyInput.select();
        } else {
            // Simple fallback: show the email in an alert
            window.alert('Email: ' + email);
        }
    });
}

console.log('Portfolio loaded successfully!');
