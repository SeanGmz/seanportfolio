"use client";
import { List } from "@/components/elements/list";
import { Uppermarquee, Lowermarquee } from "@/components/elements/maquee";

const Techstack = () => {
  const DesktopView = () => {
    return (
      <div className="hidden md:block">
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
      <div id="techstack" className="pb-10 md:pb-20">
        <h1 className="text-2xl sm:text-4xl text-center">My Tech Stack</h1>
      </div>
      <DesktopView />
      <MobileView />
    </div>
  );
};

export default Techstack;
