import { PaperTear } from "@/assets/vectorGraphics";
console.log("paperTear structure: ", PaperTear);

export default function Group() {
  return (
    <div id="group" className="w-full">
      <PaperTear className="w-full h-[5vw]" />
      Group
      <PaperTear className="w-full h-[5vw] rotate-180" />
    </div>
  );
}
