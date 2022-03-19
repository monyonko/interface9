$(document).ready(function(){
  
    $('.nextBtn').on('click', function(){
        const currentImage =$('.active');
        const firstImage =  $('.carousel2 > .slide:first')
        const nextImage = currentImage.next()

        if(nextImage.length){
            currentImage.removeClass('active').css('z-index', -10);
            nextImage.addClass('active').css('z-index', 10);
        }
        else{
            currentImage.removeClass('active').css('z-index', -10);
            firstImage.addClass('active').css('z-index', 10);
        }
        

    });
    $('.prevBtn').on('click', function(){
        const currentImage =$('.active');
        const prevImage = currentImage.prev()

        if(prevImage.length){
            currentImage.removeClass('active').css('z-index', -10);
            prevImage.addClass('active').css('z-index', 10);
        }
    });
   
    // $('.carousel2').animate({
    //     'left': '-500vw'
    // },2000, function(){
    //     $('.carousel2 img').eq(0).remove().appendTo('.carousel2');
    //     $('.carousel2').css({
    //         'left':0
    //     });
    // });
   
    
})