<%@page import="net.bitacademy.java41.vo.ProjectEx"%>
<%@page import="net.bitacademy.java41.vo.Member"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:useBean id="member" class="net.bitacademy.java41.vo.Member" scope="session"></jsp:useBean>
<jsp:useBean id="projectList" type="java.util.ArrayList<ProjectEx>" scope="session"></jsp:useBean>


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="utf-8">
<title>Sign up for Green Apple account</title>
<link rel="icon" type="image/png" href="../res/logo_sim.png">
	
<link rel="stylesheet" href="/greenApple/css/signup_1.css" type="text/css" />
<link rel="stylesheet" href="/greenApple/css/signup_2.css" type="text/css" />

<style type="text/css">
/* container */
#container {
	margin: 0 auto;
	min-height: 100%;
	padding: 0 0 140px;
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 140px;
	padding-left: 0px;
	width: 980px;
}

/* side_menu */
.side_menu_aside {
	float: left;
	/*padding: 20px 0 0 2px;*/
	position: relative;
	width: 200px;
	word-wrap: break-word;
	margin-top: 20px;
	margin-left: 10px;
	margin-rigth: 20px;
	margin-bottom: 10px;
/*	padding-top: 10px;
	padding-left: 5px;
	padding-rigth: 10px;
	padding-bottom: 10px;
*/
}
.side_photo_div {
	display: table;
	margin-left: auto;
	margin-right: auto;
}
.side_menu_member_photo {
	width: 170px;
	height: 170px;
}


/* content */
.main_content_section {
	float: left;
	width: auto;
	height: auto;
	margin-top: 20px;
	margin-left: 20px;
	margin-rigth: 10px;
	margin-bottom: 10px;
/*	padding-top: 10px;
	padding-left: 5px;
	padding-rigth: 10px;
	padding-bottom: 10px;
*/
}

.main_video {
	width: 100%; 
	height: auto; 
	vertical-align: top;
}

</style>

<script type="text/javascript">
function clickProject(no) {
	var prams = "?no=" + no;
	location.href="/greenApple/project/detail" + prams;
}
</script>

</head>


<body class="production workflow-layout">

<!-- Header Start -->
<header id="header" role="banner" class="header_navi">
	<nav class="aui-header aui-dropdown2-trigger-group"
		role="navigation">
		<div class="aui-header-inner">
			<div class="aui-header-primary">
				<h1 class="aui-header-logo aui-header-logo-bitbucket logged-out">
					<a href="/greenApple/main" class="aui-nav-imagelink" id="logo-link"> <span
						class="aui-header-logo-device">Green Apple</span>
					</a>
				</h1>
				<ul role="menu" class="aui-nav">
					<li><a href="#"> Feed </a></li>
					<li><a href="#"> Project </a></li>
				</ul>
			</div>
			<div class="aui-header-secondary">
				<ul role="menu" class="aui-nav">
					<li id="user-options"><a href="/greenApple/auth/logout" class="aui-nav-link login-link">Log out</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<!-- Header End -->


<!-- Container Start -->
<div id="container">
	
	<!-- Side Menu Start -->
	<aside class="side_menu_aside">
		<!-- 프로필 -->
		<div class="side_photo_div">
			<img  alt="photo" src="./res/photo/yk.jpg" class="side_menu_member_photo">
		</div>
		<div>
			<p><%=member.getName() %><br>
			<%=member.getEmail() %><br>
			<%=member.getTel() %></p>
		</div>
		
		<!-- 참여프로젝트 -->
		<div style="margin-top: 20px">
			<span>참여 프로젝트</span>
			<span style="float: right;"><a href="/greenApple/project/list">전체보기</a></span>
		</div>
		<div>
			<ul>
<%	if (projectList.size() > 0) {
		for( ProjectEx p : projectList ) { %>			
				<li><span><a href="javascript:clickProject(<%=p.getNo() %>)"><%=p.getTitle() %></a></span><% if (p.getLevel() == 1) { %>★<% } %></li>
				
<%		}
	} else { %>
				<li><span>없음</span></li>
<%	} %>				
			</ul>
		</div>
	</aside>
	<!-- Side Menu End -->
	
	<!-- Section Start -->
	<section class=main_content_section>
		<div>
			<video autoplay="autoplay" loop="loop" class="main_video">
				<source src="res/What Most Schools Don't Teach.mp4">
			</video>
		</div>
	</section>
	<!-- Section End -->
	
	



</div>
<!-- Container End -->

</body>
</html>
