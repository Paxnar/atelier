jQuery(function($) {
    // Header
    (function () {
        var $html = $('html');
        var $header = $(".js-header");
        var $pos = $header.find('> *').first()
        for (var i = 0; i < 10; i++) {
        var $replace = $('<header style="font-size: 100px;">hi</header>').insertAfter($header);
        }
    })();
});