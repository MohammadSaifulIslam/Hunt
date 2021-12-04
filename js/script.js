$(function(){
    // banner slider
    $('#banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        prevArrow: '<i class="fas fa-chevron-left prevarr"></i>' ,
        nextArrow: '<i class="fas fa-chevron-right nextarr"></i>' 
      });
              
      // portfolio venobox
      $('.venobox').venobox(); 

      // service slider
      $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 2000,
        arrows:true,
        vertical:true,
        verticalSwiping:true,
        centerMode:true,
        centerPadding:0,
        prevArrow: '<i class="fas fa-chevron-up arrow up"></i>' ,
        nextArrow: '<i class="fas fa-chevron-down arrow down"></i>' 
      });
      // counter 
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



})