'use strict';
// var id = 1000
// localStorage.setItem('id', 1000)
// localStorage.setItem('ids', [])

class Book {
    static staticid = 1000
    /**
     * 
     * @param {string} name 
     * @param {string} description 
     * @param {string} author 
     * @param {string} other 
     * @param {Number} cost 
     */
    constructor(name, description, author = '', other = '', cost = '') {
        // let old = localStorage.getItem('id');

        this.id = Book.staticid++
        this.name = name
        this.description = description
        this.author = author
        this.other = other
        this.cost = cost
    }
    setauthor(author) {
        this.author = author
    }
    getauthor() {
        if (this.author) {
            return this.author
        }
        return ''
    }
    setother(other) {
        this.other = other
    }
    getother() {
        if (this.other) {
            return this.other
        }
        return ''
    }
    setcost(cost) {
        this.cost = cost
    }
    getcost() {
        if (this.cost) {
            return this.cost
        }
        return ''
    }
}
/**
 * 
 * @param {Array.<Book>} books 
 */
function setBooks(books) {
    localStorage.setItem('books', JSON.stringify({ books }))
}
// setBooks([])

/**
 * 
 * @returns {Array.<Book>}
 */
function getAllBooks() {
    return JSON.parse(localStorage.getItem('books')).books
}
/**
 * 
 * @param {Number} id
 * @returns {Array.<Book>}
 */
function getBooksById(id) {
    return getAllBooks().filter(b => b.id == id)
}

/**
 * 
 * @param {Book} b
 */
function addBookToLocalStorage(b) {
    let books = getAllBooks()
    books.push(b)
    setBooks(books)
}
function addBook(name, description, author, other, cost) {
    let b = new Book(name, description, author, other, cost)
    addBookToLocalStorage(b)
}

/**
 * 
 * @param {Number} id 
 * @returns 
 */
function removeBook(id) {
    let books = getAllBooks()
    books = books.filter(b => b.id != id)
    // localStorage.setItem('books', books)
    setBooks(books)
}

function editBook(id, name, description, author, other, cost) {
    let books = getAllBooks()

    let bookitem = books.filter(b => b.id == id)[0]
    bookitem.description = description
    bookitem.name = name
    bookitem.author = author
    bookitem.other = other
    bookitem.cost = cost

    // localStorage.setItem('books', books)
    setBooks(books)
}

// //for page.html
// let titles = document.getElementById('titles')//side link
// let title2 = document.getElementById('title2')//main title
// let para = document.getElementById('para')//para for main content - details
// let books = getAllBooks()
// let author = document.getElementById('author')
// let other_details = document.getElementById('other_details')
// let cost = document.getElementById('cost')



// /**
//  * 
//  * @param {Array.<Book>} books 
//  */
// function genetrateTitlesList(books) {
//     for (let b of books) {
//         let a = document.createElement('a')
//         a.innerText = b.name
//         let li = document.createElement('li')
//         li.setAttribute('id', b.id)
//         li.appendChild(a)
//         li.addEventListener('click', function(){
//             //display b on page
//             title2.innerText = b.name
//             para.innerText = b.description
//             other_details.innerText = `Other details: ${b.other}`
//             author.innerText = `Author: ${b.author}`
//             cost.innerText = `Cost: ${b.cost}`
//         })
//         titles.append(li)

//     }
// }
// genetrateTitlesList(getAllBooks())

//for add.html

//syncing db
if (!localStorage.getItem('books')) {
    // localStorage.setItem('books', []);
    setBooks([])
    addBook('book1', 'desc', 'auth', 'other', 100)
    addBook('book2', 'desc', 'auth', 'other', 100)
    addBook('book3', 'desc', 'auth', 'other', 100)
    addBook('book4', 'desc', 'auth', 'other', 100)
}