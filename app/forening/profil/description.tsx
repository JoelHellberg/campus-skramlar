type DescriptionProps = {
  description: string;
  setDescriptionFunc: (value: string) => void;
};
export default function Description(props: DescriptionProps) {
  return (
    <div className="bg-[#FFF0D9] p-5 rounded-2xl outline-4 w-full shadow-xl/25">
      <label htmlFor="name" className="block mb-2 font-bold">
        Bössans beskrivning
      </label>
      <textarea
        id="description"
        name="description"
        rows={5}
        value={props.description}
        onChange={(e) => props.setDescriptionFunc(e.target.value)}
        placeholder="Skriv din beskrivning här..."
        className="w-full p-3 border rounded-lg resize-y bg-white"
      />
    </div>
  );
}