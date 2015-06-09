var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(request, response){
		//vars
		//var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log('Request for: ' + pathname + ' received');

		//pass request to request handler
		route(handle, pathname, response, request);

		//update request
		//request.setEncoding('utf8');

		//handle request async
		/*
		request.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log('Received POST data chunk: "' + postDataChunk + '".');
		});
		request.addListener('end', function() {
			route(handle, pathname, response, postData);
		});
		*/

		//response - moved to route handlers
		/*
		response.writeHead(200, {'Content-Type':'text/html'}); //header
		var content = route(handle, pathname);
		response.write(content); //body
		response.end(); //end
		*/
	}

	http.createServer(onRequest).listen(3000);
	console.log('Server has started');
}

// map start function to 'module.start'
exports.start = start;
