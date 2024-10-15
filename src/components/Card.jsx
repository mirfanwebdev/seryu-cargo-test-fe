import ContainerButton from "./ContainerButton";

function Card() {
  return (
    <>
      <div className="w-[188px] h-[355px] bg-[#050E12] rounded-md flex-none relative">
        <div className="relative group">
          <img
            className="object-cover rounded-md"
            src="https://placehold.co/193x290"
            alt="placeholder-image"
          />
          <div className="hidden group-hover:flex gap-2.5 absolute bottom-2.5 right-2.5">
            <ContainerButton />
          </div>
        </div>
        <div className="pt-3 pl-4">
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
