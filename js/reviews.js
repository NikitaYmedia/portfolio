/* Reviews: Supabase when configured (config.js), otherwise this browser's localStorage */
(function () {
    var form = document.getElementById('review-form');
    var list = document.getElementById('reviews-list');
    if (!form || !list) return;

    var API = window.ReviewsAPI, remote = API && API.enabled;
    var KEY = 'portfolio_reviews_v1';
    var summary = document.getElementById('reviews-summary');
    var errorEl = document.getElementById('review-error');
    var okEl = document.getElementById('review-ok');
    var ratingOut = document.getElementById('rating-value');
    var T = function (x) { return window.I18N ? I18N.t(x) : x; };
    var last = null;

    function loadLocal() {
        try { var d = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(d) ? d : []; } catch (_) { return []; }
    }
    function getItems() {
        if (!remote) return Promise.resolve(loadLocal());
        return API.list().then(function (rows) { return rows.filter(function (r) { return r.approved !== false; }); });
    }
    function showError(m) { errorEl.textContent = T(m); errorEl.hidden = false; if (okEl) okEl.hidden = true; }
    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text !== undefined) n.textContent = text;
        return n;
    }
    function initials(name) {
        var p = name.replace(/[^\p{L}\s]/gu, ' ').trim().split(/\s+/).slice(0, 2);
        return p.map(function (w) { return w.charAt(0).toUpperCase(); }).join('') || '•';
    }
    function emptyItem(msg) {
        list.textContent = '';
        list.appendChild(el('li', 'reviews-empty', T(msg)));
    }

    function draw(items) {
        list.textContent = '';
        if (!items.length) { emptyItem('No reviews yet. Be the first to leave one!'); summary.textContent = ''; return; }
        var sum = 0;
        items.forEach(function (r) {
            sum += r.rating;
            var li = el('li', 'review');

            var top = el('div', 'review__top');
            top.appendChild(el('span', 'eyebrow', T('Client Review')));
            var stars = el('span', 'stars');
            stars.setAttribute('role', 'img');
            stars.setAttribute('aria-label', r.rating + ' / 5');
            for (var i = 1; i <= 5; i++) stars.appendChild(el('span', i > r.rating ? 'star star--off' : 'star'));
            top.appendChild(stars);

            var text = el('p', 'review__text', '“' + r.text + '”');

            var author = el('div', 'review__author');
            author.appendChild(el('span', 'review__avatar', initials(r.name)));
            var who = el('div', 'review__who');
            who.appendChild(el('span', 'review__name', r.name));
            who.appendChild(el('span', 'review__date',
                new Date(r.created_at || r.date).toLocaleDateString(window.I18N ? I18N.locale() : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })));
            author.appendChild(who);
            var tag = el('span', 'review__tag');
            tag.appendChild(el('span', 'icon icon--check-circle'));
            tag.appendChild(el('span', '', T('Direct Review')));
            author.appendChild(tag);

            li.appendChild(top); li.appendChild(text); li.appendChild(author);
            list.appendChild(li);
        });
        summary.textContent = (sum / items.length).toFixed(1) + ' / 5.0 · ' + items.length + ' ' +
            (window.I18N ? I18N.reviewsWord(items.length) : (items.length === 1 ? 'review' : 'reviews'));
    }

    function render() {
        getItems().then(function (items) { last = items; draw(items); }).catch(function () {
            emptyItem('Reviews could not be loaded right now.');
        });
    }

    function syncRating() {
        var c = form.querySelector('input[name="rating"]:checked');
        ratingOut.textContent = c ? parseInt(c.value, 10).toFixed(1) : '';
    }
    form.addEventListener('change', function (e) { if (e.target.name === 'rating') syncRating(); });
    form.addEventListener('reset', function () { setTimeout(syncRating, 0); });
    syncRating();

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
            if (okEl) { okEl.textContent = T('Thank you! Your review was sent.'); okEl.hidden = false; }
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

    document.addEventListener('langchange', function () {
        errorEl.hidden = true; if (okEl) okEl.hidden = true;
        if (last) draw(last); else render();
    });

    render();
})();
