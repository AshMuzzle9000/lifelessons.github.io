const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');

const releaseDate = new Date();
releaseDate.setHours(releaseDate.getHours() + 8);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = releaseDate.getTime() - now;

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hoursSpan.textContent = hours.toString().padStart(2, '0');
  minutesSpan.textContent = minutes.toString().padStart(2, '0');
  secondsSpan.textContent = seconds.toString().padStart(2, '0');

  if (distance <= 0) {
    clearInterval(countdown);
    hoursSpan.textContent = "00";
    minutesSpan.textContent = "00";
    secondsSpan.textContent = "00";
  }
}

const countdown = setInterval(updateCountdown, 1000);

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}