function Card() {
  return (
    <>
      <div className="max-w-[188px] max-h-[355px] bg-[#050E12] rounded-md">
        <img
          className="object-cover rounded-md"
          src="https://placehold.co/193x290"
          alt="placeholder-image"
        />

        <div>
          <p className="font-inter font-bold text-lg capitalize truncate text-[#B6B6B6]">
            movie title
          </p>
          <p className="font-inter text-xs text-[#828282]">2021</p>
        </div>
      </div>
    </>
  );
}

export default Card;
