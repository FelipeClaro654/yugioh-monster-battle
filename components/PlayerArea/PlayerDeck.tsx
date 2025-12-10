import { memo } from "react";

import { Card } from "@/types";
interface PlayerDeckProps {
  deckCards: Card[];
}

const PlayerDeck = ({ deckCards }: PlayerDeckProps) => {
  return (
    <div className="flex flex-col items-center pl-1.5">
      <div
        style={{ backgroundImage: `url(/cardback.jpeg)` }}
        className="flex items-center p-1.5 bg-contain bg-center bg-no-repeat w-full h-full"
      >
        <span className="text-center text-amber-50 p-1">{`Remaining Cards: ${deckCards.length}`}</span>
      </div>
    </div>
  );
};

export default memo(PlayerDeck);
