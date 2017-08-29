define(['jquery','cookie'], function ($) {
    // 实现登录功能
    $('#loginBtn').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),
            dataType:'json',
            success : function (data) {
                if (data.code == 200){
                    // 存储用户信息到 cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{ path : '/' });
                    // 登录 成功
                    location.href = '/main/index';
                }else{
                    alert('用户名或密码错误');
                }
            }
        })
//          console.log(123);
        return false;
    });
})
