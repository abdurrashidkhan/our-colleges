import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
const usersSchema = new Schema(
  {
    displayName: { type: String, require: true },
    email: { type: String, require: true, unique:true },
    uid: { type: String, require: true ,unique:true},
    emailVerified: { type: Boolean, require: true },
    photoURL: { type: String, require: true },
    accessToken: { type: String, require: true,unique:true },
    role: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const users = mongoose.models.users || mongoose.model("users", usersSchema);
export default users;
