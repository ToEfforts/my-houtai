define(['jquery','template','util'], function ($,template,util) {
    // 获取导航菜单
    util.setMenu('/course/add');
    // 获取课程id
    var csId  =util.qs('cs_id');
    // 添加和编辑的标志位
    var flag = util.qs('flag');
    // 无论添加还是编辑课程都要先查询课程信息
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : { cs_id : csId },
        dataType : 'json',
        success : function (data) {
            // 解析数据 渲染页面
            if (flag != '1'){
                // 编辑操作(根据课程ID 查询课程详细信息从而填充页面表单)
                data.result.operate = '课程编辑';
                var html = template('basicTpl',data.result);
                $('#basicInfo').html(html);
            }else{
                // 添加操作
                data.result.operate = '课程添加';
                var html = template('basicTpl',data.result);
                $('#basicInfo').html(html);
            }
        }
    });
})