const {handleHomeRoute, handlePublic} = require('./handlers');
const getData = require('./queries/getData');
const pg = require('pg');
const http = require('http');
const querystring = require('querystring');
const addNewBook = require('./queries/addNewBook');

const router = (request, response) => {
	const endpoint = request.url.split('/')[1];

	if (endpoint === '') {
		handleHomeRoute(response);
	} else if (endpoint.indexOf('public') === 0) {
		handlePublic(response, request);
	} else if (endpoint === 'books') {
		getData((err, res) => {
			if (err) {
				response.writeHead(500, 'Content-Type:text/html');
				response.end('<h1>Sorry, there was a problem getting the users</h1>');
				console.log(err);
			} else {
				const data = JSON.stringify(res);
				response.writeHead(200, 'Content-Type:application/json');
				response.end(data);
			}
		})
	} else if (endpoint === 'add-new-book') {
		let inputData = '';

		request.on('data', chunk => {
			inputData += chunk;
		})

		request.on('end', () => {
			const formInput = querystring.parse(inputData);
			console.log(formInput);

			addNewBook(formInput, (err) => {
				if (err) {
					console.log(err);
					return 'Error with Adding New Book'
				}
				response.writeHead(301, {"Location" : "/"})
				response.end()
			})
		})
	}
	 else {
		response.writeHead(404, 'Content-Type: text/html');
		response.end('<h1>404 file not found</h1>');
	}
};

module.exports = router;
