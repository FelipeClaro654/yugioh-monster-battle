import { useEffect } from "react";

import { GameActions } from "@/constants";
import type { GameAction, PlayerStatus } from "@/types";

interface UseGameEffectsProps {
  isInitialized: boolean;
  dispatch: React.Dispatch<GameAction>;
  players: {
    player1: PlayerStatus;
    player2: PlayerStatus;
  };
}

export const useGameEffects = ({
  dispatch,
  isInitialized,
  players: { player1, player2 },
}: UseGameEffectsProps) => {
  useEffect(() => {
    if (isInitialized) {
      dispatch({ type: GameActions.DRAW_INITIAL_CARDS });
      return;
    }
    dispatch({ type: GameActions.INITIALIZE_GAME });
  }, [isInitialized, dispatch]);

  useEffect(() => {
    if (player1.phase === "draw") {
      return;
    }

    if (player2.phase === "draw") {
      return;
    }
  }, [player1.phase, player2.phase]);

  return { dispatch, player1, player2 };
};
