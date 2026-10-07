// Aparición suave al hacer scroll (solo estético, no toca ninguna acción del sitio)
(function () {
    var els = document.querySelectorAll('.lc-reveal');

    if (!('IntersectionObserver' in window)) {
        els.forEach(function (e) { e.classList.add('is-in'); });
        return;
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) {
                en.target.classList.add('is-in');
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 });

    els.forEach(function (e) { io.observe(e); });
})();
