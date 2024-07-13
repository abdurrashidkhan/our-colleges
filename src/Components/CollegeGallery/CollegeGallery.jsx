"use client";
import Loading from "@/app/loading";
import allCollegeGallery from "@/database/find/allCollegeGallery/allCollegeGallery";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function CollegeGallery() {
  const [isLoading, setLoading] = useState(false);
  const [allGallery, setAllGallery] = useState([]);

  const allCollegeGalleryInfo = async () => {
    setLoading(true);
    const { collegeGalleryInfo } = await allCollegeGallery();
    setAllGallery(collegeGalleryInfo);
    setLoading(false);
  };
  console.log(allGallery);
  useEffect(() => {
    allCollegeGalleryInfo();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <div className="container mx-auto px-4 py-10 ">
        <div className="text-center py-5">
          <h2 className="text-2xl font-semibold text-[#101C2C] dark:text-[#d8d8d8]">
            Our Gallery_
          </h2>
          <p className="py-3">
            Welcome to our College Gallery! Explore vibrant images and videos
            showcasing our beautiful campus, dynamic student life, and diverse
            events. Get a glimpse of our state-of-the-art facilities, cultural
            festivals, and academic excellence. Experience the spirit and energy
            that define our welcoming community. Enjoy the visual journey!
          </p>
        </div>
        {/* gallery content is here */}
        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5">
          {allGallery?.map((g) => (
            <div key={g?._id}>
              <Link href={`/college-event/${g?._id}`}>
                <img
                  className="rounded w-full h-[200px] shadow-2xl hover:scale-110 transform-gpu ease-in-out duration-500"
                  id=""
                  src={g?.image}
                  alt="loading"
                ></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
