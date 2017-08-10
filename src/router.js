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
			const bookTitle = querystring.parse(inputData).book_title;
			const author = querystring.parse(inputData).author;
			const firstName = querystring.parse(inputData).first_name;
			const lastName = querystring.parse(inputData).last_name;
			const bookImgURL = querystring.parse(inputData).img_url;

			addNewBook(bookTitle, author, firstName, lastName, bookImgURL, (err) => {
				if (err) {
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
