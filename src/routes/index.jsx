import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import WatchlistPage from "../pages/WatchlistPage";
import FavoritePage from "../pages/FavoritePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailPage />,
  },
  {
    path: "/watchlist",
    element: <WatchlistPage />,
  },
  {
    path: "/favorite",
    element: <FavoritePage />,
  },
]);

export default routes;
