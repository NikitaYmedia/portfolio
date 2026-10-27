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

document.querySelectorAll('.project-image').forEach((img) => {
    const hide = () => img.remove();
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener('error', hide);
});

(function () {
    const box = document.getElementById('online');
    const countEl = document.getElementById('online-count');
    if (!box) return;

    if (!window.supabase) {
        console.warn('[online] Supabase library did not load (blocked or offline?)');
        return;
    }

    const client = window.supabase.createClient(
        'https://tnehsqhrohpcetphnllr.supabase.co',
        'sb_publishable_N9I6bXEbMt1c_VMThqXuAQ_fTsaxX2Q'
    );

    const key = (crypto.randomUUID && crypto.randomUUID()) || String(Math.random()).slice(2);
    const channel = client.channel('portfolio-online', {
        config: { presence: { key } }
    });

    function render() {
        const count = Math.max(1, Object.keys(channel.presenceState()).length);
        countEl.textContent = count;
        box.hidden = false;
    }

    channel
        .on('presence', { event: 'sync' }, render)
        .subscribe(async (status, err) => {
            if (status === 'SUBSCRIBED') {
                await channel.track({ at: Date.now() });
                render();
            } else {
                console.warn('[online] realtime status:', status, err || '');
            }
        });
})();