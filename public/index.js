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
    books.forEach(function(book) {
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
      bookImg.classList.add('book_cover_hide');
      bookModal.classList.add('book_modal_hide');
      var bookTitleData = book.book_name;
      var bookAuthorData = book.author;
      var bookUserName = book.name;
      var bookUserSurname = book.surname;
      var bookTitleElement = document.createElement('p');
      var bookAuthorElement = document.createElement('p');
      var bookUserNameElement = document.createElement('p');
      var bookUserSurnameElement = document.createElement('p');
      bookTitleElement.innerText = 'Title: ' + bookTitleData;
      bookAuthorElement.innerText = 'Author: ' + bookAuthorData;
      bookUserNameElement.innerText = 'Name: ' + bookUserName;
      bookUserSurnameElement.innerText = 'Surname: ' + bookUserSurname;
      bookModal.appendChild(bookTitleElement);
      bookModal.appendChild(bookAuthorElement);
      bookModal.appendChild(bookUserNameElement);
      bookModal.appendChild(bookUserSurnameElement);
      bookContainer.addEventListener('click', function() {
        bookImg.classList.toggle('book_cover_hide');
        bookModal.classList.toggle('book_modal_hide');
        // create a modal window
      })
    })
  }
}

fetchData('/books', renderBookImage);
