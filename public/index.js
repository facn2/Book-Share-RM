var libraryContainer = document.querySelector('#library-container');

function createAndSetAttribute (typeOfElement, className) {
  var createdElement = document.createElement(typeOfElement);
  createdElement.setAttribute('class', className);
  return createdElement;
}

function createAndSetInnerText (typeOfElement, innerText) {
  var createdElement = document.createElement(typeOfElement);
  createdElement.innerText = innerText;
  return createdElement;
}

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


      // var bookContainer = document.createElement('div');
      // bookContainer.setAttribute('class', 'book_container')

function renderBookImage(err, data) {
  if (err) {
    console.log(err);
  } else {
    var books = JSON.parse(data);
    books.forEach(function(book) {
      
      // Create and Set Classes for BookContainer / bookImg / bookModal 
      var bookContainer = createAndSetAttribute('div', 'book_container');
      var bookModal = createAndSetAttribute('div', 'book_modal book_modal_hide');
      var bookImg = createAndSetAttribute('img', 'book_cover book_cover_hide');
      
      // Set img src to be equal to the cover_url
      bookImg.src = book.cover_url;
      
      // Append BookImg and bookModal to BookContainer
      bookContainer.appendChild(bookImg);
      bookContainer.appendChild(bookModal);

      // Append bookContainer to libraryContainer
      libraryContainer.appendChild(bookContainer)

      // Create and Dynamically set Inner Text of Element
      var bookTitleElement = createAndSetInnerText('p', 'Title: ' + book.book_name);
      var bookAuthorElement = createAndSetInnerText('p', 'Author: ' + book.author);

      // Append Created Elements to BookModal
      bookModal.appendChild(bookTitleElement);
      bookModal.appendChild(bookAuthorElement);

      // Toggle Classes on Click
      bookContainer.addEventListener('click', function() {
      bookImg.classList.toggle('book_cover_hide');
      bookModal.classList.toggle('book_modal_hide');
      })
    })
  }
}

fetchData('/books', renderBookImage);