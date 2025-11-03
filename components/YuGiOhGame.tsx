"use client";

import { useState, useEffect } from "react";
// import GameBoard from './GameBoard';
// import PlayerHand from './PlayerHand';
import { Card } from "@/types/card";
import useGameState from "@/hooks/useGameState";
import PlayerArea from "./PlayerArea";

interface YuGiOhGame {
  initialCards: Card[];
}

export default function YuGiOhGame({ initialCards }: YuGiOhGame) {
  const [cards, setCards] = useState(initialCards);
  const [isLoading, setIsLoading] = useState(false);

  const { state } = useGameState();

  // useEffect(() => {
  //   if (!initialCards.length) {
  //     fetch("/api/cards")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCards(data.cards);
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch cards:", error);
  //         setIsLoading(false);
  //       });
  //   }
  // }, [initialCards]);

  // useEffect(() => {
  //   if (cards.length > 0 && !gameState.initialized) {
  //     // Sua lógica de inicialização do jogo aqui
  //     initializeGame(cards);
  //   }
  // }, [cards, gameState.initialized]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-white text-xl">Carregando cartas...</div>
      </div>
    );
  }

  if (!cards.length) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        ❌ Não foi possível carregar as cartas. Por favor, recarregue a página.
      </div>
    );
  }

  return (
    <div className="game-container">
      <PlayerArea lifepoints={state.player.lifepoints} />

      {/* <div className="opponent-area">
        <GameBoard 
          monsters={gameState.opponent.board}
          isPlayer={false}
        />
      </div>
      
      <div className="player-area">
        <PlayerHand 
          cards={gameState.player.hand}
          onSummon={summonMonster}
        />
        <GameBoard 
          monsters={gameState.player.board}
          isPlayer={true}
          onAttack={attack}
        />
      </div>
      
      <div className="game-controls">
        <button onClick={nextPhase}>Próxima Fase</button>
        <button onClick={endTurn}>Terminar Turno</button>
      </div> */}
    </div>
  );
}
