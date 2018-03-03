//ETH Wallet 1 Ballance
var eth_balance;
    $(function() {


   var result;
   var balance;

   $.getJSON('https://api.etherscan.io/api?module=account&action=balance&address=0x542e34E4D8D028172184D2938aBEe77E6bcDC12d&tag=latest&apikey=CNAVZM8H9J3Q2HWRR553Q7BYANFZRGK79J', function(data) {
       //$.each(data.result, function(i, f) {
          var balance = data.result;
		  var eth_balance = data.result;
           //$(balance).appendTo("#accbalance");
		   document.getElementById("eth1ballance").innerHTML = data.result;
		   console.log(eth_balance);
     //});

   });

});


//BTC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("btcusd").innerHTML = usd;
		   document.getElementById("btceur").innerHTML = eur;
     //});

   });

});

//ETC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("etcusd").innerHTML = usd;
		   document.getElementById("etceur").innerHTML = eur;
     //});

   });

});

//ZEC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ZEC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("zecusd").innerHTML = usd;
		   document.getElementById("zeceur").innerHTML = eur;
     //});

   });

});

//Monero (XMR) to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("xmrusd").innerHTML = usd;
		   document.getElementById("xmreur").innerHTML = eur;
     //});

   });

});

//SIA to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=SC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("siausd").innerHTML = usd;
		   document.getElementById("siaeur").innerHTML = eur;
     //});

   });

});
//ETH Wallet 1 Ballance
var eth_balance
    $(function() {


   var result;
   var balance;

   $.getJSON('https://api.etherscan.io/api?module=account&action=balance&address=0x542e34E4D8D028172184D2938aBEe77E6bcDC12d&tag=latest&apikey=CNAVZM8H9J3Q2HWRR553Q7BYANFZRGK79J', function(data) {
       //$.each(data.result, function(i, f) {
          var balance = data.result
		  var eth_balance = data.result
           //$(balance).appendTo("#accbalance");
		   document.getElementById("eth1ballance").innerHTML = data.result;
     //});

   });

});


//BTC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("btcusd").innerHTML = usd;
		   document.getElementById("btceur").innerHTML = eur;
     //});

   });

});

//ETH to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("ethusd").innerHTML = usd;
		   document.getElementById("etheur").innerHTML = eur;
		   document.getElementById("eth1tousd").innerHTML = 5 * 3;
		   console.log(eth_balance)
     //});

   });

});

//ETC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("etcusd").innerHTML = usd;
		   document.getElementById("etceur").innerHTML = eur;
     //});

   });

});

//ZEC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ZEC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("zecusd").innerHTML = usd;
		   document.getElementById("zeceur").innerHTML = eur;
     //});

   });

});

//Monero (XMR) to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("xmrusd").innerHTML = usd;
		   document.getElementById("xmreur").innerHTML = eur;
     //});

   });

});

//Monero (XMR) to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=SC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD
		  var eur = data.EUR
		   document.getElementById("siausd").innerHTML = usd;
		   document.getElementById("siaeur").innerHTML = eur;
     //});

   });

});
