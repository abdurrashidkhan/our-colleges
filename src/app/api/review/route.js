import connectMongodb from "@/lib/mongodb";
import review from "@/models/reviewSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { reviewStar, reviewDescription, email, displayName, image } =
    await request.json();
  const data = {
    reviewStar,
    reviewDescription,
    email,
    displayName,
    image,
  };
  await connectMongodb();
  await review.create(data);
  return NextResponse.json(
    { message: "Thank for you feedback.", status: true },
    { status: 201 }
  );
}
