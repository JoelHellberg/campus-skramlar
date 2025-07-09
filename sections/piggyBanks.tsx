export default function PiggyBanks() {
  return (
    <div id="piggyBanks" className="px-10 py-10">
      <div className="flex">
        <div>
          <div className="bg-[#9CAF88] w-10 aspect-square rounded-full" />
        </div>
        <div className="flex grow items-center justify-center text-center">
          <h4 className="!text-4xl">Bössor</h4>
        </div>
        <div>
          <div className="bg-[#9CAF88] w-10 aspect-square rounded-full" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-center text-[#707070] mt-2">
        <h4 className="!text-3xl">(Klicka på en bössa för att se mer)</h4>
      </div>
    </div>
  );
}
