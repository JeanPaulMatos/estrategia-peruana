const popUp = document.querySelector('.popUp');
const close = document.querySelector('.popUp__container--close');

window.onload = function () {
  setTimeout(() => {
    popUp.style.visibility = 'visible';
    popUp.style.opacity = '1';
    popUp.style.transition = 'all .7s ease-in-out';
  }, 15000);
}

close.addEventListener('click', () => {
  popUp.style.visibility = 'hidden';
  popUp.style.opacity = '0';
  popUp.style.transition = 'all .5s ease-in-out';
})