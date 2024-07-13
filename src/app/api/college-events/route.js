import connectMongodb from "@/lib/mongodb";
import collegeEvent from "@/models/collegeEventSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, image, date, catagories, location } =
    await request.json();
  const data = { title, description, image, date, catagories, location };
  await connectMongodb();
  await collegeEvent.create(data);
  return NextResponse.json(
    { message: "submitted.", status: true },
    { status: 201 }
  );
}
export async function GET(request) {
  await connectMongodb();
  const allEvents = await collegeEvent.find({}).catch();
  return NextResponse.json(
    { allEvents }
  );
}
