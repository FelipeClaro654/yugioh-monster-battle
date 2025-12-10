import type { PlayerStatus } from "./player";

export type GameState = {
  initialized: boolean;
  players: {
    player1: PlayerStatus;
    player2: PlayerStatus;
  };
};

export type GameAction =
  | { type: "initializeGame" }
  | { type: "drawInitialCards" };
