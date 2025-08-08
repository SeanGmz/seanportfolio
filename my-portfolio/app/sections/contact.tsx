'use client';


import { MdPhone, MdAlternateEmail, MdLocationOn } from "react-icons/md";
import  ContactForm from "@/components/elements/contactform";

const contacts = [
  {
    icon: <MdPhone  />,
    title: "Phone",
    description: "(+63) 994 831 3400",
  },
  {
    icon: <MdAlternateEmail />,
    title: "Email",
    description: "seangomez1502@gmail.com",
  },
  {
    icon: <MdLocationOn />,
    title: "Address",
    description: "8 Mendiola St., Manila City, Philippines",
  },
];

const contact = () => {

  return (
    <div id="contact" className="mx-auto">
      <div className="flex flex-col lg:flex-row gap-[30px] justify-center items-center md:px-32 my-36">
        <div className="xl:h-[550px] flex flex-col justify-center items-center lg:w-5/12 backdrop-blur-2xl rounded-xl bg-opacity-50 z-10">
          <h3 className=" px-3 text-2xl w-full text-accent pt-10"> Have something in mind? </h3>
          <p className=" px-3 mt-5 mb-7 text-sm md:text-base">
            Feel free to reach out if you have feedback,
            inquiries, or just want to say hello. Together, we can create
            something impactful and innovative. Your thoughts and ideas are
            important, so don't hesitate to reach out.
          </p>
          <ul className="flex flex-col px-3 gap-5 pb-10">
            {contacts.map((info, index ) => {
                return (
                    <li key={index} className="flex items-center gap-6 ">
                        <div className="bg-secondary flex w-[45px] h-[45px] md:w-[50px] md:h-[50px] items-center justify-center rounded-lg text-accent hover:bg-accent hover:text-[#18181b] transition ease-in-out duration-300">
                            <div className="text-[20px]">{info.icon}</div>
                        </div>
                        <div className="flex-1">
                            <p className="text-fore/50 text-sm md:text-md">{info.title}</p>
                            <h3 className="text-sm md:text-base">{info.description}</h3>
                        </div>

                    </li>
                )
            })}
          </ul>
        </div>
        <div className="xl:h-full w-full px-5 lg:px-0 lg:w-6/12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default contact;
