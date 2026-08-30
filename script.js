/**
 * Main Application Entry Point
 * Dynamically loads modular HTML sections and initializes JS features.
 */

import { loadSections } from './js/section-loader.js';
import { initTypingEffect } from './js/typing.js';
import { initNavigation } from './js/navigation.js';
import { initAnimations } from './js/animations.js';
import { initProjects } from './js/projects.js';
import { initContactForm } from './js/contact.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Fetch & inject modular HTML sections dynamically
    await loadSections();

    // 2. Initialize interactive features after components mount
    initTypingEffect();
    initNavigation();
    initAnimations();
    initProjects();
    initContactForm();
});
