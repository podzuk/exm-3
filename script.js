$(document).ready(function(){
    var HeaderTop = $('#menu').offset().top;
    
    $(window).scroll(function(){
            if( $(window).scrollTop() > HeaderTop ) {
                    $('#menu').css({position: 'fixed', top: '0px'});
            } else {
                    $('#menu').css({position: 'static'});
            }
    });
});
$(".contacts__foto").click(function() {
        $(this)
          .next()
          .slideToggle(200);
      });
      
$(document).ready(function() {
$("#menu1").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
        top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 500);
});
});
$(document).ready(function() {
        $("#menu").on("click", "a", function(event) {
          event.preventDefault();
          var id = $(this).attr("href"),
            top = $(id).offset().top;
          $("body,html").animate({ scrollTop: top }, 1500);
        });
      });

$(".work__slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
});

$('.team__slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 500,
        adaptiveHeight: true,
        responsive: [
                {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
});