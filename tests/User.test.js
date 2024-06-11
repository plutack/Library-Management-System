import uniqid from "uniqid";
import Book from "../classes/Book.js";
import Library from "../classes/Library.js";
import User  from "../classes/User.js";
import { bookInfo, userName, mockUserId } from "./__mocks__/data.js";
jest.mock("uniqid", () => jest.fn());

beforeEach(()=>{
  uniqid.mockClear()
})

Describe("User class", ()=>{
 it("should create a new user ", ()=>{
    uniqid.mockImplementation(() => mockUserId);
   const newUser = new User(userName)
   expect(newUser).toBeInstanceOf(User)
   expect(newUser.id).toBe.(mockUserId)
   expect(newUser.borrowedBooks.length).toBe(0)
 }) 
 it("should pick a book", ()=>{
   const newBook = new Book(bookInfo)
   const newLibrary = new Library()
   newLibrary.addNewBook(newBook)
   const newUser = new User(userName)
   newLibrary.registerMember(newUser)
   newUser.pickBook(bookInfo.isbn)
   expect(newUser.borrowedBooks).toBe(1)
   expect(newUser.borrowedbooks[0].borrowed).toBe.(true)
   expect(newLibrary.book).toBe(0)
 })
})
