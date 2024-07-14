import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const researchSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    date: { type: String, require: true },
    researcherLink: { type: String, require: true },
    location : { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const research = mongoose.models.research || mongoose.model("research", researchSchema);
export default research;
