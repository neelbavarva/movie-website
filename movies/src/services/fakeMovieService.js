import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "1",
    title: "Interstellar",
    image : "/images/interstellar.jpg",
    genre: { _id: "1", name: "Sci-fi" },
    year: "2014",
    time: "2h 49m",
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false
  },
  {
    _id: "2",
    title: "The Dark Knight",
    image : "https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
    genre: { _id: "2", name: "Action" },
    year: "2008",
    time: "2h 32m",
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: true
  },
  {
    _id: "3",
    title: "Inception",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRo9vfJCM6dzPkZHIHBVCtlJnAnew9Ai26kEdrli0-tfmatmciD",
    genre: { _id: "3", name: "Action" },
    year: "2010",
    time: "2h 42m",
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "4",
    title: "Godfather",
    genre: { _id: "4", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5",
    title: "Se7en",
    genre: { _id: "5", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "6",
    title: "Fight Club",
    genre: { _id: "5", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "6",
    title: "Shawshank Redemption",
    genre: { _id: "6", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: false
  },
  {
    _id: "7",
    title: "Shutter Island",
    genre: { _id: "7", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: true
  },
  {
    _id: "8",
    title: "John Wick",
    genre: { _id: "8", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}