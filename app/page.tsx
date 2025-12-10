import { Suspense } from "react";

import YuGiOhGame from "@/components/YuGiOhGame";
import { fetchCards } from "@/lib/yugioh-api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const cardsData = await fetchCards();

  return (
    <div className="container mx-auto max-h-screen">
      <Suspense fallback={<>Loading...</>}>
        <YuGiOhGame initialCards={cardsData.cards} />
      </Suspense>
    </div>
  );
}
