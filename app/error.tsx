"use client";
interface Error {
  reset(): void;
}

export default function Error({ reset }: Error) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Try again
      </button>
    </div>
  );
}
