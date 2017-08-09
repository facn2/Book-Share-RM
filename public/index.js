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

// function renderBookData(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     var books = JSON.parse(data);
//     console.log(books);
//     books.forEach(function(book){
//       var bookTitle = book.book_name;
//       var bookAuthor = book.author;
//       var bookDiv = document.createElement('div');
//       bookDiv.innerText = bookTitle;
//       console.log(bookTitle);
//     })
//   }
// }

function renderBookImage(err, data) {
  if (err) {
    console.log(err);
  } else {
    var books = JSON.parse(data);
    books.forEach(function(book){
      var bookContainer = document.createElement('div');
      bookContainer.setAttribute('class', 'book_container')
      var libraryContainer = document.querySelector('#library-container'); // connect to html
      var bookImageUrl = book.cover_url; //get url from book object
      // var bookId = book.id;
      var bookImg = document.createElement('img');
      bookImg.setAttribute('class', 'book_cover');
      // bookImg.setAttribute('id', 'bookId' + bookId);
      bookImg.src = bookImageUrl;
      bookContainer.appendChild(bookImg);
      var bookModal = document.createElement('div');
      bookModal.setAttribute('class', 'book_modal');
      bookContainer.appendChild(bookModal);
      libraryContainer.appendChild(bookContainer)
      console.log(bookImg);
      bookImg.classList.add('book_cover_hide');
      bookModal.classList.add('book_modal_hide');
      var bookTitleData = book.book_name;
      var bookAuthorData = book.author;
      var bookTitleElement = document.createElement('p');
      var bookAuthorElement = document.createElement('p');
      bookTitleElement.innerText = 'Title: ' + bookTitleData;
      bookAuthorElement.innerText = 'Author: ' + bookAuthorData;
      bookModal.appendChild(bookTitleElement);
      bookModal.appendChild(bookAuthorElement);
      bookContainer.addEventListener('click', function(){
        // while(bookContainer.firstChild){
        //   bookContainer.removeChild(bookContainer.firstChild)
        // }
        bookImg.classList.toggle('book_cover_hide');
        bookModal.classList.toggle('book_modal_hide');
        // create a modal window
        })
    })
  }
}




fetchData('/books', renderBookImage);
