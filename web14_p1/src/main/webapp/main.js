window.onload = function () {
	$("#header").load("header.html");
	$("#sidebar").load("sidebar.html");
	$("#footer").load("footer.html");
	
	document.body.addEventListener("projectListAll", function (event) {
		$("#mainContent").load("project/project.html");
	});
};
