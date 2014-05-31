
;(function($){
    $('.menu-icon').on('click', function(e){
        e.preventDefault();
        $('.menu-icon').parent('.site-nav').toggleClass('active');
    });
})(Zepto);