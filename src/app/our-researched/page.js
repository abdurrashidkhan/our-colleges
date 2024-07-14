"use client";
import allFindResearch from "@/database/find/allFindResearch/allFindResearch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Researched() {
  const [isLoading, setLoading] = useState(false);
  const [allResearched, setAllResearched] = useState([]);

  const allResearchedInfo = async () => {
    setLoading(true);
    const { researchInfo } = await allFindResearch();
    setAllResearched(researchInfo);
    setLoading(false);
  };
  console.log(allResearched);
  useEffect(() => {
    allResearchedInfo();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <div className="container mx-auto px-4 py-10 ">
        <div className="text-center ">
          <h2 className="text-2xl font-semibold text-[#101C2C] dark:text-[#d8d8d8]">
            Our Researched_
          </h2>
          <h1 className="py-5">
            Welcome to our Researched Section, offering detailed insights and
            data on service utilization trends, user satisfaction, comparative
            analysis, resource allocation, and future projections. Our goal is
            to provide a transparent view of our operations, helping you make
            informed decisions and stay updated on our services and facilities.
            Explore the data and reach out with any questions!
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-5 py-10">
          {allResearched?.map((research) => (
            <div
              className="bg-[#fff] dark:bg-[#152338] shadow-2xl rounded"
              key={research?._id}
            >
              <div className="w-full h-auto">
                <Image
                // 
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-t w-full h-auto"
                  src={research.image}
                  alt="loading"
                />
              </div>
              <div className="px-1">
                <h2 className="py-3 text-lg font-medium capitalize">{`${research?.title.slice(
                  0,
                  30
                )}...`}</h2>
                <h2>{`${research?.description.slice(0, 150)}....`}</h2>
              </div>
              <div className="">
                <Link
                  className="bg-[#A32D47] w-full block text-center text-[#fff] py-1 rounded-b mt-3"
                  href={`/research/${research?._id}`}
                >
                  learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
