jQuery(function($) {
    (function () {
        SwiperProxy($('.js-reviews'), {
            dots: true,
            nav: true,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 30,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
        });
    })();

    // Header
    (function () {
        var $html = $('html');
        var $header = $(".js-header");
        var pos = $header.find('> *').first().offset().top;
        var $replace = $('<div>').insertBefore($header);
        function headerFixed() {
            var top = $(document).scrollTop();
            if (top && top > pos && !$header.hasClass('is-fixed')) {
                $replace.css('height', $header.outerHeight())
                $header.addClass('is-fixed');
            } else if (top <= pos && $header.hasClass('is-fixed')) {
                $replace.css('height', 0);
                $header.removeClass('is-fixed');
            }
        }

        $(window).scroll(headerFixed);
        headerFixed();
        $('.header-side-menu').click(function (e) {
            e.preventDefault();
            $html.toggleClass('nav-open');
        });
    })();

    (function () {
        function changeslides() {

        i++;
        if (i >= $images.length) {
        i = 0;}
        $slideshow.css('margin-left', (i * -100).toString() + 'vw');
        }
        var $images = $(".slideshow-image");
        var $slideshow = $('.slideshow');
        i = 0;
        setInterval(changeslides, 2000);
    })();
});