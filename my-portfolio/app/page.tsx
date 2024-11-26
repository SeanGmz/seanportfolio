import Image from "next/image";
import Navbar from "./partials/nav";
import Footer from "./partials/footer";
import GenInfo from "./partials/geninfo";
import Techstack from "./partials/techstack";

export default function Home() {
  return (
    <div className="container w-screen">
      <main className="w-screen">
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
