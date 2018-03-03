var result;
var data;
function setup() {
	loadJSON('https://api.etherscan.io/api?module=account&action=balance&address=0x542e34E4D8D028172184D2938aBEe77E6bcDC12d&tag=latest&apikey=CNAVZM8H9J3Q2HWRR553Q7BYANFZRGK79J', gotData);
	}
	
function gotData(data) {
	print(data);
	result = data.result;
	print(result);
	textSize(15);
	text (result, 10, 30);
}

	document.getElementById("accbalance").innerHTML = data.result ;