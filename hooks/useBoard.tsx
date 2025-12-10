import { useEffect } from "react";

import { Card } from "@/types/card";

import useGameState from "./useGameState";

export const useBoard = ({ initialCards }: { initialCards: Card[] }) => {
  const { players, isInitialized, dispatch } = useGameState({ initialCards });

  const Player1Phase = players.player1.phase;
  const Player2Phase = players.player2.phase;
  const Player1RemainingCards = players.player1.remainingCards;

  useEffect(() => {
    if (initialCards.length > 0 && !isInitialized) {
      dispatch({ type: "initializeGame" });
    }
  }, [initialCards, isInitialized, dispatch]);

  useEffect(() => {
    if (Player1Phase === "draw") {
      return;
    }

    if (Player2Phase === "draw") {
      return;
    }
  }, [Player1Phase, Player2Phase]);

  useEffect(() => {
    if (isInitialized && Player1RemainingCards.length === initialCards.length) {
      dispatch({ type: "drawInitialCards" });
    }
  }, [Player1RemainingCards, initialCards, isInitialized, dispatch]);

  return { dispatch, players };
};
