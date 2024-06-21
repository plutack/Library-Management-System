// import Book from "./book.js"

class Library {
  members = [];
  books = [];

  // FIX: sanitize check for methods to check the arguement passed (string||array||invalid)
  //methods
  registerMember(user) {
    try {
      if (this.members.some((member) => member.name === user.name)) {
        throw new Error(`${user.name} exists`);
      }
      this.members.push(user);
      console.log(`${user.name} successfully registered`);
    } catch (err) {
      console.log("Error", err.message);
    }
  }

  addNewBook(newBook) {
    try {
      if (this.books.some((book) => book.title === newBook.title)) {
        throw new Error(`${book.title} exists`);
      }
      this.books.push(newBook);
      console.log(`${newBook.title} successfully added`);
    } catch (err) {
      console.log("Error", err.message);
    }
  }
}
export default Library;
