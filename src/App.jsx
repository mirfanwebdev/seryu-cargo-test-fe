// import Card from "./components/Card";
// import ContainerSection from "./components/ContainerSection";
// import Header from "./components/Header";
import { RouterProvider } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import WatchlistPage from "./pages/WatchlistPage";
import routes from "./routes";

function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
