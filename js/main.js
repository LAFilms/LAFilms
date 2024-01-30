/*CÓDIGO SOBRE ANIMAÇÃO*/

const letterContainers = document.querySelectorAll('.letter-container');

setInterval(() => {
  letterContainers.forEach(container => {
    container.classList.add('spin');
    setTimeout(() => {
      container.classList.remove('spin');
    }, 5000)
  });
}, 10000);


window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('background-music');
  audio.volume = 0.04;
  audio.play();
});

