var statsTH = document.getElementById('statsTH');
var currentTH = document.getElementById('currentTH');
var readMore = document.getElementsByClassName('read-more')[0];
var mainText = document.getElementsByClassName('main-text')[0];
var hideText = document.getElementsByClassName('hide-text')[0];


var request = new XMLHttpRequest();
request.open('GET', 'https://teamtreehouse.com/adamwhite11.json');
request.onload = function () {
	let results = JSON.parse(request.responseText);
	console.log(results);
	var lastCourse = results.badges.length-1
  var latestCourse = results.badges[lastCourse].name
  var latestBadge = results.badges[lastCourse].icon_url
  
	var treehouseStats = `
		<h5>Treehouse Stats</h5>
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
    
    var currentlyLearning = 
      `<p>Currently learning: <strong>${latestCourse}</strong></p>
       <div class="text-center">
        <img class="thumb" src="${latestBadge}">
       </div>`
		
	statsTH.innerHTML = treehouseStats;
  statsTH.style.border = "2px white solid"; // border added dynamically to avoid showing empty div on load
  currentTH.innerHTML = currentlyLearning;
  currentTH.style.border = "2px white solid";
}

request.send();



// big issue with codewars api and cors - had to implement alternative solution

readMore.addEventListener('click', function () {
  readMore.style.display = "none";
  mainText.style.display = "block";
  hideText.style.display = "block";
});

hideText.addEventListener('click', function () {
  readMore.style.display = "block";
  mainText.style.display = "none";
  hideText.style.display = "none";
});



// on learning place most recent katas by iterating through completed challenged object