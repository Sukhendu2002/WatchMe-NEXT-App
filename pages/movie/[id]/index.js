import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import Link from "next/link";

const Movie = ({ movie }) => {
  return (
    <div className="container max-w-4xl mx-auto pt-6 mb-6">
      <Meta title={movie.title} />
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        width={1500}
        height={850}
        className="rounded-md"
        alt={movie.title}
      />
      <div className="px-3">
        <h1 className="font-bold text-3xl my-2">{movie.title}</h1>
        <p className="text-gray-700 text-m mt-4">{movie.overview}</p>
        <div className="flex justify-between">
          <div className="  ">
            <p className="mt-5 text-gray-600 text-m">
              Genres:{" "}
              <span className="font-bold">
                {movie.genres.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              Release Date:{" "}
              <span className="font-bold">{movie.release_date}</span>
            </p>
          </div>
          <Link href={movie.homepage} target="_blank">
            <button
              type="button"
              className="border  border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Trailer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
