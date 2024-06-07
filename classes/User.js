import uniqid from "uniqid";
class User {
  bookCount = 0;
  id = uniqid();
  /**
   * @param {string} id
   * @param {string} name
   * @param {string[]} borrowedBooks
   */
  constructor(name) {
    // property
    // this.id = id
    this.name = name;
    this.borrowedBooks = [];
  }
  // methods
  /**
     *@param {string} isbn 
     *@param {string[]} bookCollection
     *@returns {Book || undefined} 
    
    */
  #searchByIsbn(isbn, bookCollection) {
    for (const book of bookCollection) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return undefined;
  }
  pickBook(isbn, library) {
    //
    const book = this.#searchByIsbn(isbn, library.books);
    if (book) {
      library.this.borrowedBooks.push();
      library.books = library.books.filter((book) => book.isbn !== isbn);
      this.bookCount++;
      console.log(`${book} was borrowed successfully`);
      return this;
    }
    console.log("book does not exist");
  }

  returnBook(isbn, library) {
    const book = this.#searchByIsbn(isbn, this.borrowedBooks);
    if (book) {
      this.borrowedBooks = this.borrowedBooks.filter(
        (book) => book.isbn !== isbn,
      );
      library.books.push(book);
    }
  }
}
export default User;
