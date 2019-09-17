$(function () {

    $('.header__inner').slick({
        arrows: false,
        dots: true,
    });
    
    $('.video__inner').slick({
        arrows:false,
        centerMode: true,
        centerPadding: '33%',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    })

    $('.life__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.life__nav',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    }),
    $('.life__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.life__inner',
        centerMode: true,
        focusOnSelect: true,
    });

})