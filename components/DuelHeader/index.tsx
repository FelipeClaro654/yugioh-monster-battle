import type { PlayerStatus } from "@/types";

import PlayerScore from "./PlayerScore";

interface DuelHeaderProps {
  player1: PlayerStatus;
  player2: PlayerStatus;
}

const DuelHeader = ({ player1, player2 }: DuelHeaderProps) => {
  return (
    <header className="flex flex-col w-full gap-1 mt-2">
      <PlayerScore player={1} lifepoints={player1.lifepoints} />
      <PlayerScore player={2} lifepoints={player2.lifepoints} />
    </header>
  );
};

export default DuelHeader;
