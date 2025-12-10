import PlayerScore from "./PlayerScore";

interface DuelHeaderProps {
  player1Lifepoints: number;
  player2Lifepoints: number;
}

const DuelHeader = (props: DuelHeaderProps) => {
  return (
    <header className="flex flex-col w-full gap-1 mt-2">
      <PlayerScore player={1} lifepoints={props.player1Lifepoints} />
      <PlayerScore player={2} lifepoints={props.player2Lifepoints} />
    </header>
  );
};

export default DuelHeader;
