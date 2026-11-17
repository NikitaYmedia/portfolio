// Tiny Supabase REST client (no libraries). Used by the public site and by admin.html.
(function () {
    var cfg = window.SITE_CONFIG || {};
    var enabled = !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY);
    var base = (cfg.SUPABASE_URL || '').trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');

    function headers(token, extra) {
        var h = { apikey: cfg.SUPABASE_ANON_KEY, 'Content-Type': 'application/json' };
        // New-style keys (sb_publishable_...) are not JWTs and must only go in the apikey header.
        if (token) h.Authorization = 'Bearer ' + token;
        else if (/^eyJ/.test(cfg.SUPABASE_ANON_KEY)) h.Authorization = 'Bearer ' + cfg.SUPABASE_ANON_KEY;
        for (var k in extra) h[k] = extra[k];
        return h;
    }
    function check(res) {
        if (!res.ok) { var e = new Error('HTTP ' + res.status); e.status = res.status; throw e; }
        return res;
    }

    window.ReviewsAPI = {
        enabled: enabled,
        list: function (token) {
            return fetch(base + '/rest/v1/reviews?select=id,name,rating,text,created_at,approved&order=created_at.desc&limit=200',
                { headers: headers(token) }).then(check).then(function (r) { return r.json(); });
        },
        add: function (review) {
            return fetch(base + '/rest/v1/reviews', {
                method: 'POST', headers: headers(null, { Prefer: 'return=minimal' }), body: JSON.stringify(review)
            }).then(check);
        },
        remove: function (token, id) {
            return fetch(base + '/rest/v1/reviews?id=eq.' + encodeURIComponent(id),
                { method: 'DELETE', headers: headers(token) }).then(check);
        },
        approve: function (token, id) {
            return fetch(base + '/rest/v1/reviews?id=eq.' + encodeURIComponent(id),
                { method: 'PATCH', headers: headers(token), body: JSON.stringify({ approved: true }) }).then(check);
        },
        login: function (email, password) {
            return fetch(base + '/auth/v1/token?grant_type=password', {
                method: 'POST', headers: headers(null), body: JSON.stringify({ email: email, password: password })
            }).then(check).then(function (r) { return r.json(); });
        }
    };
})();