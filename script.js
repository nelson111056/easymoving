
$(function(){

  // var H = $('.pic1').offset().top - 200;
  
  $(window).scroll(function(){
      var N = $(window).scrollTop();
      console.log(N);

      if(N > 2430){
          $('.ani2').animate({opacity:1},500);
      }

      if(N > 2000){
        $('.ani1').animate({opacity:1},500);
    }

    // if(N > 1200){
    //     $('.text3').animate({fontSize: '22'},500);
    // }



  })
})







