/*

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



const LOTR = getBook(1);

console.log("Book", LOTR);

//Find Method practice
function capFullName(name) {
  return name
    .split(" ")
    .map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
    .join(" ");
}

function findAuthor(author) {
  const formattedName = capFullName(author);
  return data.find((auth) => auth.author === formattedName);
}

console.log("Finder", findAuthor("j. k. rowling"));

//map method
const books = getBooks();

const onlyTitles = books.map((book) => book.title);
console.log(onlyTitles);

const essentialData = books.map((book) => {
  return { title: book.title, author: book.author };
});

console.log(essentialData);

// Reduce method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log("All Pages", pagesAllBooks);

// Reduce Challenges

// //1
// console.log("REDUCE CHALLENGES");
// const myPrices = [19.99, 9.99, 4.99, 49.99];
// const totalPrice = myPrices.reduce(
//   (sum, price) => Number((sum + price).toFixed(2)),
//   0
// );
// console.log(totalPrice);

// Sort Method
const x = [3, 7, 1, 9, 6];
const sorted = x.slice().sort((a, b) => a - b);
console.log(x);
console.log(sorted);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log("Sorted by Pages", sortedByPages);

//Working with Immutable Arrays
//1 Add book object to Array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [newBook, ...books];
console.log("Extra Book", booksAfterAdd);

//2 Delete from Array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log("Deleted Book", booksAfterDelete);

//3 Update book object from array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, author: "Gary Wintle" } : book
);
console.log("After Update", booksAfterUpdate);

//Working with Immutable Arrays Challenges
const booksAfterDelete2 = books.filter((book) => book.title !== "Dune");
console.log("Challenge 2:", booksAfterDelete2);

const newPageCount = books.map((book) =>
  book.title === "The Cyberiad" ? { ...book, pages: 300 } : book
);
console.log("Challenge 3:", newPageCount);

const toggleHasMovie = books.map((book) =>
  book.id === 2
    ? { ...book, hasMovieAdaptation: !book.hasMovieAdaptation }
    : book
);
console.log("Challenge4:", toggleHasMovie);

const addedGenres = books.map((book) =>
  book.id === 3 ? { ...book, genres: [...book.genres, "classic"] } : book
);
console.log("Challenge 5:", addedGenres);

const addJapanese = books.map((book) =>
  book.id === 1
    ? { ...book, translations: { ...book.translations, japanese: "指輪物語" } }
    : book
);
console.log("Challenge Bonus:", addJapanese);

//2
// const tags = ["react", "javascript", "css", "react", "node", "css"];

// const orgTag = tags.reduce((acc, tag) => {
//   acc[tag] = (acc[tag] || 0) + 1;
//   return acc;
// }, {});

// const object = {};
// const key = "name";
// object[key] = "Gary";
// object["town"] = "Osaka";
// console.log(object);

// //Level 1
// const numbers = [1, 2, 3, 4, 5, 6];
// const duped = numbers.map((num) => num * 2);
// console.log(duped);

// const names = ["Bobby", "Billy", "Tommy"];
// const helloNames = names.map((name) => `Hello, ${name}!`);
// console.log(helloNames);

// // Level 2
// const newBooks = [{ title: "Dune" }, { title: "1984" }, { title: "Sapiens" }];
// const justTitles = newBooks.map((book) => book.title);
// console.log("Just Titles", justTitles);

// const greatBooks = books.map((book) => `The book ${book.title} is awesome!!`);
// console.log(greatBooks);

// const objNum = numbers.map((num) => {
//   return { original: num, squared: num * num };
// });
// console.log(objNum);

// //Level 3
// const prices = [12, 2, 4, 9, 21, 100, 1];
// const highPrices = prices.map((price) =>
//   price > 10 ? `${price}: Expensive!` : price
// );
// console.log(highPrices);

// const users = [
//   { user: "Dave", isOnline: true },
//   { user: "Tim", isOnline: false },
//   { user: "Beverly", isOnline: true },
//   { user: "Jean", isOnline: true },
//   { user: "Scott", isOnline: false },
// ];

// const onlineStatus = users.map((u) =>
//   u.isOnline ? `${u.user} is online` : `${u.user} is offline`
// );
// console.log("Nerds", onlineStatus);

// // Level 4
// const names2 = ["bobby", "billy", "tommy", "mortimer", "casey", "ryker"];
// const names2Proper = names2.map(
//   (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
// );
// console.log(names2Proper);

// const longShort = books.map(
//   (book) =>
//     `${book.title} is ${book.pages > 300 ? "long" : "short"} at ${
//       book.pages > 300 ? "" : "only "
//     }${book.pages} pages.`
// );

// console.log(longShort);

//Filter method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

// Filter Challenges
console.log("FILTER CHALLENGES!");
console.log(books[0]);

// // Level 1
// const bigBooks = books.filter((book) => book.pages > 500);
// console.log(bigBooks);

// const hasMovie = books.filter((book) => book.hasMovieAdaptation);
// console.log(hasMovie);

// const newishBooks = books.filter(
//   (book) => Number(book.publicationDate.split("-")[0]) > 1960
// );
// console.log(newishBooks);

// const byJK = books.filter((book) => book.author === "J. K. Rowling");
// console.log(byJK);

// // Level 2
// const smallTitles = books
//   .filter((book) => book.pages < 300)
//   .map((book) => book.title);
// console.log(smallTitles);

// const talentedAuthors = books
//   .filter((book) => book.reviews.goodreads.rating > 4.4)
//   .map((book) => book.author);
// console.log(talentedAuthors);

// const hasFlick = books
//   .filter((book) => book.hasMovieAdaptation)
//   .map((book) => book.title);
// console.log(hasFlick);

// Level 3

// //destructuring

// // Level 1
// const { title, author, pages, hasMovieAdaptation: isAdapted } = data[2];
// console.log(title, author, pages, isAdapted);

// // Level 2
// // const [primaryGenre, , thirdGenre] = data[3].genres;
// // console.log(primaryGenre, thirdGenre);

// const [primaryGenre, ...otherGenres] = data[3].genres;
// console.log(primaryGenre, ...otherGenres);

// // Level 3
// const { rating, reviewsCount } = data[4].reviews.librarything;
// console.log(rating, reviewsCount);

// const { rating: goodreadsScore } = data[0].reviews.goodreads;
// console.log(goodreadsScore);

// //Level 4
// const {
//   french = "Translation Unavailable",
//   japanese = "Translation Unavailable",
// } = data[0].translations;
// console.log(french, japanese);

// // Level 5
// const getShortInfo = function (book) {
//   const { title, author } = book;
//   return console.log(`${title} by ${author}`);
// };
// getShortInfo(data[0]);

// const getGenreSummary = function (book) {
//   const [
//     primaryGenre = "Genre not Available",
//     secondaryGenre = "Genre not Available",
//   ] = book.genres;
//   return console.log(`Main genres: ${primaryGenre} & ${secondaryGenre}`);
// };

// getGenreSummary(data[0]);

// // Level 6
// const {
//   title: theTitle,
//   genres: [topGenre],
//   reviews: {
//     goodreads: { reviewsCount: goodReadsReviewCount },
//   },
// } = data[4];

// console.log(theTitle, topGenre, goodReadsReviewCount);

// //Level 7
// const allBooks = data.map((book) => {
//   const { title, pages } = book;
//   return `Title: ${title}, Pages: ${pages}`;
// });

// allBooks;

// const reviewArray = data.map((book) => {
//   const {
//     title,
//     reviews: {
//       goodreads: { rating },
//     },
//   } = book;
//   return { title, rating };
// });

// console.log(reviewArray);

// // reviews: {
// //   goodreads: {
// //     rating: 4.44,
// //     ratingsCount: 2295233,
// //     reviewsCount: 59058,
// //   },

// function displayBook({ title, author, pages }) {
//   console.log(`${title} by ${author}. It is ${pages} long!`);
// }

// displayBook(data[2]);

// Rest/Spread Operator

// const { genres } = data[0];
// const [firstGenre, secondGenre, ...otherGenres] = genres;

// console.log(otherGenres);

// const newGenres = ["thriller", ...genres];

// console.log(newGenres);

// const book = data[0];

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 69,
//   author: "Gary Wintle",
// };

// console.log(updatedBook);

// Level 1
// const { genres } = data[1];
// const [firstGenre, ...remainingGenres] = genres;

// console.log(genres);
// console.log(firstGenre);
// console.log(remainingGenres);

// // Level 2
// const addedGenres = ["classic", "epic", ...genres];
// console.log(addedGenres);

// const LOTR = data[0];

// const newBook = { ...LOTR, pages: 999, hasGayWizard: true };

// console.log("new", newBook);

// //Level 3

// const newArray = [...data[0].genres, ...data[4].genres];

// const finalArray = new Set(newArray);

// console.log("newArray", newArray);
// console.log("finalArray", finalArray);

// const summarizeBook = function (book) {
//   const { title, author, ...junk } = book;
//   console.log(`${title} by ${author}`);
//   console.log("junk inside", junk);
//   return junk;
// };

// const leftover = summarizeBook(data[0]);
// console.log("junk outside", leftover);
// console.log(Object.keys(leftover));

// Ternary Operator

// const { title, pages, hasMovieAdaptation: hasMovie, publicationDate } = data[0];

// console.log(pages);

// const pagesRange = pages > 1000 ? "You a big boy" : "You still a baby";

// pagesRange;

// console.log(`${pagesRange} for reading this book!`);

// console.log(hasMovie);

// const getYear = (str) => str.split("-")[0];

// console.log(
//   `${title} was published in ${getYear(publicationDate)}, and has${
//     hasMovie === true ? " totally" : "n't ever"
//   } been adapted as a movie. ${hasMovie === true ? "" : "Ya queef."}`
// );

// console.log(publicationDate.split("-")[0]);

// // Short-circuiting and Logical Operators

// console.log(true && "Some String");
// console.log(false && "Some String");
// console.log(hasMovie && "This book has a movie");
// console.log("Gary" && "I'm here!");
// console.log(null && "I'm here!");

// console.log(true || "Some string");
// console.log(false || "Some string");

// const spanishTranslation = data[1].translations.spanish || "No translation";

// console.log(spanishTranslation);

// // 1. Show "Loading..." if still loading
// const output = isLoading && "Loading...";

// // 2. Only call `handleSubmit` if it exists
// handleSubmit && handleSubmit();

// // 3. Use 0 if value is 0, but 10 if it's null or undefined
// const amount = input ?? 10;

// // 4. Show "Guest" if name is empty string or undefined
// const userName = name || "Guest";

// const book = data[2];

// // Optional Chaining
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

*/
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data[0]));

// console.log("gary");

// async function getTodos() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// const todos = getTodos();
// console.log("Casey and Ryker");
// console.log(todos);

//Challenge 1 and 2
// const myAsync = async function () {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     const titles = await data.map((item) => item.title);
//     const firstTitle = titles[0];
//     console.log(firstTitle);
//   } catch (error) {
//     console.error("Failed to fetch todos:", error.message);
//   }
// };

// myAsync();
const pokeForm = document.getElementById("poke-form");
const pokeInput = document.getElementById("poke-input");
const pokeContainer = document.getElementById("poke-container");
const title = document.getElementById("title");

//Pokemon API Challenge
const pokeTest = async (pokemonName = "pikachu") => {
  try {
    // Show loading message
    loadingMessage.textContent = "Loading Pokémon...";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();

    const {
      name,
      height,
      base_experience: baseExp,
      sprites: { front_default: imgUrl } = {},
    } = data;

    // Clear old content
    pokeContainer.innerHTML = "";

    //Create Image
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = `${pokemonName} sprite`;

    //Capitalize name
    const displayName = name[0].toUpperCase() + name.slice(1);

    //Add Title
    title.textContent = displayName;

    //Add Caption
    const caption = document.createElement("p");
    caption.textContent = `${displayName} is ${height} decimeters tall and has ${baseExp} base XP.`;

    //Append to DOM
    pokeContainer.append(img, caption);
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokedata:", error.message);
    pokeContainer.innerHTML = `<p style="color: red;"> Couldn't find that Pokemon. Please try again!</p>`;
  } finally {
    // Hide loading message
    loadingMessage.textContent = "";
  }
};

pokeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = pokeInput.value.trim().toLowerCase();
  pokeTest(input);
});

//Challenge 3
const myAsync2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    const firstId = data[0].id;

    const secondRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${firstId}`
    );
    const todoDetail = await secondRes.json();

    console.log("All todos:", data);
    console.log("Details of first todo:", todoDetail);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
};

// myAsync2();

const ids = [1, 2, 3, 4];

function fetchItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Item ${id}` });
    }, Math.random() * 1000);
  });
}

async function getItemName(id) {
  const fetchPromises = ids.map((id) => fetchItem(id));
  const items = await Promise.all(fetchPromises);
  items.forEach((item) => console.log(item.name));
}

// getItemName(3);
