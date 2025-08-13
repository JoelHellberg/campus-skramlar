type Props = {
  year: string;
  amount: string;
  position: number;
};

export default function Paper(props: Props) {
  const text = props.amount + " kronor";
  // Alternates the rotation between rotate-3, -rotate-4 & rotate-4
  const rotationClasses = ["rotate-3", "-rotate-4", "rotate-4"];
  const rotation = rotationClasses[props.position % 3];

  return (
    <div
      className={`bg-[#FFFCF8] p-5 flex flex-col w-fit ${rotation} rounded-b-2xl rounded-tl-lg rounded-tr-sm paper-shadow cursor-default outline-2`}
    >
      {/* rubrik */}
      <div className="flex flex-row-reverse">
        <div className="flex flex-col items-end">
          <p className="sketch-text-two">{props.year}</p>
          <p className="squiggly-font">blabla</p>
        </div>
        <p className="sketch-text-one flex flex-1">Nyheter</p>
      </div>

      {/* "Dividers" */}
      <div className="w-full bg-black h-0.5 my-1" />
      <div className="w-full bg-black h-0.5 my-1" />

      {/* Nedre halvan */}
      <div className="flex">
        {/* Vänstra sidan */}
        <div className="flex flex-col flex-1 w-48">
          <p className="sketch-text-two underline">
            Campus Skramlar <br /> samlar in
          </p>
          <p className="sketch-text-two underline">{text}</p>
          <p className="squiggly-font break-words">
            blablablablablabla blablablablablabla
          </p>
        </div>

        {/* Divider */}
        <div className="bg-black w-0.5 mx-1" />

        {/* Högersidan */}
        <div className="flex">
          <p className="squiggly-font w-16 break-words">
            blablablablablablablablablablablabla
          </p>
        </div>
      </div>
    </div>
  );
}
