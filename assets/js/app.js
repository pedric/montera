$(document).ready(function(){
  $('.hero-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });
});


var burger = document.getElementById('burger');
var menu = document.getElementById('nav-main');

var mobileMenuToggle = function() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
}

burger.addEventListener('click', function() {
  mobileMenuToggle();
});
