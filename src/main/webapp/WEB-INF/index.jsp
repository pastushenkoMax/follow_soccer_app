<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/index_style.css">
<meta charset="ISO-8859-1">
<title>SRA</title>
</head>
<body>
<div class="container">
	<div class=>
		<div class="main_text">
			<h1>Follow Soccer</h1>
			<p>Leagues standing, live game results, statistic, upcoming matches</p>
		</div>
		<div class="action_text">
			<div class="top_action_text">
				<h3>Lets Start</h3>
				<img alt="arrow" src="images/arrow.png">
			</div>
			<ul id="table">
				<li><a href="/league/${39}">Premier League</a></li>
				<li><a href="/league/${140}">La Liga</a></li>
				<li><a href="/league/${135}">Serie A</a></li>
				<li><a href="/league/${78}">Bundesliga</a></li>
				<li><a href="/league/${61}">Ligue 1</a></li>
			</ul>
		</div>
	</div>
	<img alt="index_pic" src="/images/index_pic.jpg">
</div>
</body>
</html>