(function($){
  $(function(){

    $('.button-collapse').sideNav({
    	closeOnClick: true
    });
    
    $(document).ready(function(){
      $('.carousel').carousel();
    });

    $('.carousel.carousel-slider').carousel({full_width: true});

    $('.carousel').carousel('next');

  }); // end of document ready
})(jQuery); // end of jQuery name space