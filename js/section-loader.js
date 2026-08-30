/**
 * Section Component Loader Module
 * Dynamically fetches and replaces data-section placeholders with section HTML files
 */
export async function loadSections() {
    const placeholders = document.querySelectorAll('[data-section]');
    if (placeholders.length === 0) return;

    const promises = Array.from(placeholders).map(async (el) => {
        const file = el.getAttribute('data-section');
        if (!file) return;
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                el.outerHTML = html;
            } else {
                console.error(`Failed to load section: ${file}`);
            }
        } catch (err) {
            console.error(`Error loading section ${file}:`, err);
        }
    });

    await Promise.all(promises);
}
