import Library from "../classes/Library.js";
import Book from "../classes/Book.js";
import { bookInfo } from "./__mocks__/data.js";

describe("Library class", () => {
  it("should create a new library with no members and books", () => {
    const newLibrary = new Library();
    expect(newLibrary).toBeInstanceOf(Library);
    expect(newLibrary.members.length).toBe(0);
    expect(newLibrary.books.length).toBe(0);
  });
  it("should add a member", () => {
    // const newUser = new User("John Doe")
  });
  it("should add a book", () => {
    const newBook = new Book(bookInfo);
    const newLibrary = new Library();
    newLibrary.addNewBook(newBook);

    expect(newLibrary.books.length).toBe(1);
  });
});
