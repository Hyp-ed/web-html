(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	closeOnClick: true
    });

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 30) {
        $('.menu-button').fadeIn();
      } else {
        $('.menu-button').fadeOut();
      }
    });
    
    $(document).ready(function(){
      $('.carousel').carousel();
      $('.default-hide').hide();

      $(".tohome").click(function() {
        $('html, body').animate({
          scrollTop: $("#home").offset().top
        }, 1000);
      });
      $(".toabout").click(function() {
        $('html, body').animate({
          scrollTop: $("#about").offset().top
        }, 1000);
      });
      $(".toabout2").click(function() {
        $('html, body').animate({
          scrollTop: $("#about2").offset().top
        }, 1000);
      });
      $(".toteam").click(function() {
        $('html, body').animate({
          scrollTop: $("#team").offset().top
        }, 1000);
      });
    });

    jQuery(document).ready(function(){
      jQuery('#hideshowstatic').on('click', function(event) {        
       jQuery('#contentstatic').toggle('hidden')('show');
     });
      jQuery('#hideshowsmart').on('click', function(event) {        
       jQuery('#contentsmart').toggle('hidden')('show');
     });
      jQuery('#hideshowdynamic').on('click', function(event) {        
       jQuery('#contentdynamic').toggle('hidden')('show');
     });
    });

    $('.carousel.carousel-slider').carousel({full_width: true});

    $('.carousel').carousel('next');

  }); // end of document ready
})(jQuery); // end of jQuery name space