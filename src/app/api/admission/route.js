import connectMongodb from "@/lib/mongodb";
import admission from "@/models/admissionSchema";
import { NextResponse } from "next/server";

export async function POST(request) {

  const {
    email,
    studentName,
    number,
    address,
    birthday,
    subject,
    image
  } = await request.json();
  const data = {
    email,
    studentName,
    number,
    address,
    birthday,
    subject,
    image
  };
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
