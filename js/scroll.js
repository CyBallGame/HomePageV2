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
          scrollTop: $(hash).offset().top,
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

$(window).scroll(function () {
  var top_of_element1 = $("#light1").offset().top;
  var bottom_of_element1 =
    $("#light1").offset().top + $("#light1").outerHeight();
  var top_of_element2 = $("#light2").offset().top;
  var bottom_of_element2 =
    $("#light2").offset().top + $("#light2").outerHeight();
  var top_of_element3 = $("#light3").offset().top;
  var bottom_of_element3 =
    $("#light3").offset().top + $("#light3").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).height();
  var top_of_screen = $(window).scrollTop();

  if (
    bottom_of_screen > top_of_element1 &&
    top_of_screen < bottom_of_element1
  ) {
    // The element is visible, trigger play click event
    $("#light1").trigger("play");
  } else {
    // The element is not visible, trigger pause click event
    $("#light1").trigger("pause");
  }

  if (
    bottom_of_screen > top_of_element2 &&
    top_of_screen < bottom_of_element2
  ) {
    // The element is visible, trigger play click event
    $("#light2").trigger("play");
  } else {
    // The element is not visible, trigger pause click event
    $("#light2").trigger("pause");
  }

  if (
    bottom_of_screen > top_of_element3 &&
    top_of_screen < bottom_of_element3
  ) {
    // The element is visible, trigger play click event
    $("#light3").trigger("play");
  } else {
    // The element is not visible, trigger pause click event
    $("#light3").trigger("pause");
  }
});
