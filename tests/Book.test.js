import uniqid from "uniqid";
import Book from "../src/classes/Book.js";
import { bookInfo, mockBookId } from "./__mocks__/data.js";
jest.mock("uniqid", () => jest.fn());

describe("Book class", () => {
  beforeEach(() => {
    uniqid.mockClear();
  });
  it("should create a book with a unique id, title, author and isbn", () => {
    uniqid.mockImplementation(() => mockBookId);
    const newBook = new Book(bookInfo);
    expect(uniqid).toHaveBeenCalledTimes(1);
    expect(newBook).toBeInstanceOf(Book);
    expect(newBook.id).toBe(mockBookId);
    expect(newBook.title).toBe(bookInfo.title);
    expect(newBook.author).toBe(bookInfo.author);
    expect(newBook.isbn).toBe(bookInfo.isbn);
    expect(newBook.borrowed).toBe(false);
    expect(typeof newBook.isBorrowed).toBe("function");
  });
});
