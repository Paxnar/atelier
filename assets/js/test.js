jQuery(function($) {
    // Header
    (function () {
        var $html = $('html');
        var $header = $(".slideshow");
        var $pos = $header.find('> *').first()
        for (var i = 0; i < 10; i++) {
            $('<p style="font-size: 100px;">hi</p>').insertAfter($header);
        }
    })();
});