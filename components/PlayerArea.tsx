import React from "react";

type PlayerAreaProps = {
  lifepoints: number;
};

const PlayerArea = (props: PlayerAreaProps) => {
  return (
    <div
      className={`
          relative
          bg-black
          border-2  border-blue-400 
          rounded
          py-3
          text-center
          shadow-inner
          overflow-hidden
        `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent" />
      <div
        className={`
            relative
            font-mono font-bold
            text-2xl
            text-blue-400 
            text-shadow-glow
            tracking-wider
              
          `}
      >
        {props.lifepoints}
      </div>
      {/* {isAnimating && (
              <div className={`
                absolute inset-0
                flex items-center justify-center
                font-mono font-bold text-3xl
                ${changeType === 'increase' ? 'text-green-400' : 'text-red-400'}
                animate-bounce
              `}>
                {changeType === 'increase' ? '+' : '-'}
                {Math.abs(points - displayPoints).toLocaleString()}
              </div>
            )} */}
    </div>
  );
};

export default React.memo(PlayerArea);
