import Contribute from "./contribute";
import Goal from "./goal";

export default function About() {
  return (
    <div className="w-full bg-[url('/tempAbout.png')]">
      <img
        src={"/vectorGraphics/beigeTransition.svg"}
        alt=""
        className="w-full"
      />

      <div className="flex justify-center items-center gap-80 py-15">
        <Goal />
        <Contribute />
      </div>

      <img
        src={"/vectorGraphics/greenTransition.svg"}
        alt=""
        className="w-full"
      />
    </div>
  );
}
