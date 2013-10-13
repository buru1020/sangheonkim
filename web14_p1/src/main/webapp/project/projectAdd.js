function projectAddjs_onload() {
	$("#submit").onclick = function() {
		$.ajax("project/add.do", {
			type: "POST",
			data:{
				title: $("#title").value,
				content: $("#content").value,
				startDate: $("#startDate").value,
				endDate: $("#endDate").value,
				tag: $("#tag").value
			},
			success: function(result) {
				console.log(result);
				if (result.status === "success") {
					$("#projectContent").load("project/projectList.html");
				} else {
					console.log(result.data)
				}
			},
			error: function(message) {
				alert("프로젝트 추가 중 오류 발생!!");
			}
		});
	};
	
	$("#btnProjectList").onclick = function() {
		var event = new MouseEvent("projectListAll", {
			"view": window,
			"bubbles": true,
			"cancelabel": true
		});
		this.dispatchEvent(event);
	};
}