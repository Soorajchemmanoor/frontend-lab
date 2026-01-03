//Mapping

//Create a new array containing only the titles

const movieTitles = movies.map(movie => movie.title);
console.log(movieTitles);

//Create a new array with title + IMDb rating

const titlesWithRatings = movies.map(movie => ({
  title: movie.title,
  imdbRating: movie.imdbRating
}));

console.log(titlesWithRatings);


//Filtering

//Thriller movies released after 2000

const thrillersAfter2000 = movies.filter(
  movie => movie.genre === "Thriller" && movie.year > 2000
);

console.log(thrillersAfter2000);

//Drama movies with IMDb rating above 8.5

const highRatedDramas = movies.filter(
  movie => movie.genre === "Drama" && movie.imdbRating > 8.5
);

console.log(highRatedDramas);

//Action movies starring Leonardo DiCaprio

const leoActionMovies = movies.filter(
  movie =>
    movie.genre === "Action" &&
    movie.actors.includes("Leonardo DiCaprio")
);

console.log(leoActionMovies);

//Chaining

//Drama movies featuring Christian Bale

const dramaWithChristianBale = movies.filter(movie => movie.genre === "Drama").filter(movie => movie.actors.includes("Christian Bale"));
console.log(dramaWithChristianBale);