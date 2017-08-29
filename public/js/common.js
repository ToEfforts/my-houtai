
NProgress.start();
NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});

// 实现退出功能
$('#logoutBtn').click(function () {
	$.ajax({
		type:'post',
		url:'/api/logout',
		dataType:'json',
		success : function (data) {
			if (data.code == 200){
				// success OK
				location.href = '/main/login';
			}
		}
	})
            console.log(123);
	return false;
});
