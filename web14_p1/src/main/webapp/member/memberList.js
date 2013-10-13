function memberListjs_onload() {
	$("#newㅡember").onclick = function() {
		var event = new MouseEvent("newMember", {
			"view": window,
			"bubbles": true,
			"cancelabel": true
		});
		this.dispatchEvent(event);
	};
}