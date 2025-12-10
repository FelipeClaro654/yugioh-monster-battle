import { useReducer } from "react";

import type { Card, GameAction, GameState } from "@/types";
import { drawInitialCards } from "@/utils/cards";

const useGameState = ({ initialCards }: { initialCards: Card[] }) => {
  const player1Cards = [...initialCards];
  const player2Cards = [...initialCards];

  function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
      case "initializeGame": {
        return {
          ...state,
          initialized: true,
          players: {
            player1: {
              ...state.players.player1,
              remainingCards: player1Cards,
            },
            player2: {
              ...state.players.player2,
              remainingCards: player2Cards,
            },
          },
        };
      }

      case "drawInitialCards": {
        return {
          ...state,
          initialized: true,
          players: {
            player1: {
              ...state.players.player1,
              hand: drawInitialCards(state.players.player1.remainingCards),
              phase: "setCard",
            },
            player2: {
              ...state.players.player2,
              hand: drawInitialCards(state.players.player2.remainingCards),
            },
          },
        };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(gameReducer, {
    initialized: false,
    players: {
      player1: {
        lifepoints: 8000,
        remainingCards: [],
        hand: [],
        boardMonsters: [],
        phase: "waiting",
      },
      player2: {
        lifepoints: 8000,
        remainingCards: [],
        hand: [],
        boardMonsters: [],
        phase: "waiting",
      },
    },
  });

  return { isInitialized: state.initialized, dispatch, players: state.players };
};

export default useGameState;
