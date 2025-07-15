import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div className="flex-center">
      <h1 className="text-2xl text-indigo-500">Hello world</h1>
    </div>
  );
}
