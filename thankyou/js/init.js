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
    $('#sub1').hover(
      function() { $('#welcome').show(); },
      function() { $('#welcome').hide(); }
    );
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
      $(".tocontact").click(function() {
        $('html, body').animate({
          scrollTop: $("#contact").offset().top
        }, 1000);
      });
      $(".tostatic").click(function() {
        $('html, body').animate({
          scrollTop: $("#static").offset().top
        }, 1000);
      });
      $(".todynamic").click(function() {
        $('html, body').animate({
          scrollTop: $("#dynamic").offset().top
        }, 1000);
      });
      $(".tosmart").click(function() {
        $('html, body').animate({
          scrollTop: $("#smart").offset().top
        }, 1000);
      });
      $(".tosponsorship").click(function() {
        $('html, body').animate({
          scrollTop: $("#sponsorship").offset().top
        }, 1000);
      });
      $(".tobusiness").click(function() {
        $('html, body').animate({
          scrollTop: $("#business").offset().top
        }, 1000);
      });


      $(".closeButton").click(function() {
        $('.fixed-action-btn').closeFAB();
      });
      $('.closeButtonHover').hover(
        function() { $('.fixed-action-btn').openFAB();; },
        function() { $('.fixed-action-btn').closeFAB();; }
        );

      $(".toggletext").click(function () {
            $(this).text(function(i, v){
               return v === 'Show fewer' ? 'Show more' : 'Show fewer'
            })
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
      jQuery('#hideshowbusiness').on('click', function(event) {        
       jQuery('#contentbusiness').toggle('hidden')('show');
     });
      jQuery('#hideshowsponsorship').on('click', function(event) {        
       jQuery('#contentsponsorship').toggle('hidden')('show');
     });
    });

    $('.carousel.carousel-slider').carousel({full_width: true});

    $('.carousel').carousel('next');

  }); // end of document ready
})(jQuery); // end of jQuery name space