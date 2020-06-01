$(".about-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-area").offset().top},
        'slow');
});

$(".footer-logo").click(function() {
    $('html,body').animate({
        scrollTop: $(".header_area").offset().top},
        'slow');
});