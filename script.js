var request = new XMLHttpRequest();
request.open('GET', 'https://teamtreehouse.com/adamwhite11.json');
request.onload = (function () {
	var results = JSON.parse(request.responseText);
	console.log(results);
	
})
request.send();