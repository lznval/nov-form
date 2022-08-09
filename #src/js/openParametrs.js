$('.form-parametrs').hide();
$('.form-main__settings-parametrs').click(function (e) { 
    e.preventDefault();
    if($(this).hasClass('show')) {
        $(this).html('Дополнительные параметры');
        $(this).removeClass('show');
        $('.form-parametrs').hide();
        $(".form-main__settings-reset, .form-main__settings-count, .form-main__settings-map, .form-main__settings-submit").show();

    } else {
        $(this).html('Скрыть дополнительные параметры');
        $('.form-parametrs').show();
        $(this).addClass('show');
        $(".form-main__settings-reset, .form-main__settings-count, .form-main__settings-map, .form-main__settings-submit").hide();
    }    
});