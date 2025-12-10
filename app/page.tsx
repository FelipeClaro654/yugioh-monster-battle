import { fetchCards } from "@/api/fetchCards";
import GameContainer from "@/components/GameContainer";

export default async function HomePage() {
  const cardsData = await fetchCards();

  return <GameContainer initialCards={cardsData.cards} />;
}
