import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const contactSchema = new Schema(
  {
    description: { type: String, require: true },
    email: { type: String, require: true },
    displayName: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const contact = mongoose.models.contact || mongoose.model("contact", contactSchema);
export default contact;