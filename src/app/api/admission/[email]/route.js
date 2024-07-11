import connectMongodb from "@/lib/mongodb";
import admission from "@/models/admissionSchema";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { email } = params;
  const {
    sscRoll,
    hscRoll,
    sscBoard,
    hscBoard,
    sscPassingYear,
    hscPassingYear,
    college,
    selectSubject,
    uid,
    emailVerified,
    image,
    accessToken,
    studentEmail,
    studentName,
  } = await request.json();
  const data = {
    sscRoll,
    hscRoll,
    sscBoard,
    hscBoard,
    sscPassingYear,
    hscPassingYear,
    college,
    selectSubject,
    uid,
    emailVerified,
    image,
    accessToken,
    studentEmail,
    studentName,
  };
  const filter = { studentEmail: email };
  await connectMongodb();
    await admission.create(data);
    return NextResponse.json({
      message: "project upload",
      status: true,
      status: 200,
    });
  // if(!filter){
  //   await connectMongodb();
  //   await admission.create(data);
  //   return NextResponse.json({
  //     message: "project upload",
  //     status: true,
  //     status: 200,
  //   });
  // } else{
  //   return NextResponse.json(console.log("Already admitted"),{
  //     message: "Already admitted",
  //     status: false,
  //     status: 502,
      
  //   });
  // }
  
}
