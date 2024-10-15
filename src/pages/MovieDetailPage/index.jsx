import { CardListScrollable } from "../../components/CardList";
import { Card } from "../../components/Cards";
import ContainerButton from "../../components/ContainerButton";
import ContainerSection from "../../components/ContainerSection";
import Header from "../../components/Header";

function MovieDetailPage() {
  return (
    <>
      <Header />
      <div className="h-[400px] w-full bg-slate-500 py-[50px] px-[120px]">
        <div className="flex gap-5">
          <div className="w-[200px]">
            <img
              src="https://placehold.co/200x300"
              alt="cover-image"
              className="object-cover"
            />
          </div>
          <div className="font-roboto text-sm pt-[25px]">
            <h1 className="font-poppins font-bold text-[32px]">
              Movie Title<span className="font-normal"> (2020)</span>
            </h1>
            <p className="pt-2">01/01/2020 Drama,History 3h 15m</p>
            <div className="flex gap-2 py-[25px]">
              <ContainerButton />
            </div>
            <p>the world forever change</p>
            <div className="pt-2.5">
              <p className="font-bold pb-[5px]">Overview</p>
              <p>the story of hero who found himself</p>
            </div>
          </div>
        </div>
      </div>
      <ContainerSection title={"similar movies"}>
        <CardListScrollable>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardListScrollable>
      </ContainerSection>
    </>
  );
}

export default MovieDetailPage;
