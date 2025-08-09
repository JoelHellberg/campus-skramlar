type DetailsProps = {
  name: string;
  setNameFunc: (value: string) => void;
  sum: number;
  setSumFunc: (value: number) => void;
  number: string;
  setNumberFunc: (value: string) => void;
};

export default function Details(props: DetailsProps) {
  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4 shadow-xl/25">
      <label htmlFor="name" className="block mb-2 font-bold">
        Namn på föreningen:
      </label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setNameFunc(e.target.value)}
        placeholder="Skriv namnet här"
        className="bg-white p-1 outline-1 rounded-sm w-full"
      />
      <div className="flex my-4">
        <div className="mr-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Swish summa:
          </label>
          <input
            type="number"
            value={props.sum}
            onChange={(e) => props.setSumFunc(Number(e.target.value))}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm w-30"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 font-bold">
            Swish nummer:
          </label>
          <input
            type="tel"
            value={props.number}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[\d+]*$/.test(value)) {
                props.setNumberFunc(value);
              }
            }}
            placeholder="Skriv namnet här"
            className="bg-white p-1 outline-1 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}