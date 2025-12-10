import { Suspense } from "react";

import GameContainer from "@/components/GameContainer";
import { fetchCards } from "@/lib/yugioh-api";

export default async function HomePage() {
  const cardsData = await fetchCards();

  return (
    <div className="container mx-auto max-h-screen">
      <Suspense fallback={<>Loading...</>}>
        <GameContainer initialCards={cardsData.cards} />
      </Suspense>
    </div>
  );
}
