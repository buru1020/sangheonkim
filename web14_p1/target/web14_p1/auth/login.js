window.onload = function () {
	$("#btnLogin").onclick = function () {
		$.ajax("login.do", {
			type: "POST",
			data: {
				email: $("#email").value,
				password: $("#password").value
			},
			success: function(result) {
				console.log(result);
				if (result.status == "success") {
					location.href = "../main.html";
				} else {
					alert("아이디 및 비밀번호 확인!!");
					$("#email").value =  "";
					$("#password").value =  "";
					$("#saveId").checked =  false;
				}
			},
			error: function(message) {
				alert("요청 처리 중 오류 발생!");
			}
		});
	};
	
};