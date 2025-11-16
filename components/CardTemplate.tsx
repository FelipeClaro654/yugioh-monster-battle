import { Card } from "@/types/card";
import Image from "next/image";

type Props = {
  card: Card;
  showHand: boolean;
};

const CardTemplate = (props: Props) => {
  const styles = props.showHand
    ? {}
    : { position: "absolute", bottom: 0, right: 0 };
  return (
    <div style={styles}>
      <Image
        alt={props.card.name}
        src={props.card.card_images[0].image_url_small}
        width={200}
        height={0}
      />
    </div>
  );
};

export default CardTemplate;
