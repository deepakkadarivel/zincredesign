$(document).ready(function() {
    $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 300) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });
});