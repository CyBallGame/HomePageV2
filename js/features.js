$(document).ready(function () {
  var oldId = null;
  var maxWidth = 400;
  var maxHeight = 400;

  $(".tabs-controls__link").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("tabs-controls__link--active")) {
      return false;
    }

    var currentId = parseInt($(this).data("id"), 10);
    $(".tabs-controls__link--active").removeClass(
      "tabs-controls__link--active"
    );
    $(this).addClass("tabs-controls__link--active");

    $(".detail-feature-text").each(function (index) {
      if (index !== currentId - 1) {
        window.setTimeout(function () {
          $(".detail-feature-text").eq(index).removeClass("active");
        }, timing - index * 100);
      } else {
        window.setTimeout(function () {
          $(".detail-feature-text").eq(index).addClass("active");
        }, index * 100);
      }
    });

    if (currentId < oldId) {
      // item is hidden
      var timing = $(".card.hidden").length * 100;
      $(".card").each(function (index) {
        if (index > currentId - 1 || index == currentId - 1) {
          window.setTimeout(function () {
            $(".card").eq(index).removeClass("hidden");
          }, timing - index * 100);
        }

        if ($(window).width() > 1000) {
            window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxWidth - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
            }, index * 120);
        } else {
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
        }
      });
    } else {
      $(".card").each(function (index) {
        if (index < currentId - 1) {
          window.setTimeout(function () {
            $(".card").eq(index).addClass("hidden");
          }, index * 100);
        } else {
            if ($(window).width() > 1000) {
                window.setTimeout(function () {
                    $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("height", `${maxWidth - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
                }, index * 120);
            } else {
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
            }
        }
      });
    }

    oldId = currentId;
  });
});
