BEGIN;

DROP TABLE IF EXISTS books, users, reservations, ratings cascade;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  surname TEXT NOT NULL
);

CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  book_name TEXT NOT NULL,
  author TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id),
  cover_url TEXT NOT NUll
);

CREATE TABLE ratings(
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  ratings INTEGER
);

INSERT INTO users(name, surname) VALUES
  ('Katia', 'Ashkar'), ('Harry', 'Dry')
RETURNING ID;

INSERT INTO books(book_name, author, user_id, cover_url) VALUES
  ('Harry Potter Philosophers Stone', 'J.K Rowling', 1, 'https://images-na.ssl-images-amazon.com/images/I/818PicDErkL.jpg'), ('Sapiens', 'Lubel', 2, 'https://images-na.ssl-images-amazon.com/images/I/71oObFP5pcL.jpg')
RETURNING ID;

INSERT INTO ratings(book_id, ratings) VALUES
  (1, 5), (2, 10)
RETURNING ID;

COMMIT;
