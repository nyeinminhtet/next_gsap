import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "@/components/hero";
import Cocktails from "@/components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
    </main>
  );
}
