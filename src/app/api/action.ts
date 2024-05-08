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
    const [dbConnect, Model] = await Promise.all([import("@/lib/dbConfig"), import("@/db/Models/contactModel")]);
    await dbConnect.default();
    const Contact = Model.default;
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
