"use client";

import { useEffect } from "react";
import { Card } from "@/types/card";
import useGameState from "@/hooks/useGameState";
import PlayerScore from "./PlayerScore";
import PlayerHand from "./PlayerHand";

interface YuGiOhGame {
  initialCards: Card[];
}

export default function YuGiOhGame({ initialCards }: YuGiOhGame) {
  const { state, dispatch } = useGameState({ initialCards });
  const Player1Phase = state.players.player1.phase;
  const Player2Phase = state.players.player2.phase;
  const Player1RemainingCards = state.players.player1.remainingCards;

  useEffect(() => {
    if (initialCards.length > 0 && !state.initialized) {
      dispatch({ type: "initializeGame" });
    }
  }, [initialCards, state.initialized, dispatch]);

  useEffect(() => {
    if (Player1Phase === "draw") {
      return;
    }

    if (Player2Phase === "draw") {
      return;
    }
  }, [Player1Phase, Player2Phase]);

  useEffect(() => {
    if (
      state.initialized &&
      Player1RemainingCards.length === initialCards.length
    ) {
      dispatch({ type: "drawInitialCards" });
    }
  }, [Player1RemainingCards, initialCards, state.initialized, dispatch]);

  if (!initialCards.length) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        ❌ Não foi possível carregar as cartas. Por favor, recarregue a página.
      </div>
    );
  }

  return (
    <section className="game-container flex flex-col h-screen">
      <header className="flex flex-col w-full gap-1 mt-2">
        <PlayerScore player={1} lifepoints={state.players.player1.lifepoints} />
        <PlayerScore player={2} lifepoints={state.players.player2.lifepoints} />
      </header>
      <div className="h-full"></div>
      {/* <div className="opponent-area">
        <GameBoard 
          monsters={gameState.opponent.board}
          isPlayer={false}
        />
      </div>
      
        <PlayerHand 
          cards={gameState.player.hand}
          onSummon={summonMonster}
        />
      
      <div className="game-controls">
        <button onClick={nextPhase}>Próxima Fase</button>
        <button onClick={endTurn}>Terminar Turno</button>
      </div> */}

      <PlayerHand cards={state.players.player1.hand} />
    </section>
  );
}
