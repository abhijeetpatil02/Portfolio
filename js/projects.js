/**
 * Projects module for expanding/collapsing project card details
 */
export function initProjects() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.project-card');
            if (!card) return;

            const moreContent = card.querySelector('.more-content');
            if (!moreContent) return;

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
}
