let totalScenes = $('.scene').length;

let sceneHeight = $('.scene').height();

$('.scene').each(function(index) {
    let sceneNum = index + 1;
    let sceneTop = index - 1;
    let hslcalc = (totalScenes * 15 - index * 15);

    $(this).find('.num h2').text(sceneNum);


    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $('#button' + index).click(function() {
        $("html, body").animate({ scrollTop: $("#scene" + index).offset().top }, );

    });

    $(".home").click(function() {
        $("html, body").animate({ scrollTop: $("#start").offset().top }, );

    });

    $(window).on('resize scroll', function() {

        if ($("h2").isInViewport()) {
            $(".home").addClass("hidden");
        } else {
            $(".home").removeClass("hidden");
        }
    });

});