$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".menu-item").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset()?.top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
  var firstPlay1 = 0;
  var firstPlay2 = 0;
  var firstPlay3 = 0;
$(window).scroll(function () {
  
  var top_of_element1 = $("#banner").offset().top;
  var bottom_of_element1 =
    $("#banner").offset().top + $("#banner").outerHeight();
  var top_of_element2 = $("#content-cybloc").offset().top;
  var bottom_of_element2 =
    $("#content-cybloc").offset().top + $("#content-cybloc").outerHeight();
  var top_of_element3 = $("#content-eco").offset().top;
  var bottom_of_element3 =
    $("#content-eco").offset().top + $("#content-eco").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).height();
  var top_of_screen = $(window).scrollTop();

  if (
    bottom_of_screen > top_of_element1 &&
    top_of_screen < bottom_of_element1 && firstPlay1 < 1
  ) {
    $("#light1").trigger("play");
    firstPlay1++;
  } else {
  }

  if (
    bottom_of_screen > top_of_element2 &&
    top_of_screen < bottom_of_element2 && firstPlay2 < 1
  ) {
    $("#light2").trigger("play");
    firstPlay2++;
  } else {
  }

  if (
    bottom_of_screen > top_of_element3 &&
    top_of_screen < bottom_of_element3 && firstPlay3 < 1
  ) {
    $("#light3").trigger("play");
    firstPlay3++
  } else {
  }
});
