define(['jquery','template'], function ($,template) {
    // 请求后台接口 获取列表数据
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function (data) {
            // 解析数据 并渲染页面
            var html = template('teacherTpl',{list : data.result});
            $('#teacherInfo').html(html);
        }
    });
});