$(function(){
    // botton to top btn operation

    $(".bottom-to-top").click(function(){
        $("body,html").animate({scrollTop:0},2000)
    });

    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll);
        if(scroll > 200){
            $(".bottom-to-top").fadeIn(500)
        }else{
            $(".bottom-to-top").fadeOut(500)
        }
       
        // fixed navbar operation

        if(scroll > 120){
            $(".nav").addClass("fixed")
        }else{
            $(".nav").removeClass("fixed") 
        }
        
    })
    // preloader operation start here 

    $(window).on("load",function(){
        $(".preloader-main").delay(2000).fadeOut(500)
    })

    // mixit up operation 

    var mixer = mixitup(".fitures", {
        selectors: {
            target: '.mix'
        },
        animation: {
            duration: 300
        }
    });

    // slick slider part start here 

    $('.testi-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        dots:true,
      });

    // aos start here

    AOS.init();
    
})


