function projectListjs_onload() {
	onloadProjectList();
	
	var trProjectArr = document.getElementsByName("trProject");
	for( var i = 0; i < trProjectArr.length; i++ ) {
		trProjectArr[i].onclick = function() {
			var event = new MouseEvent("projectView", {
				"view": window,
				"bubbles": true,
				"cancelable": true
			});
			event.projectNo = this.children[0].innerHTML;
			this.dispatchEvent(event);
		};
	}
	
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
		sync: false,
		success: function(result) {
			if (result.status === "success") {
				var projectList = result.data;
				for( var i in projectList) {
					$("#tableProjectList").innerHTML += 
							"<tr name='trProject'>" +
							"	<td>"+ projectList[i].no +"</td>" +
							"	<td>"+ projectList[i].title +"</td>" +
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