/* Dynamic top menu positioning
 *
 */

var num = $('.parallax-1').height(); //number of pixels before modifying styles

$('#btnGuestMessage').on('click', guestMessage);

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

        $("body, html").animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 2000);

    });

});


$('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

// Add User
function guestMessage(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#guestMessage input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });
    $('#guestMessage textarea').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newMessage = {
            'name': $('#guestMessage  input#name').val(),
            'message': $('#guestMessage  textarea#message').val()
        }

        // Use AJAX to post the object to our guestMessage service
        $.ajax({
            type: 'POST',
            data: newMessage,
            url: '/users/guestMessage',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {
                alert('Thank you! We look forward to seeing you!');
                // Clear the form inputs
                $('#guestMessage  input').val('');
                $('#guestMessage  textarea').val('');


                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please make sure to fill in all the information');
        return false;
    }
};
