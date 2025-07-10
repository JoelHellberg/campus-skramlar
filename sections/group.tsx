import { PaperTear } from "@/assets/vectorGraphics";
console.log("paperTear structure: ", PaperTear);

export default function Group() {
  return (
    <div id="group" className="w-full flex flex-col items-center">
      <PaperTear className="w-full h-[5vw]" />
      <div className="relative mt-10 w-2/3">
        <div className="absolute -inset-6 bg-white -z-1 shadow-2xl rounded-md" />
        <img
          src="/photos/gruppbild.png"
          className="w-full -mb-[5vw] shadow-2xl rounded-md"
        />
      </div>
      <PaperTear className="w-full h-[5vw] rotate-180" />
    </div>
  );
}
