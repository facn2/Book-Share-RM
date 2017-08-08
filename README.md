# Book-Share-RM

## How to use our Website:
To check out the app, please clone this repository.
```
git clone
```
Install the dependencies
```
npm i
```
Run start
```
npm run devStart
```
## Our Product:

We want to create a web application which displays books for people in Founders & Coders to share.

## User Story:

**As a member of Founders & Coders who has a book I would like to share...**
* I can add a book to the database

**As a member of Founders & Coders who is interested in borrowing a book...**
* I can browse for available books
* I can reserve a book for certain dates
* I can unreserve a book

**Suggested additional requirements / stretch goals:**
* I can rate the book after I've read it
* Books can simultaneously be reserved by multiple users but for different dates

## Schemas:
**books**

| id  | book_name    | author | users_id |
| --- | ------------ | ------ | -------- |
| 1   | Harry Potter | J.K Rowling | 1|

**users**

| id  |  name | surname |
| --- |:-----:|:-------:|
| 1 | Katia | Ashkar |

**reservations**

| id  | book_id | users_id | due_date |
| --- |:---------:|:------:| -------: |
| 1 | 1 | 1 | 15 Aug 2017|

**rating**

| id  | book_id | rating |
| --- |:-------:|:------:|
| 1 | 1 | 5 |


## Wireframe:

![altinline](https://user-images.githubusercontent.com/25408167/29070025-00b04ab8-7c46-11e7-9dd1-3479cb314980.png)

## Architecture:

![altinline]()

## Code Guidelines:
* CamelCase for variable names
* Comments for code clarification
* Sole use of arrow-functions on backend
* Use of QuerySelector to grab elements from html to js

## Team Checklist:
* Wireframe & Architecture
* Create schemas
* Research sql injections
* Create skeleton files
* Create database
* Create back-end server
* Create front-end client
* Establish Heroku
