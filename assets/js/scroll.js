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
/*
        // Scrollspy init
        new Gumshoe('.js-header .js-scroll', {
            navClass: 'is-active',
            offset: function () {
                return $('.js-header')[0].getBoundingClientRect().height;
            }
        });

        $header.find('.js-scroll').click(function () {
            $html.removeClass('nav-open');
            setTimeout(function () { $html.css('overflow', 'auto') }, 300)
        });

        $('.js-nav-trigger').click(function (e) {
            e.preventDefault();
            $html.toggleClass('nav-open');
        });

        $(document).click(function (e) {
           if ($html.hasClass('nav-open') && !$(e.target).closest('.header').length)
               $html.removeClass('nav-open');
        })
*/
    })();

    /*// Scroll to
    (function () {
        new SmoothScroll('.js-scroll', {
            updateURL: false,
            offset: function (anchor, toggle) {
                return 70;
            },
        });
    })();

    // Up
    $('.js-up').click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:0},0);
    });

    $('.js-replace').widthReplace();

    AOS.init({ once: true, duration: 600, offset: 0, disable: 'mobile' });


    // Show more works
    $('.js-show-works').click(function (e) {
        e.preventDefault();
        $(this).hide();
        $('.js-hidden-works').removeClass('d-none')
    });

    // Works gallery
    (function () {
        $('.js-work').click(function (e) {
            e.preventDefault();
            var $this = $(this);
            var gallery = $this.data('gallery');
            var els = [];

            $('.js-work[data-gallery="' + gallery + '"]').each(function () {
               els.push({ src: $(this).attr('href') })
            });

            $this.lightGallery({
                dynamic: true,
                dynamicEl: els,
                //zoom: true,
                hideBarsDelay: 999999999,
                download: false,
                counter: false,
                mode: 'lg-soft-zoom'
            });
        });
    })();*/
});