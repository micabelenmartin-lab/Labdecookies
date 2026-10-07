// 1) Aparición suave de las secciones al hacer scroll
(function () {
  var els = document.querySelectorAll('.reveal');
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

// 2) Barra fija de compra: aparece al pasar el hero
(function () {
  var bar = document.getElementById('sticky-bar');
  var hero = document.getElementById('hero');
  if (!bar || !hero) return;
  function check() {
    var limit = hero.offsetTop + hero.offsetHeight - 120;
    bar.classList.toggle('is-visible', window.scrollY > limit);
  }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();
