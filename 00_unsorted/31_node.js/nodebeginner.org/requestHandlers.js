//var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

//handlers
function start(response){
	console.log('Request handler "start" was called.');

	//template
	var body = 	'<html>'+
					'<head>'+
					'<meta http-equiv="Content-Type" content="text/html; '+
					'charset=UTF-8" />'+
					'</head>'+
					'<body>'+
						'<form action="/upload" enctype="multipart/form-data" method="post">'+
							//'<textarea name="text" rows="20" cols="60"></textarea><br/>'+
							'<input type="file" name="upload" multiple="multiple"><br />'+
							'<input type="submit" value="Upload file" />'+
						'</form>'+
					'</body>'+
				'</html>';

	//response
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

	//non-blocking operation
	/*
	exec('dir', function(error, stdout, stderr){
		//async response
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	});
	*/

	//blocking operaton
	/*
	function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	*/

	//return content;
}

function upload(response, request){
	console.log('Request handler "upload" was called.');

	//create form
	var form = new formidable.IncomingForm();
	console.log('about to parse form');

	//form parse handler
	form.parse(request, function(error, fields, files){
		console.log('form parsing done');

		//rename uploaded file
		fs.rename(files.upload.path, './tmp/test.png', function(error){
			if (error) {
				fs.unlink('./tmp/test.png');
				fs.rename(files.upload.path, './tmp/test.png');
			}
		});

		//response
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('Image received:<br/>');
		response.write('<img src="/show" />');
		response.end();
	});

	//response
	/*
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('You have sent: ' + querystring.parse(postData).text);
	response.end();
	*/
}

function show(response){
	console.log('Request handler "show" was called.');

	//fs readFile handler
	function onFSReadFile(error, file) {
		if (error) {
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write(error + '\n');
			response.end();
			console.log('Read Error: "./tmp/test.png", ' + error + '.');
		} else {
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(file, 'binary');
			response.end();
			console.log('Read Success: "./tmp/test.png".');
		}
	}

	//fs readFile
	fs.readFile('./tmp/test.png', 'binary', onFSReadFile);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
