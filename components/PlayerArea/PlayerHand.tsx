import { memo, useState } from "react";

import type { Card } from "@/types/card";

import CardTemplate from "./CardTemplate";

type PlayerHandProps = {
  cards: Card[];
};

const PlayerHand = (props: PlayerHandProps) => {
  const [showHand, setShowHand] = useState(false);

  setTimeout(() => {
    setShowHand(true);
  }, 1000);

  return (
    <div className="flex self-end w-full justify-center">
      {props?.cards?.map((card, index) => (
        <CardTemplate
          key={`${card.id}-${card.name}`}
          showHand={showHand}
          card={card}
          index={index}
          totalCards={props.cards.length}
        />
      ))}
    </div>
  );
};

export default memo(PlayerHand);
