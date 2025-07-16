import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Art from "@/components/art";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import About from "@/components/about";
import Contact from "@/components/contact";
import Cocktails from "@/components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
