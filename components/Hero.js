import Link from "next/link";
import axios from "axios";
import Meta from "../components/Meta";
import { server } from "../config";
import MovieCard from "./MovieCard";
import Image from "next/image";

export default function Hero({ movies }) {
  //pick a random movie
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log(randomMovie);

  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/hero.svg"} width={200} height={200} layout="responsive" />
      </div>
      <h1 className="text-2xl uppercase font-bold text-gray-700">
        Welcome to watchMe
      </h1>
      <p className="text-gray-500">
        Platform for movie reviews, movie recomendation and ratings
      </p>
      <Link href={`/movie/${randomMovie.id}`} passHref>
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">
          Suggest a movie
        </button>
      </Link>
    </div>
  );
}
