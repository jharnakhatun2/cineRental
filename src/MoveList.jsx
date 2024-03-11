import MovieCard from "./components/MovieCard";
import { getMovieData } from "./data/movies";
export default function MovieList() {
  const data = getMovieData();
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {data.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
