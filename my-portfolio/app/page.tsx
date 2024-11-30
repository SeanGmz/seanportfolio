import Image from "next/image";
import Navbar from "./sections/components/nav";
import Footer from "./sections/components/footer";
import GenInfo from "./sections/geninfo";
import Techstack from "./sections/techstack";
import Background from "./sections/background";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="">
      <main className="tracking-wider">
        {/* <Navbar />
        <GenInfo/>
        <Techstack /> */}

        <div className="border-solid border-2 border-blue-600">
          <h1>
            <Projects />
          </h1>
        </div>
        <div className="border-solid border-2 border-blue-600">
          <h1>
            <Background />
          </h1>
        </div>
      </main>
    </div>
  );
}
