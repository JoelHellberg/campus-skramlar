import { Papersheet } from "@/assets/vectorGraphics";

type Props = {
  name: string;
  post: string;
  mail: string;

  position: number;
};

export default function Member(props: Props) {
  var angle = "-rotate-3";
  const imgName = props.name.replace(/\s+/g, "");
  console.log(imgName);
  const imgSrc = "/photos/" + imgName + ".png";
  const posIsEven = props.position % 2 != 0;
  if (posIsEven) {
    angle = "rotate-3";
  }
  return (
    <div className="w-full flex flex-col items-center p-5">
      <div
        className={
          "flex flex-col w-4/5 aspect-[9/10] bg-white p-6 shadow-2xl " + angle
        }
      >
        <img
          src={imgSrc}
          className="w-full aspect-square bg-blue-400 object-cover"
        />
        <div className="w-full flex-1 flex justify-center items-center text-center">
          <h4>{props.name}</h4>
        </div>
      </div>
      <div className="relative w-4/5 my-10 px-10 py-5">
        <div className="absolute inset-2 -z-1 shadow-2xl" />
        <Papersheet className="absolute inset-0 w-full  h-full -z-1" />
        <p className="font-bold">{props.post}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  );
}
