import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MoveList";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </>
  );
}
