import * as bootstrap from 'bootstrap'

// background colors
const bgRed = 'rgba(203, 0, 27, 1)'
const bgBlue = 'rgba(132, 191, 225, 1)'
const bgNeonGreen = 'rgba(179, 225, 64, 1)'

let myCarousel = document.getElementById('carouselExampleControls')
let body = document.getElementsByTagName('body')

myCarousel.addEventListener('slid.bs.carousel', e => {
  if (e.to == 2) {
    document.body.style.backgroundColor = bgNeonGreen
  };
  if (e.to == 1) {
    document.body.style.backgroundColor = bgBlue
  };
  if (e.to == 0) {
    document.body.style.backgroundColor = bgRed
  };

});
