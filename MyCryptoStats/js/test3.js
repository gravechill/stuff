//Crypto To Fiat
GetBTCprices();
GetZECprices();
GetMoneroprices();
GetSiaprices();

//Crypto to Crypto
BtcToEth();
BtcToEtc();
BtcToZec();
BtcToMonero();
EthToBtc();
EthToEtc();
EthToZec();
EthToMonero();
EthToSia();
EtcToBtc();
EtcToEth();
EtcToZec();
EtcToMonero();
EtcToSia();
ZecToBtc();
ZecToEth();
ZecToEtc();
ZecToMonero();
ZecToSia();
MoneroToBtc();
MoneroToEth();
MoneroToEtc();
MoneroToZec();
MoneroToSia();

$(function() {
    setInterval(function() {
        GetETHprices();
        GetETCprices();
        GetBTCprices();
        GetZECprices();
        GetMoneroprices();
        GetSiaprices();
        BtcToEth();
        BtcToEtc();
        BtcToZec();
        BtcToMonero();
        EthToBtc();
        EthToEtc();
        EthToZec();
        EthToMonero();
        EthToSia();
        EtcToBtc();
        EtcToEth();
        EtcToZec();
        EtcToMonero();
        EtcToSia();
        ZecToBtc();
        ZecToEth();
        ZecToEtc();
        ZecToMonero();
        ZecToSia();
        MoneroToBtc();
        MoneroToEth();
        MoneroToEtc();
        MoneroToZec();
        MoneroToSia();
        console.log("Got it boi")

}, 5000);
})

//WALLETS
//ETH Wallet 1 Ballance
 function GetETHballance(callback) {


   var result;
   var balance;

   $.getJSON('https://api.ethplorer.io/getAddressInfo/0x542e34E4D8D028172184D2938aBEe77E6bcDC12d?apiKey=freekey', function(data) {
       //$.each(data.result, function(i, f) {
          var balance = data.ETH.balance;
           //$(balance).appendTo("#accbalance");
           document.getElementById("eth1ballance").innerHTML = data.ETH.balance;
           callback();
     //});

   });

};

//ETC Wallet 1 Ballance
function GetETCballance(callback) {


   var result;
   var balance;

   $.ajax({
    dataType: 'jsonp',
    url: "https://api.gastracker.io/v1/addr/0x66bd122E46Ed6F4F2A905CBe968111E8E4490899",
    type: "GET",
    success: function (data) {
        var balance = data.ether;
        document.getElementById("etc1ballance").innerHTML = data.balance.ether;
        callback();
    },
    error: function () {
        console.log("error on getting ETC Ballance API")
    }

     //});

   });

};


//CRYPTO TO FIAT TABLE
//ETH to USD and EUR
function GetETHprices() {

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR', function(data) {
       //$.each(data.result, function(i, f) {
		  var eth_balance;
		   document.getElementById("ethusd").innerHTML = data.USD;
		   document.getElementById("etheur").innerHTML = data.EUR;
		   //setTimeout(function() {
			eth_balance = document.getElementById("eth1ballance").innerHTML;
			var usd = eth_balance * data.USD;
			var calculatedUsd = usd.toFixed(2);
			var eur = eth_balance * data.EUR;
			var calculatedEur = eur.toFixed(2);
			document.getElementById("eth1tousd").innerHTML = calculatedUsd;
			document.getElementById("eth1toeur").innerHTML = calculatedEur;
     });

   };


GetETHballance(GetETHprices);

//BTC to USD and EUR
    function GetBTCprices() {


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

};

//ETC to USD and EUR
function GetETCprices() {


   var usd;
   var eur;

   $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,EUR', function(data) {
		  var etc_balance;
		   document.getElementById("etcusd").innerHTML = data.USD;
		   document.getElementById("etceur").innerHTML = data.EUR;
		       etc_balance = document.getElementById("etc1ballance").innerHTML;
			    var usd = etc_balance * data.USD;
				var calculatedUsd = usd.toFixed(2);
				var eur = etc_balance * data.EUR;
				var calculatedEur = eur.toFixed(2);
		       document.getElementById("etc1tousd").innerHTML = calculatedUsd;
		       document.getElementById("etc1toeur").innerHTML = calculatedEur;
		  });

   };

   GetETCballance(GetETCprices);

//ZEC to USD and EUR
    function GetZECprices() {


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

};

//Monero (XMR) to USD and EUR
    function GetMoneroprices() {


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

};

//SIA Coin (SC) to USD and EUR
    function GetSiaprices() {


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

};


//CRYPTO TO CRYPTO TABLE
//BTC to ETH
    function BtcToEth() {

   $.getJSON('https://shapeshift.io/rate/btc_eth', function(data) {
       //$.each(data.result, function(i, f) {
          var result = data.rate;
           //$(balance).appendTo("#accbalance");
		   document.getElementById("btc2eth").innerHTML = result;
     //});

   });

};

//BTC to ETC
    function BtcToEtc() {

   $.getJSON('https://shapeshift.io/rate/btc_etc', function(data) {
          var result = data.rate;
		   document.getElementById("btc2etc").innerHTML = result;

   });

};

//BTC to ZEC
    function BtcToZec() {

   $.getJSON('https://shapeshift.io/rate/btc_zec', function(data) {
          var result = data.rate;
		   document.getElementById("btc2zec").innerHTML = result;

   });

};

//BTC to Monero
    function BtcToMonero() {

   $.getJSON('https://shapeshift.io/rate/btc_xmr', function(data) {
          var result = data.rate;
		   document.getElementById("btc2xmr").innerHTML = result;

   });

};

//ETH to BTC
    function EthToBtc() {

   $.getJSON('https://shapeshift.io/rate/eth_btc', function(data) {
          var result = data.rate;
		   document.getElementById("eth2btc").innerHTML = result;

   });

};

//ETH to ETC
    function EthToEtc() {

   $.getJSON('https://shapeshift.io/rate/eth_etc', function(data) {
          var result = data.rate;
		   document.getElementById("eth2etc").innerHTML = result;

   });

};

//ETH to ZEC
    function EthToZec() {

   $.getJSON('https://shapeshift.io/rate/eth_zec', function(data) {
          var result = data.rate;
		   document.getElementById("eth2zec").innerHTML = result;

   });

};

//ETH to Monero
    function EthToMonero() {

   $.getJSON('https://shapeshift.io/rate/eth_xmr', function(data) {
          var result = data.rate;
		   document.getElementById("eth2xmr").innerHTML = result;

   });

};

//ETH to SC
    function EthToSia() {

   $.getJSON('https://shapeshift.io/rate/eth_sc', function(data) {
          var result = data.rate;
		   document.getElementById("eth2sia").innerHTML = result;

   });

};

//ETC to BTC
    function EtcToBtc() {

   $.getJSON('https://shapeshift.io/rate/etc_btc', function(data) {
          var result = data.rate;
		   document.getElementById("etc2btc").innerHTML = result;

   });

};

//ETC to ETH
    function EtcToEth() {

         $.getJSON('https://shapeshift.io/rate/etc_eth', function(data) {
       
        
          var result = data.rate;
           document.getElementById("etc2eth").innerHTML = result;
           
        });

};

//ETC to ZEC
    function EtcToZec() {

   $.getJSON('https://shapeshift.io/rate/etc_zec', function(data) {
          var result = data.rate;
		   document.getElementById("etc2zec").innerHTML = result;

   });

};

//ETC to Monero
    function EtcToMonero() {

   $.getJSON('https://shapeshift.io/rate/etc_xmr', function(data) {
          var result = data.rate;
		   document.getElementById("etc2xmr").innerHTML = result;

   });

};

//ETC to SIA
    function EtcToSia() {

   $.getJSON('https://shapeshift.io/rate/etc_sc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("etc2sia").innerHTML = result;

   });

};

//ZEC to BTC
    function ZecToBtc() {

   $.getJSON('https://shapeshift.io/rate/zec_btc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2btc").innerHTML = result;

   });

};

//ZEC to ETH
    function ZecToEth() {

   $.getJSON('https://shapeshift.io/rate/zec_eth', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2eth").innerHTML = result;

   });

};

//ZEC to ETC
    function ZecToEtc() {

   $.getJSON('https://shapeshift.io/rate/zec_etc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2etc").innerHTML = result;

   });

};

//ZEC to Monero
    function ZecToMonero() {

   $.getJSON('https://shapeshift.io/rate/zec_xmr', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2xmr").innerHTML = result;

   });

};

//ZEC to Sia
    function ZecToSia() {

   $.getJSON('https://shapeshift.io/rate/zec_sc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("zec2sia").innerHTML = result;

   });

};

//Monero to BTC
    function MoneroToBtc() {

   $.getJSON('https://shapeshift.io/rate/xmr_btc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2btc").innerHTML = result;

   });

};

//Monero to ETH
    function MoneroToEth() {

   $.getJSON('https://shapeshift.io/rate/xmr_eth', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2eth").innerHTML = result;

   });

};

//Monero to ETC
    function MoneroToEtc() {

   $.getJSON('https://shapeshift.io/rate/xmr_etc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2etc").innerHTML = result;

   });

};

//Monero to ZEC
    function MoneroToZec() {

   $.getJSON('https://shapeshift.io/rate/xmr_zec', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2zec").innerHTML = result;

   });

};

//Monero to sia
    function MoneroToSia() {

   $.getJSON('https://shapeshift.io/rate/xmr_sc', function(data) {
          var result = data.rate;
          result = parseFloat(result).toFixed(3);
		   document.getElementById("xmr2sia").innerHTML = result;

   });
};

//Etherscan LastBlock
var ethlastblock
var ethhexblock
function GetLastBlockFromEth(callback) {

    $.getJSON('https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=CNAVZM8H9J3Q2HWRR553Q7BYANFZRGK79J', function(data) {
        ethhexblock = data.result;
        ethlastblock = parseInt(ethhexblock);
        callback();
    });
 };

 GetLastBlockFromEth(WriteDiff);

// Network API
function ETCAPI() {
    return 'https://api.nanopool.org/v1/etc/blocks/0/1';
}


////Network Stats
//ETH difficulty and last block
function WriteDiff() {

   $.getJSON("https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=" + ethhexblock + "&boolean=true&apikey=CNAVZM8H9J3Q2HWRR553Q7BYANFZRGK79J", function(data) {
           var hexdiff = data.result.difficulty;
           var decdiff = parseInt(hexdiff);
           var setdiff = decdiff;
           var convdiff
                $(function (setdiff, decimals) {
                if(decdiff == 0) return '0 Bytes';
                var k = 1000,
                dm = decimals || 3,
                sizes = [ 'H', 'kH', 'MH', 'GH', 'TH', 'PH', 'EH', 'ZH', 'YH'],
                i = Math.floor(Math.log(decdiff) / Math.log(k));
                convdiff = parseFloat((decdiff / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                document.getElementById("ethdiff").innerHTML = convdiff;
         })
           document.getElementById("ethlastblock").innerHTML = ethlastblock;
		  $("#ethlastblock").attr("href", "https://etherscan.io/block/" + ethlastblock)

   });

};

//ETC difficulty and last block
$(function() {

   $.getJSON(ETCAPI(), function(data) {
       var diff = data.data[0].difficulty;
       var diff2 = diff
       var convdiff
       $(function (diff2, decimals) {
        if(diff == 0) return '0 Bytes';
        var k = 1000,
        dm = decimals || 3,
        sizes = [ 'H', 'kH', 'MH', 'GH', 'TH', 'PH', 'EH', 'ZH', 'YH'],
        i = Math.floor(Math.log(diff) / Math.log(k));
        convdiff = parseFloat((diff / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        document.getElementById("etcdiff").innerHTML = convdiff;
 })
		   document.getElementById("etclastblock").innerHTML = data.data[0].number;
		   $("#etclastblock").attr("href", "https://gastracker.io/block/" + data.data[0].number)

   });

});

//Select Coin Button Dropdown
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

//Hover column (Crypto2Crypto table)
$(function() {
	$('td').hover(function() {
	$(this).parents('table').find('col:eq('+$(this).index()+')').toggleClass('hover');
	});
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("content").style.marginLeft = "400px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
}