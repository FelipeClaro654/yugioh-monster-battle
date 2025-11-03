import { Card } from "@/types/card";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Dark%20Magician",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`YGOPRODECK API error: ${response.status}`);
    }

    const data = await response.json();

    const processedCards = processCards(data.data);

    return NextResponse.json({
      cards: processedCards,
      total: processedCards.length,
      lastUpdated: new Date().toISOString(),
      usingFallback: false,
    });
  } catch (error) {
    console.error("API Error:", error);

    const fallbackCards = getFallbackCards();

    return NextResponse.json({
      cards: fallbackCards,
      total: fallbackCards.length,
      lastUpdated: new Date().toISOString(),
      usingFallback: true,
    });
  }
}

function processCards(cards: Card[]) {
  return cards
    .filter(
      (card) =>
        card.type.includes("Monster") &&
        card.atk !== undefined &&
        card.def !== undefined
    )
    .map((card) => ({
      id: card.id,
      name: card.name,
      type: card.type,
      desc: card.desc,
      atk: card.atk,
      def: card.def,
      level: card.level,
      race: card.race,
      attribute: card.attribute,
      card_images: card.card_images.map((img) => ({
        image_url: img.image_url,
        image_url_small: img.image_url_small,
      })),
    }))
    .slice(0, 100);
}

function getFallbackCards() {
  return [
    {
      id: 46986414,
      name: "Dark Magician",
      type: "Normal Monster",
      desc: "The ultimate wizard in terms of attack and defense.",
      atk: 2500,
      def: 2100,
      level: 7,
      race: "Spellcaster",
      attribute: "DARK",
      card_images: [
        {
          image_url: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
          image_url_small:
            "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
        },
      ],
    },
    {
      id: 6368038,
      name: "Gaia The Fierce Knight",
      type: "Normal Monster",
      desc: "A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with.",
      atk: 2300,
      def: 2100,
      level: 7,
      race: "Warrior",
      attribute: "WIND",
      card_images: [
        {
          image_url: "https://images.ygoprodeck.com/images/cards/6368038.jpg",
          image_url_small:
            "https://images.ygoprodeck.com/images/cards_small/6368038.jpg",
        },
      ],
    },
  ];
}
