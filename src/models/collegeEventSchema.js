import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const collegeEventSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    date: { type: String, require: true },
    catagories: { type: String, require: true },
    location : { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const collegeEvent = mongoose.models.collegeEvent || mongoose.model("collegeEvent", collegeEventSchema);
export default collegeEvent;
