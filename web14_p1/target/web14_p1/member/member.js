function memberjs_onload() {
	$("#memberContent").load("member/memberList.html");
	
	document.body.addEventListener("newMember", function(event) {
		$("#memberContent").load("member/memberAdd.html");
	});
}