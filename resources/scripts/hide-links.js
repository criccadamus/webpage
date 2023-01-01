const streams = document.querySelector('.links');
const streamsTitle = document.querySelector('.links-title');

window.addEventListener('scroll', function() {
  const rect = streams.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    streamsTitle.style.visibility = 'hidden';
  } else {
    streamsTitle.style.visibility = 'visible';
  }
});
