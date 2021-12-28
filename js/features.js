$(document).ready(function () {
  var oldId = 1;
  var maxWidth = 400;
  var maxHeight = 400;
  var maxWidthMobile = 350;
  var maxHeightMobile = 350;
  var maxWidthMobileSmall = 300;
  var maxHeightMobileSmall = 300;

  $(".tabs-controls__link").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("tabs-controls__link--active")) {
      return false;
    }

    let currentId = parseInt($(this).data("id"), 10);
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

        if ($(window).width() > 767) {
            window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeight - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
            }, index * 120);
        } else if ($(window).width() > 400) {
          window.setTimeout(function () {
            $(".card").eq(index).css("width", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("height", `${maxHeightMobile - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
          }, index * 120);
        } else {
          window.setTimeout(function () {
            $(".card").eq(index).css("width", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("height", `${maxHeightMobileSmall - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
          }, index * 120);
        }
      });
    } else {
      $(".card").each(function (index) {
        if (index < currentId - 1) {
          window.setTimeout(function () {
            $(".card").eq(index).addClass("hidden");
          }, index * 100);
        } else {
            if ($(window).width() > 767) {
                window.setTimeout(function () {
                    $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("height", `${maxHeight - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
                }, index * 120);
            } else if ($(window).width() > 400) {
              window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeightMobile - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
              }, index * 120);
            } else {
              window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeightMobileSmall - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
              }, index * 120);
            }
        }
      });
    }

    oldId = currentId;
  });

  $("#slider-feature-next").click(function (e) {
    e.preventDefault();

    let currentId = oldId + 1; 
    if (currentId > 6) {
      currentId = 1;
    }
    
    $(".tabs-controls__link--active").removeClass(
      "tabs-controls__link--active"
    );

    $(".tabs-controls__link").each(function (index) {
      console.log(index)
      if (index === currentId - 1) {
        $(".tabs-controls__link").eq(index).addClass(
          "tabs-controls__link--active"
        );
      }
    });

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

        if ($(window).width() > 767) {
            window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeight - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
            }, index * 120);
        } else if ($(window).width() > 400) {
          window.setTimeout(function () {
            $(".card").eq(index).css("width", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("height", `${maxHeightMobile - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
          }, index * 120);
        } else {
          window.setTimeout(function () {
            $(".card").eq(index).css("width", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("height", `${maxHeightMobileSmall - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
          }, index * 120);
        }
      });
    } else {
      $(".card").each(function (index) {
        if (index < currentId - 1) {
          window.setTimeout(function () {
            $(".card").eq(index).addClass("hidden");
          }, index * 100);
        } else {
            if ($(window).width() > 767) {
                window.setTimeout(function () {
                    $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("height", `${maxHeight - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
                }, index * 120);
            } else if ($(window).width() > 400) {
              window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeightMobile - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
              }, index * 120);
            } else {
              window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeightMobileSmall - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
              }, index * 120);
            }
        }
      });
    }

    oldId = currentId;
  })
  $("#slider-feature-prev").click(function (e) {
    e.preventDefault();

    let currentId = oldId - 1; 
    if (currentId < 1) {
      currentId = 6;
    }

    $(".tabs-controls__link--active").removeClass(
      "tabs-controls__link--active"
    );
    
    $(".tabs-controls__link").each(function (index) {
      if (index === currentId - 1) {
        $(".tabs-controls__link").eq(index).addClass(
          "tabs-controls__link--active"
        );
      }
    });

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

        if ($(window).width() > 767) {
            window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxHeight - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
            }, index * 120);
        } else if ($(window).width() > 400) {
          window.setTimeout(function () {
            $(".card").eq(index).css("width", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("height", `${maxHeightMobile - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
          }, index * 120);
        } else {
          window.setTimeout(function () {
            $(".card").eq(index).css("width", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("height", `${maxHeightMobileSmall - 10*(index - currentId + 1)}px`);
            $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
          }, index * 120);
        }
      });
    } else {
      $(".card").each(function (index) {
        if (index < currentId - 1) {
          window.setTimeout(function () {
            $(".card").eq(index).addClass("hidden");
          }, index * 100);
        } else {
            if ($(window).width() > 767) {
                window.setTimeout(function () {
                    $(".card").eq(index).css("width", `${maxWidth - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("height", `${maxHeight - 10*(index - currentId + 1)}px`);
                    $(".card").eq(index).css("transform", `translateX(${0 - 30*(index - currentId + 1)}px) translateY(0px)`);
                }, index * 120);
            } else if ($(window).width() > 400) {
              window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxWidthMobile - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
              }, index * 120);
            } else {
              window.setTimeout(function () {
                $(".card").eq(index).css("width", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("height", `${maxWidthMobileSmall - 10*(index - currentId + 1)}px`);
                $(".card").eq(index).css("transform", `translateX(0px) translateY(${0 - 30*(index - currentId + 1)}px)`);
              }, index * 120);
            }
        }
      });
    }

    oldId = currentId;
  })
});
