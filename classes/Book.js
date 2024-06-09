import uniqid from "uniqid";
class Book {
  constructor(bookInfo) {
    this.id = uniqid();
    this.title = bookInfo.title;
    this.author = bookInfo.author;
    this.isbn = bookInfo.isbn;
    this.borrowed = false;
  }

  // methods
  isBorrowed() {
    return this.borrowed;
  }
}

export default Book;
