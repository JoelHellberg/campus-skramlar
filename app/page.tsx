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
import LayoutLoader from "@/components/loaders/layoutLoader";
import PiggyBankPopup from "@/app/popups/piggyBankPopup";
import ClientLoader from "@/components/loaders/clientLoader";
import HeyTherePopup from "./popups/heyTherePopup";

export default async function Home() {
  // Sammanställning av innehållet som utgör hela sidan
  return (
    <>
      <LayoutLoader />
      <ClientLoader delay={0.2} />

      <div>
        <div className="relative z-10">
          {/* Popups */}
          <Suspense fallback={null}>
            <PiggyBankPopup />
            <HeyTherePopup />
          </Suspense>

          {/* Main Content */}
          <Header />
          <Hello />
        </div>
        <About />
        <div className="relative bg-[#9CAF88] z-10 pt-10">
          <div className="mx-20 mb-10">
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
      </div>
    </>
  );
}
