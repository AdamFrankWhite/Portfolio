var statsTH = document.getElementById('statsTH');


var request = new XMLHttpRequest();
request.open('GET', 'https://teamtreehouse.com/adamwhite11.json');
request.onload = function () {
	let results = JSON.parse(request.responseText);
	console.log(results);
	
	var treehouseStats = `
		<h5>Latest Team Treehouse Stats</h5>
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



// big issue with codewars api and cors - had to implement alternative solution





// on learning place most recent katas by iterating through completed challenged object