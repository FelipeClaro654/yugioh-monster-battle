export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
        <p className="text-white text-xl mt-4">
          Carregando cartas de Yu-Gi-Oh!
        </p>
      </div>
    </div>
  );
}
