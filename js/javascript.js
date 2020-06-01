$("nav-item about-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-area").offset().top},
        'slow');
});