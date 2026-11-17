/* UI behaviour: menu, active link, reveal on scroll, clocks, project filters, page transition.
   No styles are written from here — JS only toggles classes / attributes defined in CSS. */
(function () {
    var root = document.documentElement;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* copyright */
    document.querySelectorAll('[data-copyright]').forEach(function (el) {
        el.textContent = '© ' + new Date().getFullYear() + ' Nikita Yeltsov.';
    });

    /* mobile menu */
    var header = document.querySelector('.header');
    var toggle = document.querySelector('.menu-toggle');
    if (header && toggle) {
        var setMenu = function (open) {
            header.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        };
        toggle.addEventListener('click', function () { setMenu(!header.classList.contains('is-open')); });
        document.querySelectorAll('.nav__link').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    }

    /* active nav link on the home page */
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    var spy = links.filter(function (a) { return /^(index\.html)?#/.test(a.getAttribute('href')); });
    if (spy.length && 'IntersectionObserver' in window && !document.querySelector('.nav__link[aria-current="page"]')) {
        var map = {};
        spy.forEach(function (a) { map[a.getAttribute('href').replace('index.html', '')] = a; });
        var setActive = function (hash) {
            spy.forEach(function (a) { a.classList.toggle('is-active', a === map[hash]); });
        };
        setActive('#projects');
        var seen = {};
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) { seen['#' + en.target.id] = en.isIntersecting; });
            var order = ['#contact', '#reviews', '#services', '#philosophy', '#projects'];
            for (var i = 0; i < order.length; i++) { if (seen[order[i]]) { setActive(order[i]); return; } }
            if (window.scrollY < window.innerHeight) setActive('#projects');
        }, { rootMargin: '-45% 0px -50% 0px' });
        Object.keys(map).forEach(function (h) { var s = document.querySelector(h); if (s) io.observe(s); });
    }

    /* reveal on scroll */
    if (!reduce && 'IntersectionObserver' in window) {
        var items = document.querySelectorAll('.work, .feature, .layer, .service, .section-head, .cta, .advisory, .card-form');
        var rv = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { en.target.classList.add('is-visible'); rv.unobserve(en.target); }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
        items.forEach(function (el) { el.classList.add('reveal'); rv.observe(el); });
    }

    /* footer clocks */
    var clocks = document.querySelectorAll('[data-clock]');
    if (clocks.length) {
        var tick = function () {
            clocks.forEach(function (el) {
                try {
                    el.textContent = new Intl.DateTimeFormat('en-GB', {
                        hour: '2-digit', minute: '2-digit', timeZone: el.getAttribute('data-clock'), timeZoneName: 'short'
                    }).format(new Date());
                } catch (_) { el.textContent = ''; }
            });
        };
        tick();
        setInterval(tick, 30000);
    }

    /* project filters (projects page) */
    var buttons = document.querySelectorAll('.filter');
    var works = document.querySelectorAll('#works .work');
    if (buttons.length && works.length) {
        var apply = function (key) {
            var n = 0;
            works.forEach(function (w) {
                var show = key === 'all' || w.getAttribute('data-category') === key;
                w.hidden = !show;
                if (show) { w.classList.toggle('work--reverse', n % 2 === 1); n++; }
            });
            buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === key ? 'true' : 'false'); });
        };
        buttons.forEach(function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); }); });
    }

    /* page transition between home and projects */
    var KEY = 'pt';
    if (root.classList.contains('pt-arrive')) {
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                root.classList.add('pt-reveal');
                setTimeout(function () { root.classList.remove('pt-arrive', 'pt-reveal'); }, 500);
            });
        });
    }
    document.querySelectorAll('a[data-transition]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            if (reduce || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            root.classList.add('pt-leave');
            try { sessionStorage.setItem(KEY, '1'); } catch (_) { }
            setTimeout(function () { location.href = a.href; }, 360);
        });
    });
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) root.classList.remove('pt-leave', 'pt-arrive', 'pt-reveal');
    });

    /* a missing profile photo should not leave a broken icon */
    document.querySelectorAll('.profile__photo').forEach(function (img) {
        img.addEventListener('error', function () { img.remove(); });
    });
})();
