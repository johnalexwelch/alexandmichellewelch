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
