export function CardList({ children }) {
  return <div className="flex flex-wrap gap-7 justify-between">{children}</div>;
}

export function CardListScrollable({ children }) {
  return (
    <div className="flex gap-7 overflow-x-auto scroll-smooth">{children}</div>
  );
}
