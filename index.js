import User from "./classes/User.js";
import Library from "./classes/Library.js";
import Book from "./classes/Book.js";

const bookInfo = {
  title: "cradle",
  author: "Will wight",
  isbn: "2ykkfdh3284ihkcdskh834",
};
const book = new Book(bookInfo.title, bookInfo.author, bookInfo.isbn);
const library = new Library();
library.addNewBook(book);
const user = new User("bayo");
library.registerMember(user);
console.log("User 1st call", user);
console.log("Library 1st call", library);
console.log("Book 1st call", book);

console.log("number of books 1st call", user.bookCount);
user.pickBook("2ykkfdh3284ihkcdskh834", library);
console.log("User 2nd call", user);
console.log("Library 2nd call", library);
