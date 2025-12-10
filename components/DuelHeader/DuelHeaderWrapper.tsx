import PlayerScore from "./PlayerScore";

type DuelHeaderWrapperProps = {
  player1Lifepoints: number;
  player2Lifepoints: number;
};

const DuelHeaderWrapper = (props: DuelHeaderWrapperProps) => {
  return (
    <header className="flex flex-col w-full gap-1 mt-2">
      <PlayerScore player={1} lifepoints={props.player1Lifepoints} />
      <PlayerScore player={2} lifepoints={props.player2Lifepoints} />
    </header>
  );
};

export default DuelHeaderWrapper;
