
$('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.mobile-menu').toggleClass('menu-active');
    $('.mobile-menu__menu-header-wrap').toggleClass('menu-active');




});
$("ul").click(function(){
    $('.menu-btn').not(this).removeClass('menu-active');
    $('.mobile-menu').not(this).removeClass('menu-active');
    $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

});
$("button").click(function(){
    $('.menu-btn').not(this).removeClass('menu-active');
    $('.mobile-menu').not(this).removeClass('menu-active');
    $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

});
