"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";

const ContactForm = () => {
  const fetchData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Prevent default form submission behavior
    // You can add your form submission logic here, e.g., sending data to an API or processing it in some way
    // Handle form submission logic here
    const formData = new FormData(event.currentTarget);
    const fullname = formData.get("fullname");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    alert(
      `You inputted: '${fullname}' with phone number '${phone}', email '${email}', subject '${subject}', and message '${message}'
      
Important Note: This is only a test, Contact form is under development`
    );
  };

  return (
    <form
      onSubmit={fetchData}
      className="flex flex-col gap-6 px-5 py-10 md:p-10 bg-secondary rounded-xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <Input type="text" placeholder="Fullname" name="fullname" required />
        <Input type="text" placeholder="Phone number" name="phone" required />
        <Input
          type="email"
          placeholder="Email address"
          className="sm:col-span-2"
          name="email"
          required
        />

        <Input
          type="text"
          placeholder="Subject"
          className="sm:col-span-2"
          name="subject"
          required
        />
        <Textarea
          className="sm:col-span-2 focus:ring-2"
          placeholder="Type your message here."
          name="message"
          required
        />
      </div>
      <div className="flex flex-row justify-center">
        <button
          type="submit"
          className="md:mt-10 mt-4 w-full xl:mx-0 xl:mt-5 text-background bg-accent hover:bg-accent/80  rounded-full px-8 py-3 transition-all ease-in duration-150"
        >
          <span className="mx-auto text-sm md:text-base ">Submit response</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
