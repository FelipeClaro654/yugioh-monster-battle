import { memo } from "react";

import type { Card } from "@/types/card";

import PlayerDeck from "./PlayerDeck";
import PlayerHand from "./PlayerHand";

interface PlayerAreaProps {
  handCards: Card[];
  deckCards: Card[];
}

const PlayerArea = ({ handCards, deckCards }: PlayerAreaProps) => {
  return (
    <div className="flex">
      <PlayerHand handCards={handCards} />
      <PlayerDeck deckCards={deckCards} />
    </div>
  );
};

export default memo(PlayerArea);
