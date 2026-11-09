document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.project-image').forEach((img) => { img.addEventListener('error', () => img.remove()); });
document.querySelectorAll('.avatar img, .resume-avatar img').forEach((img) => {
    img.addEventListener('error', () => img.remove());
});

document.querySelectorAll('.avatar img, .resume-avatar img').forEach((img) => {
    if (img.complete && img.naturalWidth === 0) img.remove();
});

(function () {
    var root = document.documentElement, KEY = 'pt', D = 600;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setPos(el) {
        var r = el.getBoundingClientRect();
        var x = r.left + r.width / 2, y = r.top + r.height / 2;
        if (y < 0 || y > window.innerHeight) { x = window.innerWidth / 2; y = window.innerHeight / 2; }
        root.style.setProperty('--tx', x + 'px');
        root.style.setProperty('--ty', y + 'px');
    }

    if (root.classList.contains('pt-arrive')) {
        var target = document.querySelector('.back') || document.querySelector('.projects-more .button');
        if (target) setPos(target);
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                root.classList.add('pt-reveal');
                setTimeout(function () { root.classList.remove('pt-arrive', 'pt-reveal'); }, D + 50);
            });
        });
    }

    document.querySelectorAll('a.button[href="projects.html"], a.back').forEach(function (a) {
        a.addEventListener('click', function (e) {
            if (reduce || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            setPos(a);
            void root.offsetWidth;
            root.classList.add('pt-leave');
            try { sessionStorage.setItem(KEY, '1'); } catch (_) { }
            setTimeout(function () { location.href = a.href; }, D);
        });
    });

    window.addEventListener('pageshow', function (e) {
        if (e.persisted) root.classList.remove('pt-leave', 'pt-arrive', 'pt-reveal');
    });
})();

/* Reviews: Supabase when configured (config.js), otherwise this browser's localStorage */
(function () {
    var form = document.getElementById('review-form');
    var list = document.getElementById('reviews-list');
    if (!form || !list) return;
    var API = window.ReviewsAPI, remote = API && API.enabled;
    var KEY = 'portfolio_reviews_v1', summary = document.getElementById('reviews-summary');
    var errorEl = document.getElementById('review-error');
    var okEl = document.getElementById('review-ok');

    function loadLocal() {
        try { var d = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(d) ? d : []; } catch (_) { return []; }
    }
    function getItems() {
        if (!remote) return Promise.resolve(loadLocal());
        return API.list().then(function (rows) { return rows.filter(function (r) { return r.approved !== false; }); });
    }
    function showError(m) { errorEl.textContent = m; errorEl.hidden = false; if (okEl) okEl.hidden = true; }

    function draw(items) {
        list.textContent = '';
        if (!items.length) {
            var li = document.createElement('li'); li.className = 'reviews-empty';
            li.textContent = 'No reviews yet. Be the first to leave one!';
            list.appendChild(li); summary.textContent = ''; return;
        }
        var sum = 0;
        items.forEach(function (r) {
            sum += r.rating;
            var el = document.createElement('li'); el.className = 'review';
            var head = document.createElement('div'); head.className = 'review-head';
            var name = document.createElement('span'); name.className = 'review-name'; name.textContent = r.name;
            var stars = document.createElement('span'); stars.className = 'review-stars';
            stars.setAttribute('aria-label', r.rating + ' out of 5');
            for (var i = 1; i <= 5; i++) {
                var s = document.createElement('span'); s.textContent = '★';
                if (i > r.rating) s.className = 'off';
                stars.appendChild(s);
            }
            head.appendChild(name); head.appendChild(stars);
            var text = document.createElement('p'); text.className = 'review-text'; text.textContent = r.text;
            var date = document.createElement('p'); date.className = 'review-date';
            date.textContent = new Date(r.created_at || r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            el.appendChild(head); el.appendChild(text); el.appendChild(date);
            list.appendChild(el);
        });
        summary.textContent = (sum / items.length).toFixed(1) + ' / 5 · ' + items.length + (items.length === 1 ? ' review' : ' reviews');
    }

    function render() {
        getItems().then(draw).catch(function () {
            list.textContent = ''; var li = document.createElement('li'); li.className = 'reviews-empty';
            li.textContent = 'Reviews could not be loaded right now.'; list.appendChild(li);
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (form.elements.website && form.elements.website.value) return; // honeypot
        var name = form.elements.name.value.trim();
        var text = form.elements.text.value.trim();
        var checked = form.querySelector('input[name="rating"]:checked');
        var msg = '';
        if (!name) msg = 'Please enter your name.';
        else if (!checked) msg = 'Please choose a rating.';
        else if (text.length < 5) msg = 'Please write a few words about your experience.';
        if (msg) return showError(msg);
        errorEl.hidden = true;
        var review = { name: name, rating: parseInt(checked.value, 10), text: text };
        var btn = form.querySelector('button[type=submit]'); btn.disabled = true;

        var done = function () {
            form.reset(); btn.disabled = false;
            if (okEl) { okEl.textContent = 'Thank you! Your review was sent.'; okEl.hidden = false; }
            render();
        };
        if (remote) {
            API.add(review).then(done).catch(function () { btn.disabled = false; showError('Could not send the review. Please try again later.'); });
        } else {
            var items = loadLocal(); review.date = new Date().toISOString(); items.unshift(review);
            try { localStorage.setItem(KEY, JSON.stringify(items.slice(0, 100))); done(); }
            catch (_) { btn.disabled = false; showError('Could not save the review in this browser.'); }
        }
    });

    render();
})();
