export function CardList({ children }) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-7 justify-center md:justify-start">
      {children}
    </div>
  );
}

export function CardListScrollable({ children }) {
  return (
    <div className="flex gap-4 md:gap-7 overflow-x-auto scroll-smooth">
      {children}
    </div>
  );
}
