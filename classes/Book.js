import uniqid from "uniqid";
class Book {
  id = uniqid();
  #borrowed = false;
  constructor(title, author, isbn) {
    // this.id =
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  // methods
  isBorrowed() {
    return this.#borrowed;
  }

  changeBorrowState() {
    if (this.#borrowed) {
      this.#borrowed = false;
    } else {
      this.#borrowed = true;
    }
  }
}

export default Book;
