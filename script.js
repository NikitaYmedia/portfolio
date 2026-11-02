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