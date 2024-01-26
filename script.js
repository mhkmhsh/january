$(document).ready(function() {
	
	smoothScroll();
	
	// Animate menu using animate.css
	$('.navbar').addClass('animated bounceInDown');

	// Scroll event listen
	$(window).on('scroll', function(){
		updateNavigation();
	});
	
	$('.button-container, .switch-container').bind('touchstart mousedown', function(e){
	});
	
	// Update nav selected when click
	$('a').on('click', function() {
		console.log("haha");
		$('.nav-item').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	slideSwitch();
	
});

// Smooth the scroll action
function smoothScroll() {
	
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
}

// Update nav selected
function updateNavigation() {
	var lastId,
    topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
}