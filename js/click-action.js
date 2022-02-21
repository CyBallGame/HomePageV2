$(document).ready(function () {
  $("#hero-image-block").click(function () {
    $("#video-trailer").css({ display: "flex" });
  });
  $("#download-btn").click(function () {
    $("#down-load-modal-wrapper").css({ display: "flex" });
  });
  $("#download-btn-mobile").click(function () {
    $("#down-load-modal-wrapper").css({ display: "flex" });
  });


  $("#down-load-modal-overlay").click(function () {
    $("#down-load-modal-wrapper").css({ display: "none" });
  });

  $("#hide-trailer").click(function () {
    $('iframe').attr('src', $('iframe').attr('src'));
    $("#video-trailer").css({ display: "none" });
  });
  
  $("#frame-banner").click(function () {
    window.open('https://genesis.cyball.com/#/marketplace/cyblocs', '_blank');
  });
});
