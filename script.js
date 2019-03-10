var statsTH = document.getElementById('statsTH');
console.log('boo');

var request = new XMLHttpRequest();
request.open('GET', 'https://teamtreehouse.com/adamwhite11.json');
request.onload = function () {
	let results = JSON.parse(request.responseText);
	console.log(results);
	
	var treehouseStats = `
		<table>
			<tr>
				<th>Points: </th>
				<td>${results.points.total}</td>
			</tr>
			<tr>
				<th>HTML: </th>
				<td>${results.points.HTML}</td>
			</tr>
			<tr>
				<th>CSS: </th>
				<td>${results.points.CSS}</td>
			</tr>
			<tr>
				<th>JavaScript: </th>
				<td>${results.points.JavaScript}</td>
			</tr>
			<tr>
				<th>Python: </th>
				<td>${results.points.Python}</td>
			</tr>
		</table>`
		
	statsTH.innerHTML = treehouseStats;
}

request.send();


var requestCW = new XMLHttpRequest();
requestCW.open('GET', 'https://www.codewars.com/api/v1/users/PosteriorFossa');
requestCW.onload = function (){
	let results = JSON.parse(requestCW.responseText);
	console.log(results);
}

requestCW.send();







// on learning place most recent katas by iterating through completed challenged object