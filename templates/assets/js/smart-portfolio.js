$(document).ready(function (){
    $("#services-nav-link").click(function (){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 2000);
    });
});