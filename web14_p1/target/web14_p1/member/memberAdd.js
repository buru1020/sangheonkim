function memberAddjs_onload() {
	$("#newㅡember").onclick = function() {
		var event = new MouseEvent("newㅡember", {
			"view": window,
			"bubbles": true,
			"cancelabel": true
		});
		this.dispatchEvent(event);
	};
}