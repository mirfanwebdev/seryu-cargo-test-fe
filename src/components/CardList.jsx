import Card from "./Card";
export function CardList() {
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

export function CardListScrollable() {
  return (
    <div className="flex gap-7 overflow-x-auto scroll-smooth">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
