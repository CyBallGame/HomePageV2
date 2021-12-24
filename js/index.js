$(document).ready(function () {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        $("#image-cybloc").css({ display: "block" });
        $("#video-cybloc").css({ display: "none" });

        $("#light1-img").css({ display: "block" });
        $("#light1").css({ display: "none" });

        $("#light2-img").css({ display: "block" });
        $("#light2").css({ display: "none" });

        $("#light3-img").css({ display: "block" });
        $("#light3").css({ display: "none" });
    } else {
        $("#image-cybloc").css({ display: "none" });
        $("#video-cybloc").css({ display: "block" });

        $("#light1-img").css({ display: "none" });
        $("#light1").css({ display: "block" });

        $("#light2-img").css({ display: "none" });
        $("#light2").css({ display: "block" });

        $("#light3-img").css({ display: "none" });
        $("#light3").css({ display: "block" });
    }
})