$(document).ready(function () {
    checkScroll();
    var typed = new Typed(".type", {
        strings: ["Muhammad Nabeel", "UI / UX Developer", "Front-End Developer", "Back-End Developer"],
        smartBackspace: true,
        typeSpeed: 20,
        loop: true,
        showCursor: false,
        backSpeed: 20,
        backDelay: 2000
    });

    $(window).scroll(function () {
        checkScroll();
    });

    $('#toggel-menu').on('click', function () {
        $('nav').toggleClass('slide');
        $('header').toggleClass('header-bg');
        $('.brand a').toggleClass('brand-color');
        $('#toggel-menu').toggleClass('toggel-menu-color');
    });
    $('nav ul li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 400, 'linear');
    });
});

function checkScroll(){
    if (window.pageYOffset > $('#about').offset().top / 2) {
        $('header').addClass('nav-dark');
        $('ul li a').addClass('nav-dark-link');
        $('#toggel-menu').css('color', 'black');
    }
    else {
        $('header').removeClass('nav-dark');
        $('ul li a').removeClass('nav-dark-link');
        $('#toggel-menu').css('color', 'white');
    }
}