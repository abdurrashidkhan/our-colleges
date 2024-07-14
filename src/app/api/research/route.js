import connectMongodb from "@/lib/mongodb";
import research from "@/models/researchSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, image, date, researcherLink, researcher } =
    await request.json();
  const data = { title, description, image, date, researcherLink, researcher };
  await connectMongodb();
  await research.create(data);
  return NextResponse.json(
    { message: "submitted.", status: true },
    { status: 201 }
  );
}
export async function GET(request) {
  await connectMongodb();
  const researchInfo = await research.find({}).catch();
  return NextResponse.json(
    { researchInfo }
  );
}
