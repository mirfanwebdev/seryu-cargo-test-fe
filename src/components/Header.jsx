import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center w-full bg-[#0EA5E9] max-h-[100px] px-[120px]">
      <h1 className="font-black tracking-widest font-poppins text-5xl leading-[72px] uppercase">
        cinema
      </h1>
      <div className="font-roboto text-xl flex gap-8">
        <Link to={"/favorite"}>Favorites</Link>
        <Link to={"/watchlist"}>Watchlist</Link>
      </div>
    </div>
  );
}

export default Header;
