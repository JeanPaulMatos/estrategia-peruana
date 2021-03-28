window.addEventListener('load', function () {

    new Glider (document.querySelector('.testimonials__container--carousel'), {

        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.testimonials__indicators',
        rewind: true,
        duration: 0.6,
        arrows: {
            prev: '.testimonials__container--previous',
            next: '.testimonials__container--after'
        }

    });
    
});