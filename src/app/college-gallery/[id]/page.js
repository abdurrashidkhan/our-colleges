"use client";
import Loading from "@/app/loading";
import findOneGallery from "@/database/find/findOneGallery/findOneGallery";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CollegeGallery({ params }) {
  const [collegeGallery, setCollegeGallery] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // console.log(params.id)
  const getCollegeGallery = async (id) => {
    setLoading(true);
    const { findGallery } = await findOneGallery(id);
    setCollegeGallery(findGallery);
    setLoading(false);
  };
  console.log(collegeGallery);

  useEffect(() => {
    getCollegeGallery(params.id);
  }, [params]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <div className="container mx-auto px-2 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 py-10">
          <div className="">
            <Image
              width={100}
              height={100}
              quality={75}
              className="w-full h-auto rounded shadow-2xl"
              src={collegeGallery?.image}
              alt="loading"
            />
          </div>
          <div className="px-5">
            <h3 className="text-lg font-medium">{collegeGallery?.title}</h3>
            <h2 className="py-2">{collegeGallery?.catagories}</h2>
            <h2 className="py-2">Date : {collegeGallery?.date}</h2>
            <p>{collegeGallery?.description?.slice(0, 300)}</p>
          </div>
        </div>
        {collegeGallery?.description?.length > 300 && (
          <p>{collegeGallery?.description}</p>
        )}
      </div>
    </section>
  );
}
