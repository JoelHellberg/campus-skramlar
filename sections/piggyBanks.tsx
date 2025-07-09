export default function PiggyBanks() {
  return (
    <div id="piggyBanks" className="bg-[#FFF0D9] rounded-t-3xl px-10 py-10">
      <div className="flex">
        <div id="1">
          <div className="bg-[#9CAF88] w-10 aspect-square rounded-full"/>
        </div>
        <div
          id="2"
          className="flex bg-pink-400 grow items-center justify-center text-center"
        >
          Bössor
        </div>
        <div id="3">
          <div className="bg-[#9CAF88] w-10 aspect-square rounded-full"/>
        </div>
      </div>
    </div>
  );
}
