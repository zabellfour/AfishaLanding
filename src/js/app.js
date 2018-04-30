(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        var wow = new WOW(
            {
              boxClass:     'wow',   
              animateClass: 'animated', 
              mobile:       false,     
              live:         true,     
              scrollContainer: null 
            }
          );
          wow.init();
        //mob Nav
        function mobNav(opener, close) {
            let $opener = $(opener);
            let $close = $(close);
            let $body = $('body');
            $opener.on('click', function() {
                $body.toggleClass('nav-active');
            });
            $close.on('click', function() {
                $body.toggleClass('nav-active');
            });
        }
        mobNav('.menu-opener', '.menu-close');

        var scroll = new SmoothScroll('[data-scroll]');
        
        $(".bottom-slider").owlCarousel({
            items: 1,
            nav:true,
            dots:true,
            loop: true,
            center: true,
            autoHeight:true
        });
        let $common = $(".common-slider");
            $common.on('initialized.owl.carousel', function(event){ 
                setTimeout(function() {    $common.trigger('refresh.owl.carousel');  }, 500);
            });
        $common.owlCarousel({
            items: 1,
            nav:true,
            dots:false,
            loop: false,
            center: true,
            autoHeight:true,
            mouseDrag: false
        });
        $(".events-slider").owlCarousel({
            margin: 130,
            items: 1,
            stagePadding: 480,
            nav:true,
            dots:false,
            loop: true,
            center: true,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                    margin:10,
                    
                },
                480: {
                    items: 1,
                    stagePadding: 100,
                    margin: 25,
                  
                },
                768: {
                    items: 1,
                    stagePadding: 140,
                    margin: 30,
                
                },
                1024: {
                    stagePadding: 240,
                    margin: 40
                },
                1370: {
                    stagePadding: 370,
                    margin: 120
                },
                1500: {
                    margin:130,
                    stagePadding:400
                }
            }
        });
    });

})(jQuery);