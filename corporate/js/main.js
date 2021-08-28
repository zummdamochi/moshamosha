'use strict';

{

  $('.topImage').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const open = document.getElementById('open')
  const nav = document.querySelector('nav')
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
    open.classList.toggle('show');
  })
  
}