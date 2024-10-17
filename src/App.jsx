import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen relative">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
