import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const { email } = params;
  await connectMongodb();
  const userData = await users.findOne({ email: email });
  const isAdmin = await userData?.role === "admin";
  return NextResponse.json({ isAdmin,userData});
}
