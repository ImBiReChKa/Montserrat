// ИИ: Claude написал эту функцию (подгоняет ширину надписей под макет). Запись №1 в README
(function () {
  function fit() {
    document.querySelectorAll(".fit").forEach(function (el) {
      var sec = el.closest("section");
      el.style.fontSize = "";
      var target = parseFloat(el.dataset.w) * sec.clientWidth;
      var actual = el.getBoundingClientRect().width;
      if (!actual) return;
      var base = parseFloat(getComputedStyle(el).fontSize);
      el.style.fontSize = (base * target / actual) / sec.clientWidth * 100 + "cqw";
    });
  }
  var run = function () { fit(); };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(run); else window.addEventListener("load", run);
  window.addEventListener("load", run);
})();
