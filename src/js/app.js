

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    //mob Nav
    function mobNav(opener){
      let $opener = $(opener);
      let $body = $('body');
      $opener.on('click', function(){
        $body.toggleClass('nav-active');
      });
    }

    mobNav('.menu-opener');
    
  });

})(jQuery);