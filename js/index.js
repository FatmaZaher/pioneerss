$(document).ready(function () {
    'use strict'

    $('.menu-list .menu-item, .the-btn').click(function () {
        // $('.menu-holder').removeClass('open');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.whatsapp').css('display', 'flex')
        }
        else {
            $('.whatsapp').css('display', 'none')
        }

        if ($('.contact-us').scrollTop() == 0) {
            $(".contact-us-imgs").stop().animate({ "marginTop": "-100px" }, 1000)
        }

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
        $(this).addClass('active').siblings().removeClass('active');

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
const input = document.getElementById('phone')
if (input) {
    var iti = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (
                resp
            ) {
                var countryCode = resp && resp.country ? resp.country : "us";
                callback(countryCode);
            });
        },
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js", // just for formatting/placeholders etc
    });

    $("#phone").on("keyup", function () {
        const country = iti.getSelectedCountryData();
        const code = "+" + country.dialCode;
        const number = $(this).val();
        const fullNumber = $("#fullNumber");

        fullNumber.val(code + number);
    });

    var reset = function () {
        input.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        validMsg.classList.add("hide");
    };
    input.addEventListener("blur", function () {
        reset();
        if (input.value.trim()) {
            if (iti.isValidNumber()) {
                validMsg.classList.remove("hide");
            } else {
                input.classList.add("error");
                var errorCode = iti.getValidationError();
                errorMsg.innerHTML = errorMap[errorCode];
                errorMsg.classList.remove("hide");
            }
        }
    });

    // on keyup / change flag: reset
    input.addEventListener("change", reset);
    input.addEventListener("keyup", reset);
}
