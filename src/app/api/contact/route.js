import connectMongodb from "@/lib/mongodb";
import contact from "@/models/contactSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { displayName, description, email } =
    await request.json();
  const data = {displayName, description, email };
  await connectMongodb();
  await contact.create(data);
  return NextResponse.json(
    { message: "Thank for you feedback.", status: true },
    { status: 201 }
  );
}