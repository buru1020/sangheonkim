function projectListjs_onload() {
	onloadProjectList();
	
	$("#newProject").onclick = function() {
		var event = new MouseEvent("newProject", {
			"view": window,
			"bubbles": true,
			"cancelabel": true
		});
		this.dispatchEvent(event);
	};
}

function onloadProjectList() {
	$.ajax("project/list.do",{
		type: "GET",
		success: function(result) {
			if (result.status === "success") {
				var projectList = result.data;
				for( var i in projectList) {
					$("#tableProjectList").innerHTML += 
							"<tr>" +
							"	<td>"+ projectList[i].no +"</td>" +
							"	<td><a href='project/view.do?no="+ projectList[i].no +"'>"+ projectList[i].title +"</a></td>" +
							"	<td>"+ projectList[i].startDate +"</td>" +
							"	<td>"+ projectList[i].endDate +"</td>" +
							"</tr>";
				}
			}
		},
		error: function(message) {
			alert("프로젝트 목록 가져오는 중 오류 발생!!");
		}
	});
}