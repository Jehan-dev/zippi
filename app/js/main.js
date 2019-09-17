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

})