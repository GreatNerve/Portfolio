
import {Button} from "@nextui-org/button";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { Metadata } from "next";
import SideImage from "./SideImage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me for any queries or collaborations.",
  keywords: "Contact, Dheeraj Sharma, Web Development, Software Development, Full Stack Development",
};




export default function Contact() {
  const src = "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg";
  return (

    <div className="w-full lg:grid  lg:grid-cols-2  min-h-screen border-2 border-r">
      <div className="relative hidden bg-muted lg:block">
        <SideImage src={src} />
      </div>
      <div className="flex items-center justify-center my-2">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Contact</h1>
            {/* <p className="text-balance text-muted-foreground">
              Please enter your details, we will contact you shortly.
            </p> */}
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}