import type { Card } from "@/types/card";
import CardTemplate from "./CardTemplate";
import { useState } from "react";

type PlayerHandProps = {
  cards: Card[];
};

const PlayerHand = (props: PlayerHandProps) => {
  const [showHand, setShowHand] = useState(true);

  return (
    <div className="flex">
      {props?.cards?.map((card) => (
        <CardTemplate key={card.id} showHand={showHand} card={card} />
      ))}
    </div>
  );
};

export default PlayerHand;
