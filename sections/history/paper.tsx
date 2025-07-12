type Props = {
  year: string;
  amount: string;
  position: number;
};

export default function Paper(props: Props) {
  const text = props.amount + " kronor";
  // Alternates between rotate-3, -rotate-4 & rotate-4
  const rotationClasses = ["rotate-3", "-rotate-4", "rotate-4"];
  const rotation = rotationClasses[props.position % 3];

  return (
    <div
      className={`bg-[#FFFCF8] p-5 flex flex-col w-fit ${rotation} rounded-b-2xl rounded-tl-lg rounded-tr-sm paper-shadow`}
    >
      {/* rubrik */}
      <div className="flex flex-row-reverse">
        <div className="flex flex-col items-end">
          <p className="paper-text-two">{props.year}</p>
          <p className="paper-text-three">blabla</p>
        </div>
        <p className="paper-text-one flex flex-1">Nyheter</p>
      </div>

      {/* "Dividers" */}
      <div className="w-full bg-black h-0.5 my-1" />
      <div className="w-full bg-black h-0.5 my-1" />

      {/* Nedre halvan */}
      <div className="flex">
        {/* Vänstra sidan */}
        <div className="flex flex-col flex-1 w-48">
          <p className="paper-text-two underline">Campus Skramlar <br/> samlar in</p>
          <p className="paper-text-two underline">{text}</p>
          <p className="paper-text-three break-words">
            blablablablablabla blablablablablabla
          </p>
        </div>

        {/* Divider */}
        <div className="bg-black w-0.5 mx-1" />

        {/* Högersidan */}
        <div className="flex">
          <p className="paper-text-three w-16 break-words">
            blablablablablablablablablablablabla
          </p>
        </div>
      </div>
    </div>
  );
}
