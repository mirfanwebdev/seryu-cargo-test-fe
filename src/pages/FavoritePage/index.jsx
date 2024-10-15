import ContainerSection from "../../components/ContainerSection";
import { CardList } from "../../components/CardList";
import Header from "../../components/Header";
import { CardFavorite } from "../../components/Cards";

function FavoritePage() {
  return (
    <div>
      <Header />
      <ContainerSection title={"your favorite movies"}>
        <CardList>
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
        </CardList>
      </ContainerSection>
    </div>
  );
}

export default FavoritePage;
