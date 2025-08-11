export default function DefaultLoader() {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-800/60"
      style={{
        zIndex: 999,
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }}
    >
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
