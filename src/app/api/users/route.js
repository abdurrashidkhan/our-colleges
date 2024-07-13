import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { displayName, email, uid, emailVerified, photoURL, accessToken } =
    await request.json();
  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    displayName,
    email,
    uid,
    emailVerified,
    photoURL,
    accessToken,
    "role":"student"
  };
  await connectMongodb();
  await users.findOneAndUpdate(updateDoc, filter, options);
  return NextResponse.json(
    { message: "User Registered", status: true },
    { status: 201 }
  );
}



// one user find
export async function GET(request, { params }) {
  const { email } = params;
  // console.log(email)
  await connectMongodb();
  const allUsers = await users.find();
  console.log(allUsers)
  // const user = await users.findOne({ email:email });
  return NextResponse.json({ allUsers });
}