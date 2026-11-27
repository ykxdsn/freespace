(function () {
  // Mermaid
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      themeVariables: { fontSize: '15px', fontFamily: "'PingFang SC','Microsoft YaHei','Noto Sans SC',sans-serif" },
      flowchart: { nodeSpacing: 26, rankSpacing: 30, padding: 12, useMaxWidth: true }
    });
  }

  // Reading progress
  var bar = document.getElementById('progress');
  function onScroll() {
    if (!bar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = p + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll spy
  var links = Array.prototype.slice.call(document.querySelectorAll('#toc a'));
  var sections = links.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  function setActive() {
    var pos = window.scrollY + 140;
    var idx = 0;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= pos) idx = i;
    }
    links.forEach(function (a, i) {
      a.classList.toggle('active', i === idx);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
