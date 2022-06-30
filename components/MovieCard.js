import Link from "next/link";
import Image from "next/image";
const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <Image
            width={250}
            height={380}
            className="pb-2 rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-3">
          <Link href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </Link>
          <div className="flex items-center mt-2.5 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {movie.vote_average}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Trailer
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
