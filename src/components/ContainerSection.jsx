import CardList from "./CardList";

function ContainerSection() {
  return (
    <>
      <div className="mx-[120px]">
        <h1 className="font-semibold font-poppins text-5xl leading-[72px] capitalize">
          title
        </h1>
        <CardList />
      </div>
    </>
  );
}

export default ContainerSection;
