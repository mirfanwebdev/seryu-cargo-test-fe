function Header() {
  return (
    <div className="flex justify-between items-center w-screen bg-[#0EA5E9] max-h-[100px] px-[120px]">
      <h1 className="font-black tracking-widest font-poppins text-5xl leading-[72px] uppercase">
        cinema
      </h1>
      <div className="font-roboto text-xl flex gap-8">
        <p>Favorites</p>
        <p>Watchlist</p>
      </div>
    </div>
  );
}

export default Header;
