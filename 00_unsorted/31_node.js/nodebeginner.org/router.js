function route(handle, pathname, response, request){
	console.log('About to route a request for: ' + pathname);

	if (typeof handle[pathname] === 'function') {
		//run handler if exists
		handle[pathname](response, request);
	} else {
		console.log("No request handler found for: " + pathname);

		//response - moved here from server
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
