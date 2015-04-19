/* Dynamic top menu positioning
 *
 */

var num = $('.jumbotron').height(); //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.custom-nav ').addClass('fixed');
    } else {
        $('.custom-nav ').removeClass('fixed');
    }
});
