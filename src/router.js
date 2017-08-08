const {handleHomeRoute, handlePublic} = require('./handlers');

const router = (request, response) => {
	const endpoint = req.url.split('/')[1];

	if (endpoint === '') {
		handleHomeRoute(res);
	} else if (endpoint.indexOf('public') === 0) {
		handlePublic(res, req);
	} else if (endpoint === 'books') { 
		getData((err, res) => {
			if (err) {
				response.writeHead(500, 'Content-Type:text/html');
				response.end('<h1>Sorry, there was a problem getting the users</h1>');
				console.log(error);
			} else {
				const data = JSON.stringify(res);
				response.writeHead(200, 'Content-Type:application/json');
				response.end(data);
			}
		})
	}
	 else {
		res.writeHead(404, 'Content-Type: text/html')
		res.end('<h1>404 file not found</h1>');
	}
};

module.exports = router;