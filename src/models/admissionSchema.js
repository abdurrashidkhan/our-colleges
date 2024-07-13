import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const admissionSchema = new Schema(
  {
    studentName: { type: String, require: true },
    number: { type: Number, require: true },
    subject: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
    birthday: { type: String, require: true },
    image: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const admission = mongoose.models.admission || mongoose.model("admission", admissionSchema);
export default admission;