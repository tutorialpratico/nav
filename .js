
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});


// Show #search-nav
$("#search-icon").click(function() {
 if ( $("#search-nav").css("display") === "none") {
  $("#alt-nav").css("display", "none")
  $("#sub-nav").css("display", "none")
 $( "#search-nav" ).slideDown( 200, function() {
   $("#search-nav").css("display", "flex");
   $("#main-wrapper").css("top", "100px");
    // Animation complete.
  });
 }
 else {
  $("#search-nav").css("display", "none");
  $("#main-wrapper").css("top", "50px");
 }
});

// Show #alt-nav
$("#menu-icon").click(function() {
 if ( $("#alt-nav").css("display") === "none") {
 $("#search-nav").css("display", "none");
 $("#sub-nav").css("display", "none");
 $( "#alt-nav" ).slideDown( 200, function() {
   $("#alt-nav").css("display", "flex");
   $(".main-menu").detach().appendTo('#alt-nav')
   $("#main-wrapper").css("top", "100px");
    // Animation complete.
  });
 }
 else {
  $("#alt-nav").css("display", "none");
  $("#sub-nav").css("display", "none");
  $("#search-nav").css("display", "none");
  $("#main-wrapper").css("top", "50px");
 }
});
