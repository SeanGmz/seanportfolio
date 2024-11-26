import Image from "next/image";
import Navbar from "./sections/nav";
import Footer from "./sections/footer";
import GenInfo from "./sections/geninfo";
import Techstack from "./sections/techstack";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <GenInfo/>
        <Techstack />
  

        <div className="border-solid border-2 border-blue-600">
          <h1> projs</h1>
        </div>

        <div className="border-solid border-2 border-yellow-300">
          <h1> educ bg</h1>
        </div>

        <div className="border-solid border-2 border-cyan-800">
          <h1> work bg</h1>
        </div>
      </main>
    </div>
  );
}
