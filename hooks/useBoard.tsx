import { useEffect } from "react";

import { GameActions } from "@/constants";
import { Card } from "@/types/card";

import useGameState from "./useGameState";

export const useBoard = ({ initialCards }: { initialCards: Card[] }) => {
  const { players, isInitialized, dispatch } = useGameState({ initialCards });
  const { player1, player2 } = players;

  useEffect(() => {
    if (initialCards.length > 0 && !isInitialized) {
      dispatch({ type: GameActions.INITIALIZE_GAME });
    }
  }, [initialCards, isInitialized, dispatch]);

  useEffect(() => {
    if (player1.phase === "draw") {
      return;
    }

    if (player2.phase === "draw") {
      return;
    }
  }, [player1.phase, player2.phase]);

  useEffect(() => {
    if (
      isInitialized &&
      player1.remainingCards.length === initialCards.length
    ) {
      dispatch({ type: GameActions.DRAW_INITIAL_CARDS });
    }
  }, [player1.remainingCards, initialCards, isInitialized, dispatch]);

  return { dispatch, players };
};
