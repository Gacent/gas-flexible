(function flexible(window, document) {
  window.initFlexible = function(design) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;
    var screenRatioByDesign = design ? design : 16 / 9;
    // adjust body font size
    function setBodyFontSize() {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + "px";
      } else {
        document.addEventListener("DOMContentLoaded", setBodyFontSize);
      }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
      var screenRatio = docEl.clientWidth / docEl.clientHeight;
      var fontSize =
        ((screenRatio > screenRatioByDesign
          ? screenRatioByDesign / screenRatio
          : 1) *
          docEl.clientWidth) /
        10;

      docEl.style.fontSize = fontSize.toFixed(3) + "px";
    }

    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("pageshow", function(e) {
      if (e.persisted) {
        setRemUnit();
      }
    });

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement("body");
      var testElement = document.createElement("div");
      testElement.style.border = ".5px solid transparent";
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add("hairlines");
      }
      docEl.removeChild(fakeBody);
    }
  };
})(window, document);
