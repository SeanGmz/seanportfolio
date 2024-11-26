import Image from "next/image";
import Navbar from "./partials/nav";
import Footer from "./partials/footer";

export default function Home() {
  return (
    <div className="container flex w-screen">
      <main className="">
        <div className="border-solid border-2 border-white-600">
          <h1 className="">Sean Gomez</h1>
          <p>A student aspiring to be full-stack web developer.</p>
          <p>
            Hello, I'm Sean Patrick A. Gomez, 4th year Information Technology
            student at La Consolacion College Manila with a strong foundation in
            front-end and back-end web development. I aim to create innovative
            and cutting edge solutions through technology, with a focus on web
            development and sustainable IT practices. my adaptability and
            persistence drive me t ocontinously improve my technical skills and
            contribute meaningfully to the tech industry.
          </p>
        </div>

        <div className="border-solid border-2 border-red-600">
          <h1> tech stack</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            debitis aut accusamus, maiores tenetur magnam odit eum temporibus
            eius quae reiciendis, vitae soluta, assumenda dignissimos nobis quam
            vel necessitatibus neque?
          </p>
        </div>

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
