import connectMongodb from "@/lib/mongodb";
import collegeGallery from "@/models/collageGallery";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const ObjectId = require('mongodb').ObjectId;
  const { id } = params;
  // console.log(id)
  await connectMongodb();
  const findGallery = await collegeGallery.findOne({ _id: new ObjectId(id) });
  return NextResponse.json({findGallery});
}
