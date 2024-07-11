import connectMongodb from "@/lib/mongodb";
import admission from "@/models/admissionSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { sscRoll,
    hscRoll,
    sscBoard,
    hscBoard,
    sscPassingYear,
    hscPassingYear,
    college,
    selectSubject,
    email,
    uid,
    emailVerified,
    image,
    accessToken,
    role} = await request.json();
  const data = {sscRoll,
    hscRoll,
    sscBoard,
    hscBoard,
    sscPassingYear,
    hscPassingYear,
    college,
    selectSubject,
    email,
    uid,
    emailVerified,
    image,
    accessToken,
    role}
  await connectMongodb();
  await admission.create(data);
  return NextResponse.json({ message: "project upload" , status: true , status: 200 });
}