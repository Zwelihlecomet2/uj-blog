const track = document.getElementById('slideshowTrack');
const cards = document.querySelectorAll('.slideshow-card');
const cardWidth = cards[0].offsetWidth + 20; // Width of each card + padding

let currentIndex = 0;

function slideCards() {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0; // Loop back to the start
  }
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Change cards every 3 seconds
setInterval(slideCards, 1000);