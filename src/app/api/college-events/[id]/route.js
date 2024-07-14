import connectMongodb from "@/lib/mongodb";
import collegeEvent from "@/models/collegeEventSchema";
import { NextResponse } from "next/server";

// one user find
export async function GET(request, { params }) {
  const ObjectId = require('mongodb').ObjectId;
  const { id } = params;
  console.log(id)
  await connectMongodb();
  const collegeEvents = await collegeEvent.findOne({ _id: new  ObjectId(id) });
  return NextResponse.json({collegeEvents});
}
