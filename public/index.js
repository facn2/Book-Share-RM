function fetchData(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(null, xhr.responseText);
        } else {
            cb("error" + xhr.responseType);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function renderBookImage(err, data) {
  if (err) {
    console.log(err);
  } else {
    var books = JSON.parse(data);
    books.forEach(function(book){
      var bookContainer = document.querySelector('#book-container'); // connect to html
      var bookImageUrl = book.cover_url; //get url from book object
      var bookImg = document.createElement('img');
      bookImg.setAttribute('class', 'book_cover')
      bookImg.src = bookImageUrl;
      bookContainer.appendChild(bookImg);
    })
  }
}

function renderBookData(err, data) {
  if (err) {
    console.log(err);
  } else {
    var books = JSON.parse(data);
    console.log(books);
    books.forEach(function(book){
      var bookTitle = book.book_name;
      var bookAuthor = book.author;
      var bookDiv = document.createElement('div');
      bookDiv.innerText = bookTitle;
    })
  }
}

fetchData('/books', renderBookImage);
