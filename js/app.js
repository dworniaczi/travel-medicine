$(document).ready(function(){
    $(".certificate-link").click(function(){
        $(".container-certificate").slideToggle(800);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        $('.navigation').slideToggle(300);
    });
});

var btn = $('.btn');

btn.on('click', function() {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
    $('.navigation').slideToggle(300);
});