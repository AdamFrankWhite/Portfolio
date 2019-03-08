const stats = document.getElementById('stats');

var request = new XMLHttpRequest();
request.open('GET', 'https://teamtreehouse.com/adamwhite11.json');
request.onload = function () {
	var results = JSON.parse(request.responseText);
	console.log(results);
	
}
console.log('test');
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
	
stats.innerHTML = treehouseStats;