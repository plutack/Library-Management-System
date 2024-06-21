import uniqid from "uniqid";
class User {
  constructor(name) {
    // property
    this.id = uniqid();
    this.name = name;
    this.borrowedBooks = [];
  }

  pickBook(isbn, library) {
    try {
      if (this.borrowedBooks.length < 3) {
        const bookIndex = library.books.findIndex((book) => book.isbn === isbn);
        console.log(bookIndex);
        if (bookIndex !== -1) {
          const [book] = library.books.splice(bookIndex, 1);
          book.borrowed = true;
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
        (book) => book.isbn === isbn
      );
      if (bookIndex !== -1) {
        const [book] = this.borrowedBooks.splice(bookIndex, 1);
        book.borrowed = false;
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
