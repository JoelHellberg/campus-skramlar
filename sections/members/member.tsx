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
          "relative flex flex-col w-4/5 aspect-[9/10] bg-white p-6 shadow-2xl/30 " +
          angle
        }
      >
        {/* Vänstra tejpen */}
        <div
          className="absolute top-0 left-0 translate-x-[-20%] translate-y-[20%] -rotate-45 w-1/2 aspect-[3/1]
        bg-gradient-to-r from-[#C6AB8F33] via-[#C6AB8F80] to-[#C6AB8F33]"
        />
        {/* Högra tejpen */}
        <div
          className="absolute top-0 right-0 translate-x-[20%] translate-y-[20%] rotate-[38deg] w-1/2 aspect-[3/1]
        bg-gradient-to-r from-[#C6AB8F33] via-[#C6AB8F80] to-[#C6AB8F33]"
        />
        {/* Profilbild */}
        <img
          src={imgSrc}
          className="w-full aspect-square bg-blue-400 object-cover"
        />
        {/* Namn */}
        <div className="w-full flex-1 flex justify-center items-center text-center pt-3">
          <h4 className="!text-3xl">{props.name}</h4>
        </div>
      </div>

      {/* Post och mail lapp */}
      <div className="relative w-4/5 my-10 px-10 py-5">
        <div className="absolute inset-4 -z-1 shadow-2xl/20" />
        <Papersheet className="absolute inset-0 w-full  h-full -z-1" />
        <p className="font-bold">{props.post}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  );
}
