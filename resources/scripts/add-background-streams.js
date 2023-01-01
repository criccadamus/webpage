const div = document.querySelector('.streams-title');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > div.offsetTop) {
    div.classList.add('is-fixed');
  } else {
    div.classList.remove('is-fixed');
  }
});