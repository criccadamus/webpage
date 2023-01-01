var timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    var stickyDivs = document.querySelectorAll('.streams-title, .links-title');
    for (var i = 0; i < stickyDivs.length; i++) {
      var stickyDiv = stickyDivs[i];
      var stickyPosition = stickyDiv.offsetTop;
      if (window.pageYOffset >= stickyPosition) {
        stickyDiv.classList.add('sticky-fixed');
      } else {
        stickyDiv.classList.remove('sticky-fixed');
      }
    }
  }, 50);
});
