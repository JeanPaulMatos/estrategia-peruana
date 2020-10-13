/* --------------- HEADER EFFECT --------------- */
window.addEventListener('scroll', function () {

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

});

