"use client";
import Header from "@/components/header";
import Hello from "@/sections/hello/hello";
import About from "@/sections/about/about";
import PiggyBanks from "@/sections/piggyBanks/piggyBanks";
import Group from "@/sections/group";
import Members from "@/sections/members";
import History from "@/sections/history";
import Thanks from "@/sections/thanks";
import Sponsors from "@/sections/sponsors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hello />
      <About />

      <div className="mx-20 my-10">
        <div className="relative z-10 w-full bg-[#FFF0D9] rounded-t-3xl">
          <PiggyBanks />
        </div>
        <Group />
        <div className="relative z-10 w-full bg-[#FFF0D9] rounded-b-3xl shadow-2xl">
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
