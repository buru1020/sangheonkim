function projectjs_onload() {
	$("#projectContent").load("project/projectList.html");
	
	document.body.addEventListener("newProject", function(event) {
		$("#projectContent").load("project/projectAdd.html");
	});
}