new Swiper('.special-offers-slick',
    {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,

        pagination: {
            el: '.pagination-lines',
        },


        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev"
        },

        breakpoints:
        {
            1:
            {
                slidesPerGroup: 1,
                slidesPerView: 1,
            },
            522:
            {
                slidesPerGroup: 2,
                slidesPerView: 2,
            },
            800:
            {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
            1060:
            {
                slidesPerGroup: 4,
                slidesPerView: 4,
            },
            1331:
            {
                slidesPerGroup: 5,
                slidesPerView: 5,
            },
        }
    });
$(function () {
    $('.burger-menu').click(function () {
        $('.burger-menu').toggleClass('active');
        $('.menu').toggleClass('active');
        $('html').toggleClass('lock');

        if($('.burger-menu').hasClass('active') == true)
        {
            $('.burger-menu').removeClass('black');
        }
        else
        {
            burgerColor();
        }
    });

    burgerColor();
    $(window).scroll(function (e) {
        burgerColor();
    });

    function burgerColor() {
        var heightWindow = $(window).height();
        // 20px + 20px
        var heightScrolled = $(window).scrollTop();
        var boolHasActiveClass = $('.burger-menu').hasClass('active');

        if (boolHasActiveClass == false) {
            if (heightScrolled > (heightWindow)) {
                $('.burger-menu').addClass('black');
            }
            else {
                $('.burger-menu').removeClass('black');
            }
        }
        else
        {
            $('.burger-menu').removeClass('black');
        }
    };
});