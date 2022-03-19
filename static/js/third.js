$(".carousel2 > img:gt(0)").hide();

setInterval(function() { 
  $('.carousel1 > img:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('.carousel1');
}, 3000);