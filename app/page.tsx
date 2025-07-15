"use client";
import Header from "@/components/header";
import Hello from "@/sections/hello/hello";
import About from "@/sections/about/about";
import PiggyBanks from "@/sections/piggyBanks/piggyBanks";
import Group from "@/sections/group";
import Members from "@/sections/members/members";
import History from "@/sections/history/history";
import Thanks from "@/sections/thanks";
import Sponsors from "@/sections/sponsors";
import Footer from "@/components/footer";
import Bossa from "@/components/popUps/bossa";

export default function Home() {
  // Sammanställning av innehållet som utgör hela sidan
  return (
    <div>
      {/* Pop Ups */}
      <Bossa/>

      {/* Main Content */}
      <Header />
      <Hello />
      <About />

      <div className="mx-20 my-10">
        {/* Övre sidan av det "rivna pappret" */}
        <div className="relative z-10 w-full bg-[#FFF0D9] rounded-t-3xl">
          <PiggyBanks />
        </div>

        <Group />

        {/* Nedre sidan av det "rivna pappret" */}
        <div className="relative z-10 w-full bg-[#FFF0D9] rounded-b-3xl">
          <Members />
          <History />
          <Thanks />
        </div>

        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}
