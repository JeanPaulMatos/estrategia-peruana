/* --------------- HEADER EFFECT --------------- */
/* window.addEventListener('scroll', function () {

    let mainHeader = document.getElementById('main__header');
    let mainSocialHeader1 = document.getElementById('main__social__header1');
    let mainSocialHeader2 = document.getElementById('main__social__header2');

    if (window.pageYOffset > 728) {

        mainHeader.classList.add('main__header__scroll');
        mainSocialHeader1.setAttribute('class', 'main__social__scroll');
        mainSocialHeader2.setAttribute('class', 'main__social__scroll');

    } else {

        mainHeader.classList.remove('main__header__scroll');
        mainSocialHeader1.setAttribute('class', 'main__social__header');
        mainSocialHeader2.setAttribute('class', 'main__social__header');

    }

}); */



// PROPIEDADES MENU MOVIL

var propMenu = {

    burger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal-link')

}


// METODOS MENU MOVIL

var metMenu = {

    inicio: function () {

        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

        for(var i = 0; i < propMenu.elem_menu.length; i++) {

            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);

        }

    },

    toggleMenu: function () {

        if (propMenu.menu_activo == false) {

            propMenu.menu_activo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';

        } else {

            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');

        }

    },

    ocultarMenu: function () {

        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');

    }

}

metMenu.inicio();