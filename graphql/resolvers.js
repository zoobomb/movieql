import { getMovies, getById, addMovie } from "./database";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { title, score }) => addMovie(title, score),
  },
};

export default resolvers;
