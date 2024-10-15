import { CardList } from "./CardList";

function ContainerSection({ title }) {
  return (
    <>
      <div className="mx-[120px] mt-12">
        <h1 className="font-semibold font-poppins text-5xl leading-[72px] capitalize pb-2">
          {title}
        </h1>
        <CardList />
      </div>
    </>
  );
}

export default ContainerSection;
