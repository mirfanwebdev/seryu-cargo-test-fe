import { CardList } from "../../components/CardList";
import { CardWatchlist } from "../../components/Cards";
import ContainerSection from "../../components/ContainerSection";
import Header from "../../components/Header";
function WatchlistPage() {
  return (
    <div>
      <Header />
      <ContainerSection title={"your watchlist"}>
        <CardList>
          <CardWatchlist />
          <CardWatchlist />
          <CardWatchlist />
          <CardWatchlist />
          <CardWatchlist />
          <CardWatchlist />
        </CardList>
      </ContainerSection>
    </div>
  );
}

export default WatchlistPage;
