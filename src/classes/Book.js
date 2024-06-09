import uniqid from "uniqid";
/**
 *@typedef {import("../../types/customTypes").Book} Book
 *@typedef {import("../../types/customTypes").BookInfo} BookInfo
 */

/**
 *class to create a book object
 *@class
 */
class Book {
  /**
   *@param {BookInfo} bookInfo
   */
  constructor(bookInfo) {
    /**
     *@type {string}
     */
    this.id = uniqid();
    /**
     *@type {string}
     */
    this.title = bookInfo.title;
    /**
     *@type {string}
     */
    this.author = bookInfo.author;
    /**
     *@type {string}
     */
    this.isbn = bookInfo.isbn;
    /**
     *@type {boolean}
     */
    this.borrowed = false;
  }

  // methods
  /**
   *@type {function}
   *@returns {boolean}
   */
  isBorrowed() {
    return this.borrowed;
  }
}

export default Book;
