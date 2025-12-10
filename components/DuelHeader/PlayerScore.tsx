import { memo } from "react";

import type { PlayerScoreProps } from "@/types";

const PlayerScore = (props: PlayerScoreProps) => {
  const background = props.player === 1 ? "bg-purple-500" : "bg-indigo-500";
  return (
    <div
      className={`flex flex-col rounded-sm w-36 self-end justify-around p-1 ${background}`}
    >
      <div className=" text-cyan-500">Player {props.player} </div>
      <div className="font-bold text-amber-300 text-2xl">
        LP {props.lifepoints}
      </div>
    </div>
  );
};

export default memo(PlayerScore);
