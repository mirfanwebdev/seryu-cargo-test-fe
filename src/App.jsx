// import Card from "./components/Card";
// import ContainerSection from "./components/ContainerSection";
// import Header from "./components/Header";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import WatchlistPage from "./pages/WatchlistPage";

function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <MovieDetailPage />
      </div>
    </>
  );
}

export default App;
