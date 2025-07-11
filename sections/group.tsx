import { PaperTear } from "@/assets/vectorGraphics";
import { Papersheet } from "@/assets/vectorGraphics";
console.log("paperTear structure: ", PaperTear);

export default function Group() {
  return (
    <div id="group" className="w-full flex flex-col items-center">
      <PaperTear className="w-full h-[5vw]" />
      <div className="relative my-10 px-10 py-5">
        <Papersheet className="absolute inset-0 w-full  h-full -z-1" />
        <h1>Projektgruppen 2025</h1>
      </div>
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
