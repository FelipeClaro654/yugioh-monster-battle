import { Card } from "./card";

export type PlayerStatus = {
  lifepoints: number;
  remainingCards: Card[];
  hand: Card[];
  boardMonsters: Card[];
  phase: PlayerPhase;
};

export type PlayerPhase =
  | "waiting"
  | "draw"
  | "setCard"
  | "chooseCardPosition"
  | "useCard"
  | "waitingOpponent"
  | "end";

export type PlayerScoreProps = {
  lifepoints: number;
  player: 1 | 2;
};

export type PlayerHandProps = {
  handCards: Card[];
};
