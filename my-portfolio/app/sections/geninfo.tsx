"use client";
import Link from "next/link";
import ProfilePic from "@/components/elements/pfp";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

const Info = () => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/SeanGmz" },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/sean-gomez-916461267/",
    },
    { icon: <FaFacebook />, path: "https://www.facebook.com/s.gomez.615" },
    { icon: <RiInstagramFill />, path: "https://www.instagram.com/mkrll____" },
  ];

  const Socials = ({ iconStyles }: { iconStyles: string }) => {
    return (
      <div className="flex flex-row xl:flex-col justify-center xl:justify-end items-center mx-auto mb-10 xl:mb-0 ">
        {socials.map((social, index) => {
          return (
            <Link
              key={index}
              href={social.path}
              className={iconStyles}
              target="_blank"
            >
              {social.icon}
            </Link>
          );
        })}
      </div>
    );
  };

  const downloadCV = () => {
    // Function to handle CV download
    const link = document.createElement("a");
    link.href = "/path/to/your/cv.pdf"; // Replace with the actual path to your CV
    link.download = "Sean_Gomez_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="xl:px-32 flex flex-col xl:flex-row items-center justify-between xl:pt-24 xl:pb-24"
    >
      <div className="text-center xl:text-left pt-10 pb-5 xl:py-0 order-2 xl:order-none xl:w-7/12">
        <h1 className="text-3xl mb-4 xl:text-6xl md:text-4xl mx-3 md:mx-0 sm:text-3xl font-bold">
          Hi, I'm<span className="text-accent"> Sean Gomez </span>
        </h1>
        <p className="max-w-[500px] sm:text-sm md:text-md mx-3 md:mx-0 lg:text-base text-fore/50">
          Aspiring to be a full-stack web developer.
        </p>

        <button
          type="button"
          className="mt-10 mx-auto xl:mx-0 xl:mt-5 flex flex-row items-center text-accent  hover:text-background hover:bg-accent hover:border-accent border-accent border-[2px] rounded-full px-8 py-3 transition-all ease-in duration-150"
          onClick={downloadCV}
        >
          <span className="m-0 mr-2">DOWNLOAD CV</span>
          <FiDownload className="text-lg text-white-500" />
        </button>
      </div>

      <div className="order-3 xl:order-none text-center xl:w-2/12">
        {/* socials component */}
        <Socials iconStyles="text-xl h-auto xl:mr-10 cursor-pointer border-accent border-[2px] p-2 my-0 mx-1.5 xl:mx-auto md:my-1.5 rounded-full hover:border-accent hover:bg-accent hover:text-background text-accent transition-all ease-in duration-150" />
      </div>

      <div className="mx-auto order-1 xl:order-none mt-20 mb-2 xl:my-0 xl:w-4/12">
        <ProfilePic />
      </div>
    </div>
  );
};

const BriefInfo = () => {
  return (
    <div
      id="about"
      className="flex flex-col xl:flex-row justify-between xl:px-32 py-24 items-center"
    >
      <div className="w-full text-center">
        <div className="relative mx-auto w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full">
          <Image
            src="/resources/profile/sgdev_logo_removed.PNG"
            alt="Sean Gomez"
            className="object-contain object-center"
            fill
            sizes=""
            quality={100}
          />
        </div>
      </div>
      <div className="w-full px-10 xl:px-20 text-justify xl:text-left lg:text-base py-10 xl:py-0">
        <p>
          Hello, I'm Sean Patrick A. Gomez, an Information Technology graduate
          with a strong foundation in front-end and back-end web development. I
          aim to create innovative and cutting edge solutions through
          technology, with a focus on web development and sustainable IT
          practices. my adaptability and persistence drive me to continously
          improve my technical skills and contribute meaningfully to the tech
          industry. Nice to meet you and welcome to my personal portfolio.
        </p>
      </div>
    </div>
  );
};

const GenInfo = () => {
  return (
    <div>
      <Info />
      <BriefInfo />
    </div>
  );
};

export default GenInfo;
