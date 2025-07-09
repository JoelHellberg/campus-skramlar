
export default function PiggyBank() {
  return (
    <div className="relative inline-block">
      {/* Backdrop */}
      <div className="w-48 h-32 absolute top-2 left-2 bg-[#D06224] outline-1 outline-[#EAC891] -z-1 shadow-2xl" />

      {/* Main content */}
      <div
        className="w-48 h-32 bg-[#E9A762] outline-1 outline-[#D06224] shadow-2xl
  rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs"
      ></div>
    </div>
  );
}
