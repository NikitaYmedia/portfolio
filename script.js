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

// Live visitors counter (Supabase Realtime Presence)
(function () {
    const box = document.getElementById('online');
    const countEl = document.getElementById('online-count');
    if (!box || !window.supabase) return;

    const client = window.supabase.createClient(
        'https://ТВОЙ-ПРОЕКТ.supabase.co',
        'ТВОЙ_ANON_KEY'
    );

    const channel = client.channel('portfolio-online', {
        config: { presence: { key: crypto.randomUUID() } }
    });

    channel
        .on('presence', { event: 'sync' }, () => {
            countEl.textContent = Object.keys(channel.presenceState()).length;
            box.hidden = false;
        })
        .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') await channel.track({ at: Date.now() });
        });
})();