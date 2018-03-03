var data;
var userId;
function setup() {
	loadJSON('https://jsonplaceholder.typicode.com/posts/1', gotData);
	text(data, 10, 30);
	}
	
function gotData(data) {
	userId = data;
	print(data);
}

function write(data) {
text(userId, 30, 10); }

 
	//document.getElementById("accbalance").innerHTML = data ;