import { GameActions } from "@/constants/gameActions";

import type { PlayerStatus } from "./player";

export type GameState = {
  initialized: boolean;
  players: {
    player1: PlayerStatus;
    player2: PlayerStatus;
  };
};

export type GameAction =
  | { type: GameActions.INITIALIZE_GAME }
  | { type: GameActions.DRAW_INITIAL_CARDS };
