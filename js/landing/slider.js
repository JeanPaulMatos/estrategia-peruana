// SLIDER JS
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
        
        ,

        responsive: [

            {
                breakpoint: 1152,
                settings: {
                    // slidesToShow: '3',
                    // slidesToScroll: '3',
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 350,
                    // draggable: false,
                    rewind: true,
                    duration: 0.6
                    
                }
            }
            
            , 
            
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 350,
                }
            }

            , 
            
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 350,
                }
            }

            , 
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 350,
                }
            }

            , 
            
            {
                breakpoint: 425,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 424,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 423,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 422,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 421,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 420,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 419,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 418,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 417,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 416,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 415,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 414,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }

        ]

    });
    
});