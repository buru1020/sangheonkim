<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<!-- Side Menu Start -->
	<aside class="side_menu_aside">
		<!-- 프로필 -->
		<div class="side_photo_div">
			<img  alt="photo" src="${rootPath}/res/photo/yk.jpg" class="side_menu_member_photo">
		</div>
		<div>
			<p>${member.name}<br>
			${member.email}<br>
			${member.tel}</p>
		</div>
		
		<!-- 참여프로젝트 -->
		<div style="margin-top: 20px">
			<span>참여 프로젝트</span>
			<span style="float: right;"><a href="/greenApple/project/list">전체보기</a></span>
		</div>
		<div>
			<ul>
<c:forEach var="projectEx" items="${projectList}">			
				<li><span><a href="javascript:clickProject(${projectEx.no})">${projectEx.title}</a></span><c:if test="${projectEx.level == 1}">★</c:if></li>
</c:forEach>				
			</ul>
		</div>
	</aside>
	<!-- Side Menu End -->