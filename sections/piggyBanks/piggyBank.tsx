// PiggyBank.tsx
type Props = {
  position: number;
};

export default function PiggyBank(props: Props) {
  const baseColors = ["#D06224", "#ACCAB2", "#8A8635"];
  const row = Math.floor(props.position / 3);
  console.log("row is: " + row);
  const colors = row % 2 === 0 ? [...baseColors].reverse() : baseColors;
  console.log("colors is: " + colors);

  const column = props.position % 3;
  console.log("column is: " + column);
  const mainColor = colors[column];
  console.log("backdrop color is: " + mainColor);
  return (
    <div className="relative basis-1/4">
      {/* Backdrop */}
      <div
        className="absolute top-2 left-2 w-full aspect-video outline-1 outline-[#EAC891] -z-10 shadow-2xl rounded-xs"
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
        <div className="absolute w-1/2 h-full bg-gradient-to-r from-[#E9A76266] to-[#E9A762FF] z-0" />

        <div
          className="absolute w-full h-full flex flex-col justify-center items-end px-2 text-white text-shadow-2xl"
          style={{ textShadow: "3px 3px 0 #D06224" }}
        >
          <h2 className="mr-4 !font-bold">Demo</h2>
          <h2>Bössa</h2>
        </div>
        <div className="absolute -top-6">
          <h1
            className="!text-5xl text-[#ACCAB2] ml-8"
            style={{ textShadow: "2px 2px 0 #8A8635" }}
          >
            11000 kr
          </h1>
        </div>
      </div>
    </div>
  );
}
