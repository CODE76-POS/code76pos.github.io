var top = $('#back-top');
top .hide();
 
        $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                        top .fadeIn();
                } else {
                        top .fadeOut();
                }
        });
        $('#back-top a').on('click', function(e) {
                $('body,html').animate({
                        scrollTop: 0
                }, 800);
                return false;
        });
 


});


})(jQuery);