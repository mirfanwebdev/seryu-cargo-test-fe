import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";
import WatchlistPage from "../pages/WatchlistPage";
import FavoritePage from "../pages/FavoritePage";
import ProtectedRoute from "./ProtectedRoute";
import AuthCallback from "../pages/AuthCallback";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/movie/:id",
    element: <MovieDetailPage />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
  {
    path: "/watchlist",
    element: (
      <ProtectedRoute>
        <WatchlistPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/favorite",
    element: (
      <ProtectedRoute>
        <FavoritePage />
      </ProtectedRoute>
    ),
  },
]);

export default routes;
