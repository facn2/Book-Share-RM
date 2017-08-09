const dbConnection = require ('../database/db_connection');

const addNewBook = (bookTitle, author, firstName, lastName, bookImgURL, callback) => {
	
	const userInsertQuery = 'INSERT INTO users(name, surname) VALUES ($1, $2);';
	const userDetailsArray = [firstName, lastName];
	const bookInsertQuery = 'INSERT INTO books(book_name, author, cover_url) VALUES ($1, $2, $3);';
	const bookDetailsArray = [bookTitle, author, bookImgURL];

	dbConnection.query(userInsertQuery, userDetailsArray, (err, res) => {
		if (err) {
			callback(err)
		}
		console.log(res);
			callback(null)
	});

	dbConnection.query(bookInsertQuery, bookDetailsArray, (err, res) => {
		if (err) {
			callback(err)
		}
		console.log(res);
			callback(null)
	});
}

module.exports = addNewBook;
