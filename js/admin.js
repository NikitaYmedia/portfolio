/* Reviews admin — moderation panel (Supabase) */
(function () {
    var API = window.ReviewsAPI, TK = 'admin_token';
    var $ = function (id) { return document.getElementById(id); };
    var token = null;
    try { token = sessionStorage.getItem(TK); } catch (_) { }

    if (!API || !API.enabled) {
        $('notice').textContent = 'Supabase is not configured yet. Fill in js/config.js first.';
        $('notice').hidden = false; return;
    }

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text !== undefined) n.textContent = text;
        return n;
    }

    function logout() {
        token = null; try { sessionStorage.removeItem(TK); } catch (_) { }
        $('panel').hidden = true; $('login').hidden = false;
    }
    function fail(err) {
        if (err && (err.status === 401 || err.status === 403)) {
            logout(); $('login-error').textContent = 'Session expired. Please log in again.'; $('login-error').hidden = false;
        } else alert('Something went wrong. Please try again.');
    }

    function row(r) {
        var li = el('li', 'review');
        var head = el('div', 'review__head');
        var name = el('span', 'review__name', r.name);
        if (!r.approved) name.appendChild(el('span', 'badge-pending', 'Pending'));
        var stars = el('span', 'stars');
        stars.setAttribute('role', 'img');
        stars.setAttribute('aria-label', r.rating + ' / 5');
        for (var i = 1; i <= 5; i++) stars.appendChild(el('span', i > r.rating ? 'star star--off' : 'star'));
        head.appendChild(name); head.appendChild(stars);
        var text = el('p', 'review__text', r.text);
        var date = el('span', 'review__date', new Date(r.created_at).toLocaleString('en-GB'));
        var act = el('div', 'review-actions');
        if (!r.approved) {
            var ok = el('button', '', 'Approve'); ok.type = 'button';
            ok.onclick = function () { API.approve(token, r.id).then(load).catch(fail); };
            act.appendChild(ok);
        }
        var del = el('button', 'danger', 'Delete'); del.type = 'button';
        del.onclick = function () { if (confirm('Delete this review permanently?')) API.remove(token, r.id).then(load).catch(fail); };
        act.appendChild(del);
        li.appendChild(head); li.appendChild(text); li.appendChild(date); li.appendChild(act);
        return li;
    }

    function load() {
        API.list(token).then(function (rows) {
            $('login').hidden = true; $('panel').hidden = false;
            $('count').textContent = rows.length + (rows.length === 1 ? ' review' : ' reviews');
            var ul = $('admin-list'); ul.textContent = '';
            if (!rows.length) ul.appendChild(el('li', 'reviews-empty', 'No reviews yet.'));
            rows.forEach(function (r) { ul.appendChild(row(r)); });
        }).catch(fail);
    }

    $('login').addEventListener('submit', function (e) {
        e.preventDefault();
        API.login($('email').value.trim(), $('password').value).then(function (d) {
            token = d.access_token; try { sessionStorage.setItem(TK, token); } catch (_) { }
            $('login-error').hidden = true; $('password').value = ''; load();
        }).catch(function () { $('login-error').textContent = 'Wrong email or password.'; $('login-error').hidden = false; });
    });
    $('logout').addEventListener('click', logout);

    if (token) load(); else $('login').hidden = false;
})();
