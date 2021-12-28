$(window).scroll(function() {

    $('.section').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow+600) {
            $(this).addClass("is-inview");
        } else {
            // $(this).removeClass("is-inview");
        }

    });

});