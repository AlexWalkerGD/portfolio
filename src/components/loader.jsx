export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Círculo neon */}
        <div className="w-24 h-24 border-4 border-purple-500 rounded-full animate-ping shadow-[0_0_25px_#7c3aed]"></div>

        {/* Glow interno */}
        <div className="absolute inset-0 m-auto w-16 h-16 bg-purple-600 rounded-full shadow-[0_0_35px_#9333ea] animate-pulse"></div>
      </div>
    </div>
  );
}
