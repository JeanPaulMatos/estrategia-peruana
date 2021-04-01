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
            , 
            
            {
                breakpoint: 413,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 412,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 411,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 410,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 409,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 408,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 407,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 406,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 405,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 404,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 403,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 402,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 401,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 400,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 399,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 398,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 397,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 396,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 395,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 394,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 393,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 392,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 391,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 390,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 389,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 388,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 387,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 386,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 385,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 384,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 383,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 382,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 381,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 380,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 379,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 378,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 377,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 376,
                settings: {
                    draggable: true,
                    slidesToShow: '1.25',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 375,
                settings: {
                    // draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 374,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 373,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 372,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 371,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 370,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 369,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 368,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 367,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 366,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 365,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 400,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 364,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 363,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 362,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 361,
                settings: {
                    draggable: true,
                    slidesToShow: '1.15',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            , 
            
            {
                breakpoint: 360,
                settings: {
                    draggable: true,
                    slidesToShow: '1.1',
                    // slidesToScroll: 'auto',
                    itemWidth: 450,
                }
            }
            

        ]

    });
    
});