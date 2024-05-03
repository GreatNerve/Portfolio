"use server";

import Contact from "@/db/Models/contactModel";
import { dbConnect } from "@/lib/dbConfig";


export const saveContactForm = async ({
  name,
  email,
  message,
  tnc
}: {
  name: string;
  email: string;
  message: string;
  tnc: boolean;
}) => {
  if (!name || !email || !message || !tnc) {
    throw new Error("Please fill all the fields.");
  }
  try {
    await dbConnect();
    const contact = new Contact({ name, email, message });
    await contact.save();
    return {
      message: "Contact form saved successfully",
    };
  } catch (error) {
    console.error("Error saving contact form");
    return {
	  error: "Error saving contact form",
	};
  }
};
