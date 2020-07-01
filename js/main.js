$(function(){
    
  
    $(".sitemap").click(function(){
        $(".sitemap_box").fadeIn(300);
    });
    $('.sitemap_box h2').click(function(){
        $('.sitemap_box').fadeOut(300);
    });



    $('.lan button').click(function(){
        $('.lan ul').slideToggle();

        // $('.lan button').addClass('active');
     


    });




    $('.popup_close').click(function(){
        $('.popup').fadeOut();
        $('.popup_close').fadeOut();
    });
    $('.popup_open').click(function(){
        $('.popup').fadeIn();
        $('.popup_close').fadeIn ();
    });


    



    $('.bxslider').bxSlider({
        captions:false,
        //slideWidth:600,  //수정
        auto:true,
        autoControls:false,
        stopAutoOnclick:true,

      });
     

      $(".regular").slick({
        dots:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });


      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });


      $('.rolling').vTicker({   
        // 스크롤 속도(default: 700)  
        speed: 1000,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 3000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: false,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 4,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'  
      });  


      // var height =  $(".notice").height();
      // var num = $(".rolling li").length;
      // var max = height * num;
      // var move = 0;
      // function noticeRolling(){
      //   move += height;
      //   $(".rolling").animate({"top":-move},600,function(){
      //     if( move >= max ){
      //       $(this).css("top",0);
      //       move = 0;
      //     };
      //   });
      // };
      // noticeRollingOff = setInterval(noticeRolling,1000);
      // $(".rolling").append($(".rolling li").first().clone());


      //스크롤시 퀵메뉴 고정위치 바꾸기
    $(window).scroll(function(){
      if($(document).scrollTop()>=300){
        $('#quick').stop().animate({top:300},500);
        // $('#quick').show();
      }else{
        // $('#quick').fadeOut();
         $('#quick').stop().animate({top:600},500);
      }
    })
});