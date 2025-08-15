import { PaperTear } from "@/assets/vectorGraphics";
import { Papersheet } from "@/assets/vectorGraphics";
import Gruppbild from "./gruppbild";

export default function Group() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* PaperTear Transition */}

      <div className="relative w-full h-[5vw]">
        <PaperTear className="w-full h-full -mt-2" />
        <div className="absolute left-0 top-0 w-1/2 h-8/12 border-l-3" />
        <div className="absolute right-0 top-0 w-1/2 h-11/12 border-r-3" />
      </div>
      {/* Rubrik */}
      <div className="relative aspect-[4/1] w-full md:w-9/12 2xl:w-7/12 my-12 flex items-center justify-center text-center">
        <Papersheet className="absolute inset-0 w-full  h-full -z-1" />
        <h1>Projektgruppen 2025</h1>
      </div>

      {/* Gruppbild & Backdrop */}
      <div className="relative mt-10 w-11/12 md:w-4/5">
        <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-white -z-1 shadow-2xl/55 rounded-md outline-4" />
        <div className="relative bg-gray-400">
          <Gruppbild />
        </div>
      </div>

      {/* PaperTear Transition */}
      <div className="relative w-full h-[5vw]">
        <PaperTear className="w-full h-full mt-2 rotate-180" />
        <div className="absolute left-0 bottom-0 w-1/2 h-11/12 border-l-3" />
        <div className="absolute right-0 bottom-0 w-1/2 h-8/12 border-r-3" />
      </div>
    </div>
  );
}
