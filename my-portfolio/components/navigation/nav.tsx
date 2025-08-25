"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

const quicknav = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Tech Stack", path: "#techstack" },
  { name: "Projects", path: "#projects" },
  { name: "Background", path: "#background" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const FullNav = () => {
    return (
      <nav className="flex gap-5">
        {quicknav.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className="hover:text-accent text-fore transition ease-in-out duration-300"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    );
  };

  const MobileNav = () => {
    return (
      <Sheet open={isOpen} onOpenChange={ setIsOpen }>
        <SheetTrigger className="flex justify-center items-center">
          <SlMenu className="text-2xl sm:text-3xl md:text-4xl" />
        </SheetTrigger>
        <SheetTitle className="hidden">Quick Navigation</SheetTitle>
        <SheetDescription className="hidden">Click on the links to navigate</SheetDescription>
        <SheetContent className="flex flex-col justify-center">
          <nav className="flex flex-col justify-center items-center gap-8 text-md md:text-lg">
            {quicknav.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="hover:text-accent text-fore transition ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              );
            })}

            <Link href="#contact" className="hover:text-accent text-fore transition ease-in-out duration-300 rounded-full">

                Contact me

            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <div className="text-fore py-3 mt-3 md:py-8 md:mt-0 mx-5 xl:mx-0 xl:px-32 mid_xl:px-16 lg:px-10 ">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-widest"> SG<span className="text-[#ededed]/50">&bull;</span><span className="text-accent">Dev</span></h1>
        </Link>

        <div className="hidden lg:flex items-center gap-5 text-sm">
          <FullNav />

          <Link href="#contact">
            <button
              type="button"
              className="bg-accent text-background hover:bg-accent/80 transition ease-in-out duration-300 px-4 py-3 rounded-full"
            >
              Contact me
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
