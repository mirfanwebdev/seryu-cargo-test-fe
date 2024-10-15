import Header from "../../components/Header";
import ContainerSection from "../../components/ContainerSection";
import { CardList, CardListScrollable } from "../../components/CardList";
import { Card } from "../../components/Cards";

function HomePage() {
  return (
    <>
      <Header />
      <ContainerSection title={"now playing"}>
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
      <ContainerSection title={"top rated"}>
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </ContainerSection>
    </>
  );
}

export default HomePage;
