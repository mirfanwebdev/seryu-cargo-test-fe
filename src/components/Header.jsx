import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full bg-[#0EA5E9] min-h-[100px] px-4 md:px-[120px]">
      <Link to={"/"}>
        <h1 className="font-black tracking-widest font-poppins text-5xl leading-[72px] uppercase">
          cinema
        </h1>
      </Link>
      <div className="font-roboto text-xl flex gap-8">
        <Link to={"/favorite"}>Favorites</Link>
        <Link to={"/watchlist"}>Watchlist</Link>
        <Logout />
      </div>
    </div>
  );
}

export default Header;
