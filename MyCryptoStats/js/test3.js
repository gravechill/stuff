//WALLETS
//ETH Wallet 1 Ballance
    $(function(callback) {


   var result;
   var balance;

   $.getJSON('https://api.ethplorer.io/getAddressInfo/0x542e34E4D8D028172184D2938aBEe77E6bcDC12d?apiKey=freekey', function(data) {
       //$.each(data.result, function(i, f) {
          var balance = data.ETH.balance;
           //$(balance).appendTo("#accbalance");
		   document.getElementById("eth1ballance").innerHTML = data.ETH.balance;
     //});

   });

});

//ETC Wallet 1 Ballance
    $(function() {


   var result;
   var balance;

   $.getJSON('http://api.gastracker.io/addr/0x66bd122E46Ed6F4F2A905CBe968111E8E4490899', function(data) {
       //$.each(data.result, function(i, f) {
          var balance = data.ether;
           //$(balance).appendTo("#accbalance");
		   document.getElementById("etc1ballance").innerHTML = data.balance.ether;
     //});

   });

});


//CRYPTO TO FIAT TABLE
//ETH to USD and EUR
    $(function() {

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
		  var eth_balance;
		   document.getElementById("ethusd").innerHTML = data.USD;
		   document.getElementById("etheur").innerHTML = data.EUR;
		   setTimeout(function() {
			eth_balance = document.getElementById("eth1ballance").innerHTML;
			var usd = eth_balance * data.USD;
			var calculatedUsd = usd.toFixed(2);
			var eur = eth_balance * data.EUR;
			var calculatedEur = eur.toFixed(2);
			document.getElementById("eth1tousd").innerHTML = calculatedUsd;
			document.getElementById("eth1toeur").innerHTML = calculatedEur;
     },500);

   });

});

//BTC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD;
		  var eur = data.EUR;
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
		  var etc_balance;
		   document.getElementById("etcusd").innerHTML = data.USD;
		   document.getElementById("etceur").innerHTML = data.USD;
		   setTimeout(function() {
		       etc_balance = document.getElementById("etc1ballance").innerHTML;
			    var usd = etc_balance * data.USD;
				var calculatedUsd = usd.toFixed(2);
				var eur = etc_balance * data.EUR;
				var calculatedEur = eur.toFixed(2);
		       document.getElementById("etc1tousd").innerHTML = calculatedUsd;
		       document.getElementById("etc1toeur").innerHTML = calculatedEur;
		  },500);
     //});

   });

});

//ZEC to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ZEC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD;
		  var eur = data.EUR;
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
          var usd = data.USD;
		  var eur = data.EUR;
		   document.getElementById("xmrusd").innerHTML = usd;
		   document.getElementById("xmreur").innerHTML = eur;
     //});

   });

});

//SIA Coin (SC) to USD and EUR
    $(function() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=SC&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
          var usd = data.USD;
		  var eur = data.EUR;
		   document.getElementById("siausd").innerHTML = usd;
		   document.getElementById("siaeur").innerHTML = eur;
     //});

   });

});


//CRYPTO TO CRYPTO TABLE
//BTC to ETH
    $(function() {

   $.getJSON('https://shapeshift.io/rate/btc_eth', function(data) {
       //$.each(data.result, function(i, f) {
          var result = data.rate;
           //$(balance).appendTo("#accbalance");
		   document.getElementById("btc2eth").innerHTML = result;
     //});

   });

});

//BTC to ETC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/btc_etc', function(data) {
          var result = data.rate;
		   document.getElementById("btc2etc").innerHTML = result;

   });

});

//BTC to ZEC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/btc_zec', function(data) {
          var result = data.rate;
		   document.getElementById("btc2zec").innerHTML = result;

   });

});

//BTC to Monero
    $(function() {

   $.getJSON('https://shapeshift.io/rate/btc_xmr', function(data) {
          var result = data.rate;
		   document.getElementById("btc2xmr").innerHTML = result;

   });

});

//ETH to BTC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/eth_btc', function(data) {
          var result = data.rate;
		   document.getElementById("eth2btc").innerHTML = result;

   });

});

//ETH to ETC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/eth_etc', function(data) {
          var result = data.rate;
		   document.getElementById("eth2etc").innerHTML = result;

   });

});

//ETH to ZEC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/eth_zec', function(data) {
          var result = data.rate;
		   document.getElementById("eth2zec").innerHTML = result;

   });

});

//ETH to Monero
    $(function() {

   $.getJSON('https://shapeshift.io/rate/eth_xmr', function(data) {
          var result = data.rate;
		   document.getElementById("eth2xmr").innerHTML = result;

   });

});

//ETH to SC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/eth_sc', function(data) {
          var result = data.rate;
		   document.getElementById("eth2sia").innerHTML = result;

   });

});

//ETC to BTC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/etc_btc', function(data) {
          var result = data.rate;
		   document.getElementById("etc2btc").innerHTML = result;

   });

});

//ETC to ETH
    $(function() {

   $.getJSON('https://shapeshift.io/rate/etc_eth', function(data) {
          var result = data.rate;
		   document.getElementById("etc2eth").innerHTML = result;

   });

});

//ETC to ZEC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/etc_zec', function(data) {
          var result = data.rate;
		   document.getElementById("etc2zec").innerHTML = result;

   });

});

//ETC to Monero
    $(function() {

   $.getJSON('https://shapeshift.io/rate/etc_xmr', function(data) {
          var result = data.rate;
		   document.getElementById("etc2xmr").innerHTML = result;

   });

});

//ETC to SIA
    $(function() {

   $.getJSON('https://shapeshift.io/rate/etc_sc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("etc2sia").innerHTML = result;

   });

});

//ZEC to BTC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/zec_btc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2btc").innerHTML = result;

   });

});

//ZEC to ETH
    $(function() {

   $.getJSON('https://shapeshift.io/rate/zec_eth', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2eth").innerHTML = result;

   });

});

//ZEC to ETC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/zec_etc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2etc").innerHTML = result;

   });

});

//ZEC to Monero
    $(function() {

   $.getJSON('https://shapeshift.io/rate/zec_xmr', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2xmr").innerHTML = result;

   });

});

//ZEC to Sia
    $(function() {

   $.getJSON('https://shapeshift.io/rate/zec_sc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2sia").innerHTML = result;

   });

});

//Monero to BTC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/xmr_btc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2btc").innerHTML = result;

   });

});

//Monero to ETH
    $(function() {

   $.getJSON('https://shapeshift.io/rate/xmr_eth', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2eth").innerHTML = result;

   });

});

//Monero to ETC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/xmr_etc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2etc").innerHTML = result;

   });

});

//Monero to ZEC
    $(function() {

   $.getJSON('https://shapeshift.io/rate/xmr_zec', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2zec").innerHTML = result;

   });

});

//Monero to sia
    $(function() {

   $.getJSON('https://shapeshift.io/rate/xmr_sc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2sia").innerHTML = result;

   });

});

function DropTheButton() {
    document.getElementById("Dropdown").classList.toggle("show");
}


function ETHPoolStats() {
	$.getJSON('https://api.nanopool.org/v1/eth/approximated_earnings/187', function(data) {
		document.getElementById("ApproxEarn").innerHTML = data.data.month.coins + " ETH";
	})
	
	$.getJSON('https://api.nanopool.org/v1/eth/user/0x542e34e4d8d028172184d2938abee77e6bcdc12d', function(data) {
		document.getElementById("PoolBalance").innerHTML = data.data.balance;
		document.getElementById("CalculatedHashrate").innerHTML = data.data.hashrate;
		document.getElementById("AvarageHashrate").innerHTML = data.data.avgHashrate.h12;
	})
	
	$.getJSON('https://api.nanopool.org/v1/eth/reportedhashrate/0x542e34e4d8d028172184d2938abee77e6bcdc12d', function(data) {
		document.getElementById("ReportedHashrate").innerHTML = data.data;
	})
}

function ETCPoolStats() {
	$.getJSON('https://api.nanopool.org/v1/etc/approximated_earnings/187', function(data) {
		document.getElementById("ApproxEarn").innerHTML = data.data.month.coins + " ETC";
	})
	
	$.getJSON('https://api.nanopool.org/v1/etc/user/0x66bd122e46ed6f4f2a905cbe968111e8e4490899', function(data) {
		document.getElementById("PoolBalance").innerHTML = data.data.balance;
		document.getElementById("CalculatedHashrate").innerHTML = data.data.hashrate;
		document.getElementById("AvarageHashrate").innerHTML = data.data.avgHashrate.h12;
	})
	
	$.getJSON('https://api.nanopool.org/v1/etc/reportedhashrate/0x66bd122e46ed6f4f2a905cbe968111e8e4490899', function(data) {
		document.getElementById("ReportedHashrate").innerHTML = data.data;
	})
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("DropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$ (function()) {
    document.getElementById("btc2btc").classList.toggle("hold");
}
