import connectMongodb from "@/lib/mongodb";
import users from "@/models/usersSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  if (req.method === 'GET') {
    const { email } = params;
    await connectMongodb();
    const user = await users.findOne({ email: email }).exec();
    const isAdmin = await user?.role === "admin";
    return NextResponse.json({ isAdmin});
  } else {
      console.log(`Method ${req.method} not allowed`);
      res.setHeader('Allow', ['GET']);
  }
}
