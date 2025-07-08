import Hello from "@/sections/hello";
import About from "@/sections/about";
import PiggyBanks from "@/sections/piggyBanks";
import Group from "@/sections/group";
import Members from "@/sections/members";
import History from "@/sections/history";
import Thanks from "@/sections/thanks";
import Sponsors from "@/sections/sponsors";

export default function Home() {
  return (
    <div>
      <Hello />
      <About />
      <PiggyBanks />
      <Group />
      <Members />
      <History />
      <Thanks />
      <Sponsors />
    </div>
  );
}
