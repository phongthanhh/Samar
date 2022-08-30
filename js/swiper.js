var testimonial__thumbs = new Swiper('.testimonial__thumbs', {
    // Optional parameters
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: false,
    loop: true,
    speed: 3000

    // If we need pagination

});

var testimonial__comment = new Swiper('.testimonial__comment', {
    // Optional parameters
    spaceBetween: 10,
    autoplay: false,
    loop: true,
    speed: 3000,
    thumbs: {
        swiper: testimonial__thumbs
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }

});