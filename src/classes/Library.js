// import Book from "./book.js"

class Library {
  members = [];
  books = [];

  //methods
  #searchByIsbn(isbn, bookCollection) {
    for (const book of bookCollection) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return undefined;
  }
  registerMember(user) {
    this.members.push(user);
    console.log("success");
    return;
  }

  addNewBook(book) {
    this.books.push(book);
    console.log("success");
    return;
  }

  borrowBook(user, isbn) {
    const book = this.#searchByIsbn(isbn, this.books);
    if (book && user.bookcount < 3) {
      return true;
    }
    if (!book) {
      console.log("book does not exceeded");
      return;
    }
    if (user.bookCount >= 3) {
      console.log("number of book that can be  borrowed exceeded");
      return;
    }
    console.log("book cannot be borrowed");
  }
}
export default Library;
