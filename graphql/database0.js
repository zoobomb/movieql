let movies = [
  {
    id: 0,
    title: "Star Wars",
    score: 70,
  },
  {
    id: 1,
    title: "Avengers",
    score: 88,
  },
  {
    id: 2,
    title: "Totoro",
    score: 77,
  },
  {
    id: 3,
    title: "Pokemon",
    score: 60,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovie = movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = (id) => {
  const cleanedMovie = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (title, score) => {
  const newMovie = {
    id: movies.length,
    title,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
