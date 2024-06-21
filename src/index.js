import User from "./classes/User.js";
import Library from "./classes/Library.js";
import Book from "./classes/Book.js";

const bookInfo = {
  title: "cradle",
  author: "Will wight",
  isbn: "2ykkfdh3284ihkcdskh834",
};
const bookInfo2 = {
  title: "cradle1",
  author: "aaa wight",
  isbn: "2ykaakfdh3284ihkcdskh834",
};
const book = new Book(bookInfo);
const book2 = new Book(bookInfo2)
const library = new Library();
library.addNewBook(book);
library.addNewBook(book2);
const user = new User("bayo");
library.registerMember(user);
console.log("User 1st call", user);
console.log("Library 1st call", library);
console.log("Book 1st call", book);

console.log("number of books 1st call", user.bookCount);
user.pickBook("2ykkfdh3284ihkcdskh834", library);
user.pickBook(book2.isbn, library )
console.log("User 2nd call", user);
console.log("Library 2nd call", library);
