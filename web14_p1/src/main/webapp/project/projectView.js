function projectViewjs_onload() {
	onloadProjectView();

	$("#newProject").onclick = function() {
		var event = new MouseEvent("newProject", {
			"view": window,
			"bubbles": true,
			"cancelable": true
		});
		this.dispatchEvent(event);
	};
}

function onloadProjectView() {
	$.ajax("project/view.do?no=" + projectNo, {
		type: "GET",
		success: function(result) {
			console.log(result);
			if (result.status === "success") {
				
			} else {
				console.log(result.data);
			}
		}, 
		error: function(message) {
			alert("프로젝트 정보 가져오느 중 오류 발생!");
		}
	});
}