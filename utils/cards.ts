import { Card } from "@/types/card";

export const selectRandomCard = (cards: Card[]) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

export const drawInitialCards = (cards: Card[]) => {
  const initialCards = [];

  for (let i = 0; i < 5; i++) {
    const card = selectRandomCard(cards);
    initialCards.push(card);
  }

  return initialCards;
};
