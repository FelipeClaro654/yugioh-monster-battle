"use client";

import { useEffect } from "react";

interface Error {
  error: Error;
  reset(): void;
}

export default function Error({ error, reset }: Error) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
      <p className="mb-4">Não foi possível carregar as cartas do jogo.</p>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tentar novamente
      </button>
    </div>
  );
}
