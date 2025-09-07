import fs from "fs";
import path from "path";
type Props = {
  name: string;
  post: string;
  mail: string;

  position: number;
};

export default function Member(props: Props) {
  var angle = "-rotate-3";

  const imgName = props.name.replace(/\s+/g, "");
  const jpgPath = path.join(process.cwd(), "public/photos", `${imgName}.jpg`);
  const pngPath = `/photos/${imgName}.png`;
  const jpgExists = fs.existsSync(jpgPath);
  const src = jpgExists ? `/photos/${imgName}.jpg` : pngPath;

  const posIsEven = props.position % 2 != 0;
  if (posIsEven) {
    angle = "rotate-3";
  }
  return (
    <div className="w-full flex flex-col items-center lg:p-5 mx-auto">
      <div
        className={
          "relative flex flex-col w-4/5 aspect-[9/10] bg-white p-6 shadow-2xl/30 outline-4 " +
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
          src={src}
          className="w-full aspect-square bg-blue-400 object-cover outline-4"
        />
        {/* Namn */}
        <div className="w-full flex-1 flex justify-center items-center text-center pt-3">
          <p className="!text-3xl hand-written-font">{props.name}</p>
        </div>
      </div>

      {/* Post och mail lapp */}
      <div className="w-4/5 mt-15 mb-10 px-10 py-5 bg-white outline-4 rounded-xs">
        <p className="font-extrabold mb-1">{props.post}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  );
}
