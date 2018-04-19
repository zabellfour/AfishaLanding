(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
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
        var scroll = new SmoothScroll('[data-scroll]');
        mobNav('.menu-opener', '.menu-close');
        $(".events-slider").owlCarousel({
            margin: 120,
            items: 1,
            stagePadding: 500,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 150,
                    margin: 30
                },
                1024: {
                    stagePadding: 250,
                    margin: 60
                },
                1200: {
                    stagePadding: 400,
                    margin: 120
                },
                1500: {
                    margin: 120,
                    stagePadding: 500
                }
            }
        });
    });

})(jQuery);