"use client";
import { List } from "@/components/elements/list";
import { Uppermarquee, Lowermarquee } from "@/components/elements/maquee";

const Techstack = () => {
  const DesktopView = () => {
    return (
      <div className="hidden md:block xl:px-0 mid_xl:px-12 lg:px-5">
        <Uppermarquee />
        <Lowermarquee />
      </div>
    );
  };
  const MobileView = () => {
    return (
      <div className="block md:hidden mx-5">
        <List />
      </div>
    );
  };

  return (
    <div className="py-20 md:py-24 overflow-x-hidden">
      <div id="techstack" className="pb-10 md:pb-20 mx-5 xl:mx-0 xl:px-32 mid_xl:px-16 lg:px-10 ">
        <h1 className="xl:text-4xl sm:text-4xl text-2xl text-center lg:text-start">My <span className="text-accent">Tech Stack</span></h1>
      </div>
      <DesktopView />
      <MobileView />
    </div>
  );
};

export default Techstack;
