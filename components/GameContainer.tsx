"use client";

import { useGameEffects, useGameState } from "@/hooks";
import type { Card } from "@/types/card";

import Header from "./DuelHeader";
import PlayerArea from "./PlayerArea";

interface GameContainer {
  initialCards: Card[];
}

export default function GameContainer({ initialCards }: GameContainer) {
  const gameData = useGameState({ initialCards });
  const { player1, player2 } = useGameEffects({ ...gameData });

  return (
    <section className="game-container flex flex-col h-screen">
      <Header player1={player1} player2={player2} />
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

      <PlayerArea cards={player1.hand} />
    </section>
  );
}
