<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<c:set var="contextPath"  value="${pageContext.request.contextPath}"  />

<%
  request.setCharacterEncoding("UTF-8");
%> 

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>노하우목록테스트</title>
</head>
<body>
	<table>
		<thead>
			<tr>
				<th>등록번호</th>
				<th>제목</th>
				<th>작성일</th>
				<th>수정</th>
				<th>삭제</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="knowhow" items="${knowhowList}">
				<td>${knowhow.know_num}</td>
				<td>${knowhow.know_title}</td>
		   		<td>${knowhow.know_creDate}</td>
		   		<td>
		   			<a href="#">수정</a>
		   		</td>
		   		<td>
		   			<a href="${contextPath}/knowhow/delete/${knowhow.know_num}">삭제</a>
		   		</td>
			</c:forEach>
		</tbody>
	   </table>
</body>
</html>