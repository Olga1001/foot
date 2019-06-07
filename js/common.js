$(document).ready(function () {

    //'home' slider
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 0,
        direction: 'horizontal',
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            400: {
                slidesPerView: 1,
            }
        }
    });

    //'pay'
    var curentValue, totalValue;
    $('.arrow-up').click(function(){
        curentValue = $(this).parent().find('.pay-input-number').val();
        totalValue = +curentValue + 1;
        $(this).parent().find('.pay-input-number').val(totalValue);
    });
    $('.arrow-down').click(function(){
        curentValue = $(this).parent().find('.pay-input-number').val();
        totalValue = +curentValue - 1;
        if (totalValue  < 0) {
            totalValue  = 0
        }
        $(this).parent().find('.pay-input-number').val(totalValue);
    });

    //'pay' mask
    $(".pay-input-phone, .form-input-phone").mask('+(999)-99-99-9999');

    //'pay' btn form
    $(".form-one-btn").click(function (e) {
        e.preventDefault();
        $(".form-two").addClass('active');
        $(".form-one").addClass('hidden');

    });
    $(".form-two-btn").click(function (e) {
        e.preventDefault();
        $(".form-two").removeClass('active');
        $(".form-one").removeClass('hidden');
    });

});