const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


const book = getBook(2);

console.log(book);
// Destructuring Obj
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryyGenre = genres[1];

//  Destructuring Arr & rest operator
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

console.log(primaryGenre, secondaryGenre, otherGenre);
// spread operator Arr
const newGenres = [...genres, 'epic fantasy'];
const newGenres1 = ['epic fantasy', ...genres];
console.log(newGenres, newGenres1);
// spread operator Obj
const updatedBook = {
  ...book,
  // updating exiting property
  pages: 1256,
  // adding a new property
  moviePublicationDate: "2001-05-07"
};
console.log(updatedBook);

/*
Template Literals
Ternary Operators
Arrow Functions
*/

const getYear = (str) => str.split('-')[0];

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)} and
 has ${hasMovieAdaptation ? '' : 'no '}movie adaption `;

// function getYear(publicationDate) {
//   return publicationDate.split('-')[0];
// }
// move before the func call as func expr var getYear wont be intialized - only var is declared & hoisted, but not intialized  
// const getYear = (str) => str.split('-')[0]; 

console.log(summary);

// short circuiting with logical operators
console.log(true && "something");
console.log(false && "something");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy 0,'', null, undefined

console.log(true || "something");
console.log(false || "something");
console.log(book.translations.polish || 'Not Translated');
// data is present & its value is 0, here || will give falsy value for such cases use nullish coalescing operator
console.log(book.reviews.librarything.reviewsCount);

console.log(book.reviews.librarything.reviewsCount || 'no data'); // wrong output as 0 is the value & result is no data
console.log(book.reviews.librarything.reviewsCount ?? 'no data'); // correct output as 0 is the value & result is 0
// truthy  1,'s', {}, []

// Optional Chaining
function getBookTotalReviewCount(id) {

  const book = getBook(id);
  // const goodreads = book.reviews.goodreads.reviewsCount; 
  // optional chaining if value is undefined
  const goodreads = book.reviews.goodreads?.reviewsCount || 0;
  const librarything = book.reviews.librarything?.reviewsCount || 0;

  return goodreads + librarything;
}

console.log(getBookTotalReviewCount(1));
console.log(getBookTotalReviewCount(3));

// Array methods
// map
const books = getBooks();

const doubleArr = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(doubleArr);

const titles = books.map(book => book.title);
console.log(titles);

// const essentialData = books.map((book) => { return { title: book.title, author: book.author } });
const essentialData = books.map((book) => ({ title: book.title, author: book.author, reviewsCount: getBookTotalReviewCount(book.id) }));
console.log(essentialData);

// filter
const longBooks = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books.filter(book => book.genres.includes('adventure')).map(book => book.title);
console.log(adventureBooks);

// reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// sort
const sortArr = [1, 6, 35, 8, 5];
// ascending
sortArr.sort((a, b) => a - b);
console.log(sortArr);
// descending
sortArr.sort((a, b) => b - a)
console.log(sortArr);
// to not modify the original array
const sortedArr = sortArr.slice().sort((a, b) => a - b);
console.log(sortArr, sortedArr);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// Working with Immutable Arrays

// add obj to books arr
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling"
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// delete obj to books arr
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
console.log(booksAfterDelete);

// update book obj in books arr
const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? { ...book, pages: 1210 } : book);
console.log(booksAfterUpdate);

// Asynchronous JS Promises

// fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => console.log(data));
// console.log('Yoyo');

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data.length);

  // return data;
}

getTodos();
// const todos = getTodos();
// console.log(todos);

console.log('yoyo');