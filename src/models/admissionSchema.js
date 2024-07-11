import mongoose, { Schema } from "mongoose";

const admissionSchema = new Schema(
  {
    sscRoll: { type: Number, require: true },
    hscRoll: { type: Number, require: true },
    sscBoard: { type: String, require: true },
    hscBoard: { type: String, require: true },
    sscPassingYear: { type: Number, require: true },
    hscPassingYear: { type: Number, require: true },
    college: { type: String, require: true },
    selectSubject: { type: String, require: true },
    email: { type: String, require: true, unique:true },
    uid: { type: String, require: true ,unique:true},
    emailVerified: { type: Boolean, require: true },
    image: { type: String, require: true },
    accessToken: { type: String, require: true,unique:true },
    role: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const admission = mongoose.models.admission || mongoose.model("admission", admissionSchema);
export default admission;