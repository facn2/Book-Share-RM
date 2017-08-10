const dbConnection = require ('../database/db_connection');
const bookInsertQuery = 'INSERT INTO books(book_name, author, user_id, cover_url) VALUES ($1, $2, $3, $4);';
const userInsertQuery = 'INSERT INTO users(name, surname) VALUES ($1, $2) RETURNING id;';

const addNewBook = (formInput, callback) => {
	const {book_title : bookTitle , author, first_name : firstName, last_name : lastName, img_url : bookImgUrl} = formInput;

	const userDetailsArray = [firstName, lastName];

	dbConnection.query(userInsertQuery, userDetailsArray, (err, response) => {
		if (err) {
			return callback(err)
		}
		const user_id = response.rows[0].id;
		const bookDetailsArray = [bookTitle, author, user_id, bookImgUrl];
		dbConnection.query(bookInsertQuery, bookDetailsArray, (err) => {
			callback(null)
		})
	});
}

module.exports = addNewBook;
