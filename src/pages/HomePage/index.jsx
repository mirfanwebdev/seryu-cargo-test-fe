import Header from "../../components/Header";
import ContainerSection from "../../components/ContainerSection";
import Card from "../../components/Card";

function NowPlaying() {
  return (
    <>
      <div className="mx-[120px] mt-12">
        <h1 className="font-semibold font-poppins text-5xl leading-[72px] capitalize pb-2">
          now playing
        </h1>
        <div className="flex gap-7 overflow-x-auto scroll-smooth">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
function HomePage() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <NowPlaying />
        <ContainerSection title={"top rated"} />
      </div>
    </>
  );
}

export default HomePage;
