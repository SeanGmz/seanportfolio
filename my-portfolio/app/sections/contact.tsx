import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MdPhone, MdAlternateEmail, MdLocationOn } from "react-icons/md";

const contacts = [
  {
    icon: <MdPhone  />,
    title: "Phone",
    description: "(+63) 912 345 6789",
  },
  {
    icon: <MdAlternateEmail />,
    title: "Email",
    description: "sampleemail@gmail.com",
  },
  {
    icon: <MdLocationOn />,
    title: "Address",
    description: "Sample Street, Sample City",
  },
];

const contact = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row gap-[30px] justify-center items-center md:px-32 my-36">
        <div className="xl:h-[550px] flex flex-col justify-center items-center lg:w-5/12 backdrop-blur-2xl rounded-xl bg-opacity-50">
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
          <form className="flex flex-col gap-6 px-5 py-10 md:p-10 bg-secondary rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input type="fullname" placeholder="Fullname" />
              <Input type="phone" placeholder="Phone number" />
              <Input
                type="email"
                placeholder="Email address"
                className=" md:col-span-2"
              />

              <Input
                type="subject"
                placeholder="Subject"
                className=" md:col-span-2"
              />
              <Textarea
                className="md:col-span-2 focus:ring-2"
                placeholder="Type your message here."
              />
            </div>
            <div className="flex flex-row justify-center">
              <button
                type="button"
                className="mt-10 w-full xl:mx-0 xl:mt-5 text-background bg-accent hover:bg-accent/80  rounded-full px-8 py-3 transition-all ease-in duration-150"
              >
                <span className="mx-auto text-sm md:text-base ">
                  Submit response
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
