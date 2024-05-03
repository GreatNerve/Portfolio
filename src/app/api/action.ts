"use server";

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
    const { dbConnect } = await import("@/lib/dbConfig");
    await dbConnect();
    const Contact  = await (await import("@/db/Models/contactModel")).default;
    const saveContact = new Contact({ name, email, message });
    await saveContact.save();
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
