
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('opaque');
  } else {
    $('nav').removeClass('opaque');
  }
  });
  $('.navbar-toggler').click(function(){
    $('nav').addClass('opaque');
  });


particlesJS.load('test', './js/ps1.json', function() {
  console.log('callback - particles.js config loaded');
});
