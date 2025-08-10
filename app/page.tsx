import Header from "@/components/header";
import Hello from "@/sections/hello/hello";
import About from "@/sections/about/about";
import PiggyBanks from "@/sections/piggyBanks/piggyBanks";
import Group from "@/sections/group/group";
import Members from "@/sections/members/members";
import History from "@/sections/history/history";
import Thanks from "@/sections/thanks";
import Sponsors from "@/sections/sponsors";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Loading from "@/components/loading";
import PiggyBankPopup from "@/sections/piggyBanks/popup/piggyBankPopup";

export default async function Home() {
  // Sammanställning av innehållet som utgör hela sidan
  return (
    <>
      <Loading />

      <div>
        {/* Popups */}
        <Suspense fallback={null}>
          <PiggyBankPopup />
        </Suspense>

        {/* Main Content */}
        <Header />
        <Hello />
        <About />

        <div className="mx-20 my-10">
          {/* Övre sidan av det "rivna pappret" */}
          <div className="relative z-10 w-full bg-[#FFF0D9] rounded-t-3xl border-t-3 border-l-3 border-r-3">
            <PiggyBanks />
          </div>

          <Group />

          {/* Nedre sidan av det "rivna pappret" */}
          <div className="relative z-10 w-full bg-[#FFF0D9] rounded-b-3xl border-b-3 border-l-3 border-r-3">
            <Members />
            <History />
            <Thanks />
          </div>

          <Sponsors />
        </div>
        <Footer />
      </div>
    </>
  );
}
