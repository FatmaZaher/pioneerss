$(document).ready(function () {
    'use strict'

    $('.menu-list .menu-item, .the-btn').click(function () {
        // $('.menu-holder').removeClass('open');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
    })


    $('.navbar .menu-icon').click(function () {
        $('.body-overlay').fadeIn();
        $('.mobile-navbar').animate({
            left: '0'
        }, 800)
        $('.body-overlay').animate({
            opacity: '1',
        }, 800)
    })
    $('.mobile-head .close-icon, .body-overlay, .menu-list .menu-item').click(function () {
        $('.mobile-navbar').animate({
            left: '-100%'
        }, 800)

        $('.body-overlay').animate({
            opacity: '0',
        })
        $('.body-overlay').fadeOut(800);
    })


    $('.our-work-filter-list ul li').click(function () {
        if ($(this).attr('rel')) {
            $('.items-vertical > div').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
        } else {
            $('.items-vertical > div').show();
        }

        return false;
    });

    $('.our-team .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        rtl: true,
        outplay: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            }

        }
    })
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        rtl: true,
        outplay: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 6
            }

        }
    })
    AOS.init({
        duration: 1500,
        once: true,
    });
})