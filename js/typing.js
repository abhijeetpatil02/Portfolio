/**
 * Typing effect module for Hero section
 */
export function initTypingEffect() {
    const typingTextElement = document.getElementById('typing-text');
    if (!typingTextElement) return;

    const words = [
        "MCA Student",
        "Full Stack Developer | AI & ML Enthusiast",
        "Building Web Applications"
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

    if (words.length) {
        setTimeout(typeEffect, 1000);
    }
}
