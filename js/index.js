$(document).ready(function (){
    let slider = $("#quote__slider");
    let sliderTwo = $("#quote__slider__two");

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    let  header = $("#header");

    let slick = $(".slider");

    /* fixed */

    $(window).on("scroll  resize load", function () {
        introh = $("#intro").innerHeight();
        scrollpos = $(this).scrollTop();
        if ( scrollpos >= introh ) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed')
        }

    });


    /* removeClass on("scroll" */


    $(window).on("scroll", function (event) {
        event.preventDefault();

        nav.removeClass("show");

    });


    /* navToggle */

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /* slider */


    slider.slick({
        speed: 600,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false
    });

    sliderTwo.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    });

    slick.slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false

                }
            }
        ]
    });

    /* item addClass & removeClass*/




    function accordion(obj) {
        const titleClick = obj.titleClick,
            allContent = obj.allContent;
        $(titleClick).click(function () {
            let content = $(this).siblings(allContent);
            if (content.is(':visible')) {
                content.slideUp(); // убираем
                $(allContent).removeClass('active');
                $(this).removeClass('active');
                $(this)
                    .parents('.offcanvas__proxy-for-geo-select-multilevel')
                    .removeClass('active');
                $(this).children().removeClass('active'); //убираем активный класс у стрелки к примеру
            } else {
                content.slideDown(); //показываем
                $(titleClick).removeClass('active');
                $(allContent).removeClass('active');

                $(this).addClass('active');
                content.addClass('active');
                $(this)
                    .parents('.offcanvas__proxy-for-geo-select-multilevel')
                    .addClass('active');
                $(this).children().addClass('active'); //добавляем активный класс у стрекли к примеру
            }
            $(titleClick).not(this).siblings(allContent).stop(true, true).slideUp();
        });
    }
    accordion({
        titleClick: '.accordion .accordion__header'

    });

    /* item addClass & removeClass with toggleClass */

    $(".btn").on("click", function (event) {
        event.preventDefault();

        slick.toggleClass("show");
    });



    /* slider__addClass & removeClass*/

    let slider__item = $(".slider__item");
    $(".slider__item").on("click", function () {
        slider__item.removeClass("active")
        $(this).addClass("active")
    });






    /* scroll */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementid = $(this).data('scroll');

        let elementoffset = $(elementid).offset().top;

        $("html,body ").animate({
            scrollTop: elementoffset
        },1500);
    });


})






