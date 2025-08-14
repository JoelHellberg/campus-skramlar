import Contribute from "./contribute";
import Goal from "./goal";

export default function About() {
  return (
    <div
      id="about"
      className="relative 
      w-full 
      bg-gradient-to-b from-[#FFF0D9] via-[#FFF0D9] to-[#9CAF88] py-6"
    >
      {/* Animated background */}
      <div
        className="absolute flex inset-0 flex-col justify-between overflow-hidden
        w-full"
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-[url('/tempAbout.png')] bg-cover will-change-transform"
          style={{ transform: "translateY(0px)" }}
        />

        {/* Den beiga och gröna övvergången mellan "hello" och "piggyBanks" */}
        <img
          src={"/vectorGraphics/beigeTransition.svg"}
          alt=""
          className="w-full relative"
        />
        <img
          src={"/vectorGraphics/greenTransition.svg"}
          alt=""
          className="w-full relative"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-y-20 lg:flex-row-reverse justify-center items-center py-20">
        <div className="w-[70vw] lg:w-[40vw] xl:w-[35vw] mx-auto">
          <Contribute />
        </div>
        <div className="w-[70vw] lg:w-[40vw] xl:w-[35vw] mx-auto">
          <Goal />
        </div>
      </div>
    </div>
  );
}
