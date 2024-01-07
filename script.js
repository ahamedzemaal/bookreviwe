// select overlay and popup
var popupbox = document.querySelector(".popupbox");
var overlay = document.querySelector(".overlay");

// select close button
var close = document.getElementById("close");

close.addEventListener("click", function (event) {
  popupbox.style.display = "none";
  overlay.style.display = "none";
  event.preventDefault(event);
});

// select add popup button
var addPopbtn = document.querySelector(".add-btn");

addPopbtn.addEventListener("click", function () {
  popupbox.style.display = "block";
  overlay.style.display = "block";
});

// select container,add book button, book name, author, description

var container = document.querySelector(".container");
var addBook = document.getElementById("addBook");
var bookname = document.getElementById("bookname");
var authname = document.getElementById("authname");
var desc = document.getElementById("desc");

addBook.addEventListener('click', function(event){
  event.preventDefault(event);

  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${bookname.value}</h2> <h5>${authname.value}</h5> <p>${desc.value}</p> <button onclick="dltBook(event)">Delete</button>`;

  container.append(div);
});

// select delete

function dltBook(event) {
  event.preventDefault(event);
  event.target.parentElement.remove()
}
