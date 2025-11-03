import { Suspense } from "react";
// import GameLoading from "../components/GameLoading";
import YuGiOhGame from "@/components/YuGiOhGame";
import { fetchCards } from "@/lib/yugioh-api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const cardsData = await fetchCards();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Yu-Gi-Oh! Simplified
      </h1>

      <Suspense fallback={<>Loading...</>}>
        <YuGiOhGame initialCards={cardsData.cards} />
      </Suspense>

      {cardsData.usingFallback && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mt-4">
          ⚠️ Usando dados locais - algumas cartas podem estar faltando
        </div>
      )}
    </div>
  );
}
