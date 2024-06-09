import uniqid from "uniqid";
/**
 * class to create a book object
 */
class Book {
  /**
   *@property {string} id
   *@property {boolean} borrowed
   */
  id = uniqid();
  borrowed = false;
  /**
   *@param {object} bookInfo
   *@param {string} bookInfo.title
   *@param {string} bookInfo.author
   *@param {string} bookInfo.isbn
   */
  constructor(bookInfo) {
    /**
     *@property {string} title
     *@property {string} author
     *@property {string} isbn
     */
    this.title = bookInfo.title;
    this.author = bookInfo.author;
    this.isbn = bookInfo.isbn;
  }

  // methods
  /**
   *@property {function} isBorrowed
   *@returns {boolean}
   */
  isBorrowed() {
    return this.borrowed;
  }
}

export default Book;
