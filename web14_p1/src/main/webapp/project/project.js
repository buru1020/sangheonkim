function projectjs_onload() {
	$("#projectContent").load("project/projectList.html");
	
	document.body.addEventListener("newProject", function(event) {
		$("#projectContent").load("project/projectAdd.html");
	});
	
	document.body.addEventListener("projectView", function(event) {
		console.log(event.projectNo);
		$("#projectContent").load("project/projectView.html?projectNo=" + event.projectNo);
	});
}