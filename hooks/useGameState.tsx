import { useReducer } from "react";

import { GameActions } from "@/constants";
import type { Card, GameAction, GameState } from "@/types";
import { drawInitialCards } from "@/utils/cards";

export const useGameState = ({ initialCards }: { initialCards: Card[] }) => {
  const player1Cards = [...initialCards];
  const player2Cards = [...initialCards];

  function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
      case GameActions.INITIALIZE_GAME: {
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

      case GameActions.DRAW_INITIAL_CARDS: {
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
