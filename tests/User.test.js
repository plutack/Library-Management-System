import uniqid from "uniqid";
import Book from "../src/classes/Book.js";
import Library from "../src/classes/Library.js";
import User from "../src/classes/User.js";
import {
  bookInfo,
  bookInfo2,
  bookInfo3,
  bookInfo4,
  userName,
  mockUserId,
} from "./__mocks__/data.js";
jest.mock("uniqid", () => jest.fn());

beforeEach(() => {
  uniqid.mockClear();
});
describe("User class", () => {
  it("should create a new user ", () => {
    uniqid.mockImplementation(() => mockUserId);
    const newUser = new User(userName);
    expect(newUser).toBeInstanceOf(User);
    expect(newUser.id).toBe(mockUserId);
    expect(newUser.borrowedBooks.length).toBe(0);
  });
  it("should pick a single book", () => {
    const newBook = new Book(bookInfo);
    const newLibrary = new Library();
    newLibrary.addNewBook(newBook);
    const newUser = new User(userName);
    newLibrary.registerMember(newUser);
    newUser.pickBook(bookInfo.isbn, newLibrary);
    expect(newUser.borrowedBooks.length).toBe(1);
    expect(newUser.borrowedBooks[0].borrowed).toBe(true);
    expect(newLibrary.books.length).toBe(0);
  });
  it("should not pick a book (borrowedBook count exceeded)", () => {
    const newBook = new Book(bookInfo);
    const newBook2 = new Book(bookInfo2);
    const newBook3 = new Book(bookInfo3);
    const newBook4 = new Book(bookInfo4);

    const newLibrary = new Library();

    newLibrary.addNewBook(newBook);
    newLibrary.addNewBook(newBook2);
    newLibrary.addNewBook(newBook3);
    newLibrary.addNewBook(newBook4);
    const newUser = new User(userName);
    newLibrary.registerMember(newUser);

    // Borrow the maximum number of books allowed
    const allBooks = [newBook, newBook2, newBook3];
    allBooks.forEach((book) => {
      newUser.pickBook(book.isbn, newLibrary);
    });

    // Try to borrow another book
    newUser.pickBook(bookInfo4.isbn, newLibrary);

    // Expect the borrowedBooks length to still be 3
    expect(newUser.borrowedBooks.length).toBe(3);
    expect(newLibrary.books.length).toBe(1);
  });

  it("should not pick a book (book does not exist)", () => {
    const newLibrary = new Library();
    const newUser = new User(userName);
    newLibrary.registerMember(newUser);

    // Try to borrow a book that does not exist
    newUser.pickBook("nonexistent-isbn", newLibrary);

    // Expect the borrowedBooks length to be 0
    expect(newUser.borrowedBooks.length).toBe(0);
    expect(newLibrary.books.length).toBe(0);
  });

  it("should return a book", () => {
    const newBook = new Book(bookInfo);
    const newLibrary = new Library();
    newLibrary.addNewBook(newBook);
    const newUser = new User(userName);
    newLibrary.registerMember(newUser);
    newUser.pickBook(bookInfo.isbn, newLibrary);

    // Return the borrowed book
    newUser.returnBook(bookInfo.isbn, newLibrary);

    // Expect the borrowedBooks length to be 0
    expect(newUser.borrowedBooks.length).toBe(0);
    expect(newLibrary.books.length).toBe(1);
  });

  it("should return 3 books", () => {
    const newBook = new Book(bookInfo);
    const newLibrary = new Library();
    newLibrary.addNewBook(newBook);
    const newUser = new User(userName);
    newLibrary.registerMember(newUser);

    // Borrow 3 books
    for (let i = 0; i < 3; i++) {
      newUser.pickBook(bookInfo.isbn, newLibrary);
    }

    // Return the 3 borrowed books
    for (let i = 0; i < 3; i++) {
      newUser.returnBook(bookInfo.isbn, newLibrary);
    }

    // Expect the borrowedBooks length to be 0
    expect(newUser.borrowedBooks.length).toBe(0);
    expect(newLibrary.books.length).toBe(1);
  });

  it("should not return a book (book was not borrowed)", () => {
    const newBook = new Book(bookInfo);
    const newLibrary = new Library();
    newLibrary.addNewBook(newBook);
    const newUser = new User(userName);
    newLibrary.registerMember(newUser);

    // Try to return a book that was not borrowed
    newUser.returnBook(bookInfo.isbn, newLibrary);

    // Expect the borrowedBooks length to be 0
    expect(newUser.borrowedBooks.length).toBe(0);
    expect(newLibrary.books.length).toBe(1);
  });
});
