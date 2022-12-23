 /*SUBPAGINA IMAGENES*/

 var productThumb = new Swiper (".small-image", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
    481:{
        spaceBetween: 32,
    }
    }
});
var productNIG = new Swiper (".big-image", {
    loop: true,
    autoHeight: true,
    navigation: {
    nexEl: ".swiper-button-next",
    preEl: ".swiper-button-prev",
    },
    thumbs: {
    swiper: productThumb,
    }
})



