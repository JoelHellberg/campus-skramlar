type Props = {
  year: string;
  amount: string;
  position: number;
};

export default function Paper(props: Props) {
  const text = props.amount + " kronor";
  // Alternates between rotate-4 and rotate-3, reversing direction every 4th
  const rotation = `${props.position % 4 === 0 ? '-' : ''}rotate-${props.position % 2 === 0 ? 4 : 3}`;
  console.log(rotation);


  return (
    <div className={`bg-white shadow-xl p-5 rounded-2xl flex flex-col w-fit ${rotation}`}>
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
          <p className="paper-text-two underline">Campus Skramlar samlar in</p>
          <p className="paper-text-two underline">{text}</p>
          <p className="paper-text-three break-words">blablablablablabla blablablablablabla</p>
        </div>

        {/* Divider */}
        <div className="bg-black w-0.5 mx-1" />

        {/* Högersidan */}
        <div className="flex">
          <p className="paper-text-three w-16 break-words">blablablablablablablablablablablabla</p>
        </div>
      </div>
    </div>
  );
}
