import Image from "next/image";
import Navbar from "./sections/components/nav";
import Footer from "./sections/components/footer";
import GenInfo from "./sections/geninfo";
import Techstack from "./sections/techstack";
import Background from "./sections/background";
import Projects from "./sections/projects";
import ScrollTop from "./sections/components/topscroll";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="">
      <main className="tracking-wider">
        <Navbar />
        <GenInfo />
        <Techstack />
        <Projects />
        <Background />
        <ScrollTop />
        <Contact />
      </main>
    </div>
  );
}
