function changeLeague(leagueId){
	getTable(leagueId);
	getLiveGames(leagueId);
	getNextGames(leagueId);
	getTopAsissts(leagueId);
	getTopScorers(leagueId);
}

function getTable(id){
	let urlEnd = "standings?season=2022&league="+id;
	let response = getDataFromApi(urlEnd);
	response.then(response => {
	let text = "";
	let position = 0;
	for (let i in response.response[0].league.standings[0]) {
		position ++;
		text +='<tr>'
		text += '<td>'+position+'</td>';
		text += '<td><img alt="logo" src="'+response.response[0].league.standings[0][i].team.logo+'"></td>';
	  	text += '<td>'+response.response[0].league.standings[0][i].team.name+'</td>';
	  	text += '<td>'+response.response[0].league.standings[0][i].all.played+'</td>';
	  	text += '<td>'+response.response[0].league.standings[0][i].all.win+'</td>';
	  	text += '<td>'+response.response[0].league.standings[0][i].all.draw+'</td>';
	  	text += '<td>'+response.response[0].league.standings[0][i].all.lose+'</td>';
	  	text += '<td>'+response.response[0].league.standings[0][i].points+'</td>';
	  	text += '<td>'+changeLettersToIcons(response.response[0].league.standings[0][i].form)+'</td>';
	  	text +='</tr>'
	}
		hideSkeleton();
		document.getElementById("body").innerHTML = text;
		loadImage();
	});
}

function getNextGames(id){
	let quantityOfGames = 10;
	let urlEnd = "fixtures?league="+id+"&next="+quantityOfGames;
	let response = getDataFromApi(urlEnd);
	response.then(response => {
	let text = "";
	let date;
	let round = "";
	for (let i in response.response) {
		date = new Date(response.response[i].fixture.date);
		round = getRoundNumber(response.response[i].league.round);
		console.log(round);
		text +='<tr>'
	  	text += '<td>'+'Round '+round+'</td>';
	  	text += '<td><ul>'+	  	
	  					'<li><img alt="logo" src="'+response.response[i].teams.home.logo+'"></li>'+
	  					'<li><img alt="logo" src="'+response.response[i].teams.away.logo+'"></li>'+
	  			'</ul></td>';
	  	text += '<td><ul>'+	  	
	  					'<li>'+response.response[i].teams.home.name+'</li>'+
	  					'<li>'+response.response[i].teams.away.name+'</li>'+
	  			'</ul></td>';		
	  	text += '<td><ul>'+	  	
	  					'<li>'+(date.getMonth()+1)+'/'+date.getDate()+'</li>'+
	  					'<li>'+date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
    })+'</li></ul></td>';
	  	text +='</tr>'
	}
		document.getElementById("nextGamesTable").innerHTML = text;
	});
}

function getLiveGames(id){
	let urlEnd = "fixtures?live=all&league="+id;
	let response = getDataFromApi(urlEnd);
	response.then(response => {
	let text = "";
	if(response.response.length == 0){
		text ='<tr><td>No games at this time</td></tr>'
	} else{
		for (let i in response.response) {
			text +='<tr>'
			if(response.response[i].fixture.status.short == "HT"){
				text += '<td>'+response.response[i].fixture.status.short+'</td>';
			}else{
		  		text += '<td>'+response.response[i].fixture.status.elapsed+'</td>';	
			}
		  	text += '<td><ul><li>'+response.response[i].goals.home+'</li>'+
		  					'<li>'+response.response[i].goals.away+'</li></ul></td>';
		  	text += '<td><ul><li><img alt="logo" src="'+response.response[i].teams.home.logo+'"></li>'+
		 					'<li><img alt="logo" src="'+response.response[i].teams.away.logo+'"></li></ul></td>';				
		  	text += '<td><ul><li>'+response.response[i].teams.home.name+'</li>'+
		 					'<li>'+response.response[i].teams.away.name+'</li></ul></td>';
		  	text +='</tr>'
	}
	}
		document.getElementById("liveGamesTableBody").innerHTML = text;
	});
}

function getTopScorers(id){
	let urlEnd = "players/topscorers?league="+id+"&season=2022";
	let response = getDataFromApi(urlEnd);
	response.then(response => {
	let text = "";
	let position = 0;
	for (let i in response.response) {
		position++;
		text += '<tr>'
		text += '<td>'+position+'</td>';
		text += '<td><img alt=""photo" src="'+response.response[i].player.photo+'"></td>';
	  	text += '<td>'+response.response[i].player.name+'</td>';
	  	text += '<td>'+response.response[i].statistics[0].goals.total+'</td>';
	  	text += '</tr>'
	}
		document.getElementById("topPlayerGoal").innerHTML = text;
	});
}

function getTopAsissts(id){
	let urlEnd = "players/topassists?league="+id+"&season=2022";
	let response = getDataFromApi(urlEnd);
	response.then(response => {
	let text = "";
	let position = 0;
	for (let i in response.response) {
		position++;
		text += '<tr>'
		text += '<td>'+position+'</td>';
		text += '<td><img alt=""photo" src="'+response.response[i].player.photo+'"></td>';
	  	text += '<td>'+response.response[i].player.name+'</td>';
	  	text += '<td>'+response.response[i].statistics[0].goals.assists+'</td>';
	  	text += '</tr>'
	}
		document.getElementById("topPlayerAsissts").innerHTML = text;
	});
}

function changeTable(tableName){
	let x = document.querySelectorAll("table");
	let i = document.getElementById("watermark");
	i.style.display = "none";
	x.forEach(element => element.style.display = "none");
	if(tableName == "Standings"){
		document.getElementById("standing_table").style.display = "";
		document.getElementById("watermark").style.display = "";
	} else if (tableName == "Matches"){
		document.getElementById("live_table").style.display = "";
		document.getElementById("next_games").style.display = "";
	} else {
		document.getElementById("score_stats").style.display = "";
		document.getElementById("asisst_stats").style.display = "";
	}
	
}
function changeLettersToIcons(s){
	let temp_s = reverseString(s);
	let icon_temp_s = "";
	for(let i = 0; i < 5; i++){
		if(temp_s[i] == 'W'){
			icon_temp_s += '<img alt="win" src="/images/win_ic.png">';
		} else if(temp_s[i] == 'L'){
			icon_temp_s += '<img alt="win" src="/images/lost_ic.png">';
		} else{
			icon_temp_s += '<img alt="win" src="/images/draw_ic.png">';
		}		
	}
	return icon_temp_s;
}
function reverseString(s) {
    return s.split("").reverse().join("");
}

function getDataFromApi(urlEnd){
	const options = {
	method: 'GET',
	headers: {
		//api key
		//api host
	}
};

	let response = fetch('https://api-football-v1.p.rapidapi.com/v3/'+urlEnd, options)
	.then(response => response.json())
	.catch(err => console.error(err));
	return response;
}
function loadImage() {
	document.getElementById("watermark").style.display = "";
}
function hideSkeleton() {
	document.getElementById("skeleton_table").style.display = "none";
}
function getRoundNumber(round){
	let roundNumber = "";
	let tempnumber = "";
	for(let i = round.length - 1; i > 0; i--){
		if(round.charAt(i) != ' '){
			tempnumber = round.charAt(i) + roundNumber;
			roundNumber = tempnumber
		} else {
			return roundNumber;
		}
	}
}