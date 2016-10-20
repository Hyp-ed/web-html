(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	closeOnClick: true
    });
    
    $(document).ready(function(){
      $('.carousel').carousel();
      $('.default-hide').hide();
    });

    jQuery(document).ready(function(){
        jQuery('#hideshowstatic').on('click', function(event) {        
             jQuery('#contentstatic').toggle('hidden')('show');
        });
        jQuery('#hideshowsmart').on('click', function(event) {        
             jQuery('#contentsmart').toggle('hidden')('show');
        });
    });

    $('.carousel.carousel-slider').carousel({full_width: true});

    $('.carousel').carousel('next');

  }); // end of document ready
})(jQuery); // end of jQuery name space