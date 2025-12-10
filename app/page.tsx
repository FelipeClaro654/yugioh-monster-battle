import { fetchCards } from "@/api/fetchCards";
import GameContainer from "@/components/GameContainer";

export default async function HomePage() {
  const { cards } = await fetchCards();

  if (!cards || cards.length === 0) {
    return <h1>No cards available!</h1>;
  }
  return <GameContainer initialCards={cards} />;
}
