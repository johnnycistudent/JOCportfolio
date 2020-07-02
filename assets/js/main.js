$(document).ready(function() {
    // Scrolls smoothly to About section when the Navbar "About Me" link is pressed
    $('#about-me-link').click(function() {
        $('html, body').animate({ scrollTop: $('.about-section').offset().top }, 1000);
    });

    // Scrolls smoothly to Portfolio section when the Navbar "Portfolio" link is pressed
    $('#portfolio-link').click(function() {
        $('html, body').animate({ scrollTop: $('.portfolio-section').offset().top }, 1000);
    });
    // Scrolls smoothly to Contact section when the Navbar "Contact" link is pressed
    $('.contact-me').click(function() {
        $('html, body').animate({ scrollTop: $('.contact-section').offset().top }, 1000);
    });

});