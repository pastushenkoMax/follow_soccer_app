<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<script type = "text/javascript" src="/js/script.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<meta charset="ISO-8859-1">
<title>SRA</title>
</head>
<body onload="getTable(${league_id});getNextGames(${league_id});getLiveGames(${league_id});getTopScorers(${league_id});getTopAsissts(${league_id})">
<div class="header">
		<div class="logo"><a href="/"><img alt="logo" src="/images/2138356_ball_football_soccer_sport_icon.png"><h2>Follow Soccer</h2></a></div>
		<ul> 
			
			<li onclick="changeLeague(39)"><h2>PL</h2></li>
		  	<li onclick="changeLeague(140)"><h2>La Liga</h2></li>
		  	<li onclick="changeLeague(135)"><h2>Serie A</h2></li>
		  	<li onclick="changeLeague(78)"><h2>Bundesliga</h2></li>
		  	<li onclick="changeLeague(61)"><h2>Ligue 1</h2></li>
		</ul>
</div>
<div class="decals">
		<ul>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/o_2.png"></li>
		  <li><img alt="dec" src="/images/x_2.png"></li>
		  <li><img alt="dec" src="/images/x_2.png"></li>
		  <li><img alt="dec" src="/images/x_2.png"></li>
		  <li><img alt="dec" src="/images/x_2.png"></li>
		  <li><img alt="dec" src="/images/x_2.png"></li>
		  <li><img alt="dec" src="/images/x_2.png"></li>
		</ul>
</div>
<div class="container">
	<div class="bottom_header">
		<ul>
			<li id="table_standings" onclick="changeTable('Standings')">Standings</li>
		  	<li id="table_matches" onclick="changeTable('Matches')">Matches</li>
		  	<li id="table_stats" onclick="changeTable('Stats')">Stats</li>
		</ul>
	</div>
	<div class="skeleton_table" id="skeleton_table">
		<table>
			<tbody>
			  	<tr>
			    	<td><div class=skeleton>&nbsp;</div></td>
			  	</tr>
			  	<tr>
			    	<td><div class=skeleton>&nbsp;</div></td>
			  	</tr>
			  	<tr>
			    	<td><div class=skeleton>&nbsp;</div></td>
			  	</tr>			  	
			</tbody>
		</table>
	</div>
	<div class="table">
		<table class="standing_table" id="standing_table">
			<thead>
		    	<tr>
		    		<th></th>
				    <th>Club</th>
				    <th></th>
				    <th>MP</th>
				    <th>W</th>
				    <th>D</th>
				    <th>L</th>
				    <th>P</th>
				    <th>Last Games</th>
		    	</tr>
		  	</thead>
		  	<tbody id="body" >
			</tbody>
		<div class="watermark" id="watermark" style="display:none;"><img alt="logo" src="/images/watermark.png"></div>
		</table>
		<table class="right_border" style="display:none;" id="live_table">
			<thead>
			  	<tr>
			  		<th>Live</th>
			  	</tr>
			</thead>
			<tbody id="liveGamesTableBody">
			</tbody>
		</table>
		<table style="display:none;" id="next_games">
			<thead>
				<tr>
		  			<th colspan="4">Future Games</th>
		  		</tr>
		  	</thead>
		  	<tbody id="nextGamesTable">
			</tbody>
		</table>
		<table style="display:none;" id="score_stats" class="stats right_border">
			<thead>
				<tr>
			    	<th>#</th>
			    	<th>Player</th>
			    	<th></th>
			    	<th>Goals</th>
			  	</tr>
		  	</thead>
		  	<tbody id="topPlayerGoal">
		  	</tbody>
		</table>
		<table style="display:none;" id="asisst_stats" class="stats">
			<thead>
				<tr>
			    	<th>#</th>
			    	<th>Player</th>
			    	<th></th>
			    	<th>Asissts</th>
			  	</tr>
		  	</thead>
		  	<tbody id="topPlayerAsissts" >
		  	</tbody>
		</table>
	</div>
</div>


</body>
</html>