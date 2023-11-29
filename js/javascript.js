$(".about-button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".about-area").offset().top,
    },
    "slow"
  );
});

$(".footer-logo").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".header_area").offset().top,
    },
    "slow"
  );
});

$(".project-button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".projects-area").offset().top,
    },
    "slow"
  );
});

$(document).ready(function () {
  $(".footer-logo, .navbar-brand").mouseover(function () {
    $(".logo-class").css("color", "#854fee");
  });
});

$(document).ready(function () {
  $(".footer-logo, .navbar-brand").mouseout(function () {
    $(".logo-class").css("color", "black");
  });
});

$(function () {
  $(document).click(function (event) {
    $(".navbar-collapse").collapse("hide");
  });
});
