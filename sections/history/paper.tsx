type Props = {
  year: string;
  amount: string;
};

export default function Paper(props: Props) {
  const text = props.amount + " kronor";
  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col w-fit -rotate-4">
      {/* rubrik */}
      <div className="flex flex-row-reverse">
        <div className="flex flex-col items-end">
          <p>{props.year}</p>
          <p>blablabla</p>
        </div>
        <h2 className="flex flex-1">Nyheter</h2>
      </div>

      {/* "Dividers" */}
      <div className="w-full bg-black h-0.5 my-1" />
      <div className="w-full bg-black h-0.5 my-1" />

      {/* Nedre halvan */}
      <div className="flex">
        {/* Vänstra sidan */}
        <div className="flex flex-col flex-1 w-44">
          <p className="underline">Campus Skramlar samlar in</p>
          <p className="underline">{text}</p>
          <p>blablabla</p>
        </div>

        {/* Divider */}
        <div className="bg-black w-0.5 mx-1" />

        {/* Högersidan */}
        <div className="flex">
          <p>blabla</p>
        </div>
      </div>
    </div>
  );
}
