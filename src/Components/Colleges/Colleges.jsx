"use client";
import Loading from "@/app/loading";
import uesAllEvents from "@/database/find/allEvents/allEvents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Colleges() {
  const [isLoading, setLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  const allEventsInfo = async () => {
    setLoading(true);
    const { allEvents } = await uesAllEvents();
    setAllEvents(allEvents);
    setLoading(false);
  };
  useEffect(() => {
    allEventsInfo();
  }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="">
      <div className="container mx-auto py-8 px-2">
        <div className="">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#101C2C] dark:text-[#d8d8d8]">
              Colleges_
            </h2>
            <p className="tracking-[.5px] text-base dark:text-[#dbdbdb] text-[#101c2cec] font-medium py-5">
              Oakridge College excels in liberal arts, Maplewood University
              leads in research and engineering, and Pinecrest Institute
              specializes in business and management. Each offers
              state-of-the-art facilities and vibrant communities, fostering
              intellectual growth, innovation, and career success. Our platform
              provides seamless access to their resources.
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-center">
              {/*  */}
              {allEvents?.map((e) => (
                <div key={e?._id}>
                  <div className="bg-[#fff] dark:bg-[#152338] shadow-2xl rounded">
                    <div className="">
                      <Image
                        quality={100}
                        width={100}
                        height={100}
                        className="w-[100%] h-[200px] rounded-t"
                        src={e?.image}
                        alt="loading"
                      />
                    </div>
                    <div className="px-1">
                      <h2 className="pt-5 font-semibold ">{e?.title}</h2>
                      <h2 className="py-2 font-medium ">{e?.date}</h2>
                      {/* <p>Admission Dates : 1 jan to 2 feb </p> */}
                      <p className="pb-3">
                        {`${e?.description?.slice(0, 100)}....`}
                      </p>
                    </div>
                    <div className="">
                      <Link
                        className="bg-[#A32D47] text-[#fff] py-1 px-5 w-[100%] block rounded-b text-center"
                        href={"/dhaka_un"}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
