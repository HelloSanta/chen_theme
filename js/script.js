/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.
    $("#mobile-navigation").live("click", function(){
			
			var main=$("#main").css("position");
	
			if(main=="static")
			{
				$("#header").css({
					'position':'fixed',
					'top':'0px',
					'left':'0%',
					'width':"100%",
				});
				$(".header-divid").css({
					'position':'fixed',
					'top':'69px',
					'left':'0%',
					'width':"100%",
				});
				$("#main").css({
					'position':'fixed',
					'top':'95px',
					'left':'0%',
					'width':"100%",
				});
				$("#footer").css({
					'position':'fixed',
					'top':'1000px',
					'left':'280px',
					'width':"100%",
				});
				$("#mobile-nav").css("height",'auto');
				$("#mobile-nav").css("min-height",'900px');
				$("#mobile-nav .menu-block-mobile-web-site").css("display",'block');
				$("#mobile-nav").css("opacity",1);
				$("#main").animate({
				   'left':"280px"  
				}, { duration: 180, queue: false });
				$("#header").animate({
				   'left':"280px"  
				}, { duration: 180, queue: false });
				$(".header-divid").animate({
				   'left':"280px"  
				}, { duration: 180, queue: false });	
			}
			else
			{
				$("#main").animate({
				   'left':"0%"  
				}, { duration: 180, queue: false });
				$("#header").animate({
				   'left':"0%"  
				}, { duration: 180, queue: false });
				$("#header").css({
					'position':'static',
				});
				$(".header-divid").animate({
				   'left':"0%"  
				}, { duration: 180, queue: false });
				$(".header-divid").css({
					'position':'static',
				});

				$("#main").css({
					'position':'static',
				});
				$("#footer").css({
					'position':'static',
					'left':'0%',
				});
				$("#mobile-nav").css("height",0);
				$("#mobile-nav").css("min-height",'0px');
				$("#mobile-nav .menu-block-mobile-web-site").css("display",'none');
				$("#mobile-nav").css("opacity",0);
			}		
		});
		function slideshowResizer(){

       var slideheight = 0;

       $('.views-slideshow-cycle-main-frame-row').each(function(){

           slideheight = $(this).find('img').innerHeight();

           if(slideheight != 0){

               $('.views-slideshow-cycle-main-frame').css('height',slideheight+'px');

               return false;

           }

       });

    }
  }
};


})(jQuery, Drupal, this, this.document);
