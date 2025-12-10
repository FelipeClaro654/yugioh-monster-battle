import { memo } from "react";

import type { Card } from "@/types/card";

import PlayerHand from "./PlayerHand";

interface PlayerAreaProps {
  cards: Card[];
}

const PlayerArea = ({ cards }: PlayerAreaProps) => {
  return <PlayerHand cards={cards} />;
};

export default memo(PlayerArea);
