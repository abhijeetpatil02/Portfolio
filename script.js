
const typingTextElement = document.getElementById('typing-text');
const words = [
    "MCA Student ",
    // " Full Stack Developer | AI & ML Learner",
    "Full Stack Developer | AI & ML Enthusiast",
    "Building Web Applications"
    // & AI-Powered Solutions"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before next word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    if (words.length) setTimeout(typeEffect, 1000);
});


// Navbar Scroll & Mobile Menu

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

// Sticky Navbar Background
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinksContainer.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Active Link Highlight based on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// Scroll Animations (Intersection Observer)

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            // If it's the skills section, animate progress bars
            if (entry.target.id === 'skills') {
                const progressBars = document.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }

            // Optional: Unobserve after animating once
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));


// Back to Top Button

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Form submission handler (Visual only)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

        // Simulate network request
        setTimeout(() => {
            btn.innerHTML = 'Sent Successfully! <i class="fas fa-check"></i>';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            contactForm.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 3000);
        }, 1500);
    });
}

// Project "Read More" / "Read Less" toggle interaction
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.project-card');
            const moreContent = card.querySelector('.more-content');
            const isExpanded = moreContent.classList.contains('expanded');

            if (isExpanded) {
                // Collapse description
                moreContent.classList.remove('expanded');
                btn.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
                btn.setAttribute('aria-expanded', 'false');

                // Smoothly adjust scroll position if card collapses out of view
                const cardTop = card.getBoundingClientRect().top + window.scrollY;
                if (window.scrollY > cardTop) {
                    window.scrollTo({
                        top: cardTop - 100,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Expand description
                moreContent.classList.add('expanded');
                btn.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
