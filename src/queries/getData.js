const dbConnection = require('../database/db_connection.js');

const getData = cb => {
	const getBooksQuery = 'SELECT books.book_name, books.author, books.cover_url, users.name, users.surname FROM books JOIN users ON books.user_id = users.id;';
	dbConnection.query(getBooksQuery, (err, res) => {
		if (err) {
			return cb(err);
		} else {
			cb(null, res.rows);
		}
	})
}

module.exports = getData;
