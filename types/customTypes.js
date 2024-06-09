/**
 *@typedef {object} BookInfo
 *@property {string} title
 *@property {string} author
 *@property {string} isbn
 */

/**
 *@class Book
 *@classdesc represents Book class
 *@property {string} id
 *@property {BookInfo} bookInfo
 *@property {boolean} borrowed
 */

/**
 *@class User
 *@classdesc represents User class
 *@property {string} id
 *@property {string} name
 *@property {Book[]} borrowedBooks
 */

/**
 *@class Library
 *@classdesc represents Library class
 *@property {User[]} members
 *@property {Book[]} books
 */
