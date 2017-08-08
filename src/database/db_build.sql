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
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE ratings(
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  ratings INTEGER
);

INSERT INTO users(name, surname) VALUES
  ('Katia', 'Ashkar')
RETURNING ID;

INSERT INTO books(book_name, author, user_id) VALUES
  ('Harry Potter', 'J.K Rowling', 1)
RETURNING ID;

INSERT INTO ratings(book_id, ratings) VALUES
  (1, 5)
RETURNING ID;

COMMIT;
