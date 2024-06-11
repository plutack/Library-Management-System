import uniqid from "uniqid";
class User {
  /**
   * @param {string} id
   * @param {string} name
   * @param {string[]} borrowedBooks
   */
  constructor(name) {
    // property
    this.id = uniqid();
    this.borrowedBooks = [];
  }
  // FIX: sanitize check for methods to check the arguement passed (string||array||invalid)
  // methods
  pickBook(isbn, library) {
    try {
      if (this.borrowedBooks < 3) {
        const bookIndex = library.books.findIndex((book) => book.isbn === isbn);
        if (bookIndex !== -1) {
          const [book] = library.books.splice(bookIndex, 1);
          this.borrowedBooks.push(book);
          console.log(`${book.title} was borrowed successfully`);
          return book;
        }
        throw new Error(`book with ${isbn} does not exist in library`);
      }
      throw new Error("borrowed book count exceeded");
    } catch (err) {
      console.error("Error: ", err.message);
    }
  }

  returnBook(isbn, library) {
    try {
      const bookIndex = this.borrowedBooks.findIndex(
        (book) => book.isbn === isbn,
      );
      if (bookIndex !== -1) {
        const [book] = this.borrowedBooks.splice(bookIndex, 1);
        library.books.push(book);
        console.log(`${book.title} returned successfully`);
      } else {
        throw new Error(`user is not possesion book with isbn: ${isbn}`);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  }
}
export default User;
