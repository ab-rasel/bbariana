/*
 Template Name: KingsThemes
 Description: HTML5 / BOOTSTRAP / CSS3 One Page
 Version: 1.0.0
 Author: Abdur Rahim(Rasel),Shagor
 */
/*
 one page responsive html5 template  table of content::
 1. fixed header.
 2. preloader
 3. Wow Animation
 4. mobile menu .
 5. revolation slider
 6. button effect
 7. collapse
 8. funfact
 9. portfolio  mix tab
 10. map
 11. back to top
 */
$(document).ready(function() {
    /***********************************
     // 01.    * fixed header
     //     ***********************************/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 90)
        {
            $(".Hmenu").addClass('fixedHeader');
        }
        else
        {
            $(".Hmenu").removeClass('fixedHeader');
        }

        /************ Menu Active on Scroll **********************/
        Scroll();

    });
    //========================
    // Loader
    //========================
    $(window).load(function() {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    //=========================
    // Wow Animation
    //========================
    var wow = new WOW ({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       120,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true        // act on asynchronously loaded content (default is true)
        }
    );
    wow.init();

    //  02. ==================moblie menu ===================
    $(".mobileMenu").on('click', function() {
        $(".headerMenu").slideToggle('slow');
        $(this).toggleClass('active');
    });

    //===========menu scroll=======

    $('.scrolls a').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
        return false;
    });
    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.headerMenu').find('.scrolls > a').each(function() {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function(i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.headerMenu li.scrolls')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        });

    }

//=========================
// 03.  Revolution Slider
//=========================

    $(".tp-banner").revolution({
        delay: 5000,
        startwidth: 1170,
        startheight: 750,
        startWithSlide: 0,
        fullScreenAlignForce: "off",
        navigationType: "bullet",
        navigationArrows: "on",
        navigationStyle: "round",
        touchenabled: "on",
        onHoverStop: "off",
        navOffsetHorizontal: 0,
        navOffsetVertical: 20,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "on",
        navigationVOffset: 35

    });

    // button efect======================
    $('.kings_btn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        });

    // 04. ============collapse============
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });

    // 05. =====================Funfact
    var skl = true;
    $('.funfactSec').appear();

    $('.funfactSec').on('appear', function() {
        if (skl)
        {
            $('.funfacts').each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')},
                    {
                        duration: 6000,
                        easing: 'swing',
                        step: function() {
                            var num = Math.ceil(this.Counter).toString();
                            if (Number(num) > 9999) {
                                while (/(\d+)(\d{3})/.test(num)) {
                                    num = num.replace(/(\d+)(\d{3})/, '');
                                }
                            }
                            $this.html(num);
                        }
                    });
            });
            skl = false;
        }
    });

    // 06.  mix tab----------
    $('#Grid').themeWar();

    //magnifici pop up
    $('.lense').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });

    //=======================================================
    // 07. Google map
    //=======================================================
    if ($('.map').length > 0) {
        var map;
        map = new GMaps({
            el: '.map',
            lat: 51.4584218,
            lng: -0.0813982,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            scrollwheel: false,
            zoom: 16,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        map.addMarker({
            lat: 51.4584218,
            lng: -0.0813982
        });
    }


    /*Back To Top Start*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $(".BackTo").fadeIn('slow');
        }
        else
        {
            $(".BackTo").fadeOut('slow');
        }

    });
    $("body, html").on("click", ".BackTo", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    /*Back To Top End*/
})