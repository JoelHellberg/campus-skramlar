// PiggyBank.tsx
type Props = {
  position: number;
};

export default function PiggyBank(props: Props) {
  const baseColors = ["#D06224", "#ACCAB2", "#8A8635"];
  
  const row = Math.floor(props.position / 3);
  const colors = row % 2 === 0 ? [...baseColors].reverse() : baseColors;
  const column = props.position % 3;

  const mainColor = colors[column];
  const secondaryColor = colors[(column + 1) % 3]
  const thirdColor = colors[(column + 2) % 3]
  return (
    <div className="relative w-full">
      {/* Backdrop */}
      <div
        className="absolute top-3 left-3 w-full aspect-video outline-1 outline-[#EAC891] -z-10 shadow-2xl rounded-xs"
        style={{ backgroundColor: mainColor }}
      />

      {/* Main content */}
      <div
        className={
          "w-full aspect-video bg-[#E9A762] outline-1 shadow-2xl rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs"
        }
        style={{ outlineColor: mainColor }}
      >
        <div className="absolute w-1/2 h-full flex items-center p-2">
          <img src="/logo.svg" alt="logo" className="w-full" />
        </div>
        <div className="absolute w-1/2 h-full bg-gradient-to-r from-[#E9A76266] to-[#E9A762FF] z-0 rounded-tl-xl" />

        <div
          className="absolute w-full h-full flex flex-col justify-center items-end px-2 text-white text-shadow-2xl"
          style={{ textShadow: "3px 3px 0 " + mainColor }}
        >
          <h2 className="mr-4 !font-bold">Demo</h2>
          <h2>Bössa</h2>
        </div>
        <div className="absolute -top-6">
          <h1
            className="!text-5xl text-[#ACCAB2] ml-8"
            style={{ textShadow: "3px 3px 0" + thirdColor, color: secondaryColor }}
          >
            11000 kr
          </h1>
        </div>
      </div>
    </div>
  );
}
