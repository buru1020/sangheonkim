
function sidebarjs_onload() {
	onloadMyInfo();
	onloadMyProjects();
	
	$("#projectListAll").onclick = function() {
		var event = new MouseEvent("projectListAll", {
			"view": window,
			"bubbles": true,
			"cancelabel": true
		});
		this.dispatchEvent(event);
	};
}

function onloadMyInfo() {
	$.ajax("auth/loginInfo.do", {
		type: "GET",
		success: function (result) {
			if (result.status == "success") {
				$("#name").innerHTML = result.data.name;
				$("#email").innerHTML = result.data.email;
				$("#tel").innerHTML = result.data.tel;
				$("#memberPhoto").setAttribute("src", "images/test01.png");
			} else {
				location.href = "auth/login.html";
			}
		},
		error: function(message) {
			alert("요청 처리중 오류 발생!");
		}
	});
}

function onloadMyProjects() {
	$.ajax("project/myprojects.do", {
		type: "GET",
		success: function (result) {
			if (result.status == "success") {
				var sectionProjects = $("#projects");
				for( var i in result.data) {
					var a = $("<a>");
					a.setAttribute("href", "project/view.do?no=" + result.data[i].no);
					a.innerHTML = result.data[i].title;
					if (result.data[i].level == 1) {
						a.innerHTML += "(PL)";
					}
					var article = $("<article>");
					article.appendChild(a);
					sectionProjects.appendChild(article);
				}
			} else {
				location.href = "auth/login.html";
			}
		},
		error: function(message) {
			alert("요청 처리중 오류 발생!");
		}
	});
}