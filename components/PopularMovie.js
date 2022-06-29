import MovieCard from "./MovieCard";

const PopularMovie = ({ movies }) => {
  return (
    <div className=" container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-black text-bold text-2xl mt-8 mb-5">
        Popular Movies
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default PopularMovie;
