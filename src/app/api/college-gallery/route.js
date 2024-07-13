import connectMongodb from "@/lib/mongodb";
import collegeGallery from "@/models/collageGallery";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, image, date, catagories, location } =
    await request.json();
  const data = { title, description, image, date, catagories, location };
  await connectMongodb();
  await collegeGallery.create(data);
  return NextResponse.json(
    { message: "submitted.", status: true },
    { status: 201 }
  );
}
export async function GET(request) {
  await connectMongodb();
  const collegeGalleryInfo = await collegeGallery.find({}).catch();
  return NextResponse.json(
    { collegeGalleryInfo }
  );
}

