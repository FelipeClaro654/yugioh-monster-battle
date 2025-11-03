import { useReducer } from "react";

const useGameState = () => {
  function gameReducer(state, action) {
    // ...
  }
  const [state, dispatch] = useReducer(gameReducer, {
    player: {
      lifepoints: 8000,
    },
    opponent: {
      lifepoints: 8000,
    },
  });

  return { state, dispatch };
};

export default useGameState;
