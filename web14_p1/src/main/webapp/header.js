function headerjs_onload() {
	$("#logout").onclick = function() {
		$.ajax("auth/logout.do", {
			type: "GET",
			success: function(result) {
				if (result.status === "success") {
					window.location.href = "auth/login.html";
				}
			}
		});
	};
}	