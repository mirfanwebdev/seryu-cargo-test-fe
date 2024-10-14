import Card from "./Card";
function CardList() {
  return (
    <div className="flex flex-wrap gap-7 justify-between">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardList;
