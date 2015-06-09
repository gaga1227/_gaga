var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

//config routes
var handle = {
	'/': requestHandlers.start,
	'/start': requestHandlers.start,
	'/upload': requestHandlers.upload,
	'/show': requestHandlers.show
};

//start server with dependencies
server.start(router.route, handle);
