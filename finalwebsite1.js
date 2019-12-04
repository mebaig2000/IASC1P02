var slideshows = document.querySelectorAll('[data-component="pg1imgs"]');

slideshows.forEach(initSlideShow);

function initSlideShow(pg1imgs) {

  var slides = document.querySelectorAll(`#${pg1imgs.id} [role="list"] .pg1slides`);

  var index = 0, time = 5000;
  slides[index].classList.add('active');

  setInterval( () => {
    slides[index].classList.remove('active');

    index++;

    if (index === slides.length) index = 0;

    slides[index].classList.add('active');

  }, time);
}
