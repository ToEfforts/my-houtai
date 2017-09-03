define(['jquery'], function ($) {
    // 监控ajax 状态
    $(document).ajaxStart(function () {
        $('.overlay').show();
    });
    $(document).ajaxStop(function () {
        setTimeout(function () {
            $('.overlay').hide();
        },200)
    });
})