import Navbar from "@/components/navigation/nav";
// import Footer from "./sections/components/footer";
import GenInfo from "@/app/sections/geninfo";
import Techstack from "@/app/sections/techstack";
import Background from "@/app/sections/background";
import Projects from "@/app/sections/projects";
import ScrollTop from "@/components/navigation/topscroll";
import Contact from "@/app/sections/contact";

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
