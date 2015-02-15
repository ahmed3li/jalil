//Fancybox
$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

//Clients carousel
$(document).ready(function() {
  $("#teammembers").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],   
    lazyLoad : true,
    navigation : true,
    autoPlay : false,
    pagination : false,
    navigationText : ["<span class='fui-arrow-left'></span>","<span class='fui-arrow-right'></span>"],
  });  
  $("#portfolio-items").owlCarousel({
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],   
    lazyLoad : true,
    navigation : false,
    autoPlay : true,
    pagination : true,    
  });      
});

//ScrollBar
$(document).ready(
  function() { 
    $("html").niceScroll();
     $("#thisdiv").niceScroll({cursorcolor:"#2e3e4e"});
  }
);

// Set options
var options = {
    offset: '#showHere',
    classes: {
        clone:   'banner--clone',
        stick:   'banner--stick',
        unstick: 'banner--unstick'
    }
};

// Initialise with options
var banner = new Headhesive('.topnav', options);

// Headhesive destroy
// banner.destroy();


//Builder
//$(".app-builder-sections").onepage_scroll({
//   sectionContainer: ".app-section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//   keyboard: true,                  // You can activate the keyboard controls
//   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                    // the browser's width is less than 600, the fallback will kick in.
//   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
//});

jQuery(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        } );
    } );
} );