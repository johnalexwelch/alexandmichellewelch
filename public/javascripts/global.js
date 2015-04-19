/* Dynamic top menu positioning
 *
 */

var num = $('.parallax-1').height(); //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.custom-nav ').addClass('fixed');
    } else {
        $('.custom-nav ').removeClass('fixed');
    }
});

// Set the navigation to the active seciton
var $lis = $('li').click(function(e) {
    $lis.filter(".active").removeClass("active");
    $(this).addClass('active');
    e.preventDefault()
});


// Jumps to the section selected in the navigation
$(document).ready(function() {
    $(".jumper").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 2000);

    });
});

// Time line scroll
$(window).on('scroll', function(){
	$timeline_block.each(function(){
		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		}
	});
});
