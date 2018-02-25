$(document).ready( function () {
function sliders() {
  // UI functionality
  console.log("hiii");
  $(".js-slider").click(function () {
    $(this).children(".js-info").slideToggle();
    $(this).children(".js-triangle").toggleClass("flip-h");
  });
}

sliders();
});
