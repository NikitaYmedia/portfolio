const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function getSavedTheme() {
    try { return localStorage.getItem('theme'); } catch { return null; }
}

function saveTheme(theme) {
    try { localStorage.setItem('theme', theme); } catch { }
}

const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = getSavedTheme() || (preferredDark ? 'dark' : 'light');

toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    saveTheme(next);
});

document.getElementById('year').textContent = new Date().getFullYear();

// Hide a project image if the file is missing, so the empty frame stays clean
document.querySelectorAll('.project-image').forEach((img) => {
    const hide = () => img.remove();
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener('error', hide);
});