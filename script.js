const stats = document.getElementById('stats');

var request = new XMLHttpRequest();
request.open('GET', 'https://teamtreehouse.com/adamwhite11.json');
request.onload = function () {
	var results = JSON.parse(request.responseText);
	console.log(results);
	
}
request.send();

var requestTwo = new XMLHttpRequest();
requestTwo.open('GET', '');
requestTwo.onload = function() {
	var results = JSON.parse(requestTwo.responseText);
	console.log(results);
}

requestTwo.send();

var treehouseStats = `
	<table>
		<tr>
			<th>Points: </th>
			<td>${request.points.total}</td>
		</tr>
		<tr>
			<th>HTML: </th>
			<td>${request.points.HTML}</td>
		</tr>
		<tr>
			<th>CSS: </th>
			<td>${request.points.CSS}</td>
		</tr>
		<tr>
			<th>JavaScript: </th>
			<td>${request.points.JavaScript}</td>
		</tr>
		<tr>
			<th>Python: </th>
			<td>${request.points.Python}</td>
		</tr>
	</table>`
	
stats.innerHTML = treehouseStats;