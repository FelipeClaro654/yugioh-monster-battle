import { memo } from "react";
import Image from "next/image";

import type { Card } from "@/types/card";

type CardTemplateProps = {
  card: Card;
  showHand: boolean;
  index: number;
  totalCards: number;
};

const CardTemplate = (props: CardTemplateProps) => {
  return (
    <div
      className={`
      rotate
      transition-all
      duration-700
      ease-out
      ${props.showHand ? "opacity-100" : "opacity-0"}
      cursor-pointer
      `}
      style={{
        transitionDelay: props.showHand ? `${props.index * 100}ms` : "0ms",
      }}
    >
      <Image
        alt={props.card.name}
        src={props.card.card_images[0].image_url_small}
        width={180}
        height={0}
      />
    </div>
  );
};

export default memo(CardTemplate);
