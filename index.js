let track = document.getElementById('slideshowTrack');
let cards = document.querySelectorAll('.slideshow-card');
let cardWidth = cards[0].offsetWidth + 20; 

let currentIndex = 0;

function slideCards() {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0; 
  }
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

setInterval(slideCards, 1000);