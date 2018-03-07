var request = {
	id: "0",
	jsonrpc: "2.0",
	method: "miner_getstat1"
}
	

$.ajax({
    url: 'http://192.168.0.10:3333',
    dataType: 'json',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(request),
    // For parameters:
    //data: '{"method": "API_METHOD", "params": ["PARAMETERS"]}',
    timeout: 15000,
    sucess: function(data) {
        // Response lives in data.result (data.result.version, etc)
		console.log("123");
    },
    error: function(oops) {
        // oops.statusText returns error 
    }
});