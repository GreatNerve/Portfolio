import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const contactSchema: Schema<IContact> = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please use a valid email address"],
    },
    message: {
      type: String,
      trim: true,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  (mongoose.models.Contact as mongoose.Model<IContact>) ||
  mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
