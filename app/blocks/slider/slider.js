$(window).on('load', function () {
    $('.slider .owl-carousel').owlCarousel({
        nav: true,
        margin:30,
        items:1,
        loop: true,
        dots: false,
        navText: ['',''],
        navContainerClass: "slider__nav-btns",
        navClass: [
            'slider__nav-btn slider__nav-btn_prev',
            'slider__nav-btn slider__nav-btn_next'
        ],
        responsive:{
            991:{
                autoWidth: false
            },
            992:{
                autoWidth: true
            },
        }
    })
    $('.slider__slide').click(function(e){
        alert('click')
    })
})