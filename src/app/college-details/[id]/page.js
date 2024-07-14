"use client";
import Loading from "@/app/loading";
import findOneCollegeEvent from "@/database/find/findOneCollegeEvent/findOneCollegeEvent";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CollageDetails({ params }) {
  const [collegeEvent, setCollegeEvent] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // console.log(params.id)
  const getCollegeEvent = async (id) => {
    setLoading(true);
    const { collegeEvents } = await findOneCollegeEvent(id);
    setCollegeEvent(collegeEvents);
    setLoading(false);
  };
  console.log(collegeEvent);

  useEffect(() => {
    getCollegeEvent(params.id);
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
              src={collegeEvent?.image}
              alt="loading"
            />
          </div>
          <div className="px-5">
            <h3 className="text-lg font-medium">{collegeEvent?.title}</h3>
            <h2 className="py-2">Date : {collegeEvent?.date}</h2>
            <p>{collegeEvent?.description?.slice(0, 300)}</p>
          </div>
        </div>
        {collegeEvent?.description?.length > 300 && (
          <p>{collegeEvent?.description}</p>
        )}
      </div>
    </section>
  );
}
