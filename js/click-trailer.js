$(document).ready(function () {
  $("#hero-image-block").click(function () {
    $("#video-trailer").css({ display: "flex" });
  });

  $("#hide-trailer").click(function () {
    $('iframe').attr('src', $('iframe').attr('src'));
    $("#video-trailer").css({ display: "none" });
  });
});
