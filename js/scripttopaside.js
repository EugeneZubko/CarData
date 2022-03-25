$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#up2').fadeIn();
        } else {
            $('#up2').fadeOut();
        }
    });
    $('#up2').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});