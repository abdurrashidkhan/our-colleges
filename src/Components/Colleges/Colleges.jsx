import Image from "next/image";
import Link from "next/link";
import DhakaUn from "../../assets/images/Banner_img/banner.jpg";
export default function Colleges() {
  return (
    <section className="">
      <div className="container mx-auto py-8 px-2">
        <div className="">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#101C2C] dark:text-[#d8d8d8]">
              Colleges_
            </h2>
            <p className="tracking-[.5px] text-sm dark:text-[#dbdbdb] text-[#101c2cec] font-medium py-5">
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
              <div className="bg-[#fff] dark:bg-[#152338] shadow-2xl rounded">
                <div className="">
                  <Image
                    className="w-[100%] h-[200px] rounded-t"
                    src={DhakaUn}
                    alt="loading"
                  />
                </div>
                <div className="px-1">
                  <h2 className="pt-4 pb-2 font-semibold ">Dhaka University</h2>
                  {/* <p>Admission Dates : 1 jan to 2 feb </p> */}
                  <p className="pb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit ipsam reprehenderit, veniam pariatur magni optio non
                    cumque corrupti dolor omnis,
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
              <div className="bg-[#fff] dark:bg-[#152338] shadow-2xl rounded">
                <div className="">
                  <Image
                    className="w-[100%] h-[200px] rounded-t"
                    src={DhakaUn}
                    alt="loading"
                  />
                </div>
                <div className="px-1">
                  <h2 className="pt-4 pb-2 font-semibold ">Dhaka University</h2>
                  <p className="pb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit ipsam reprehenderit, veniam pariatur magni optio non
                    cumque corrupti dolor omnis,
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
              <div className="bg-[#fff] dark:bg-[#152338] shadow-2xl rounded">
                <div className="">
                  <Image
                    className="w-[100%] h-[200px] rounded-t"
                    src={DhakaUn}
                    alt="loading"
                  />
                </div>
                <div className="px-1">
                  <h2 className="pt-4 pb-2 font-semibold ">Dhaka University</h2>
                  <p className="pb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit ipsam reprehenderit, veniam pariatur magni optio non
                    cumque corrupti dolor omnis,
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
              <div className="bg-[#fff] dark:bg-[#152338] shadow-2xl rounded">
                <div className="">
                  <Image
                    className="w-[100%] h-[200px] rounded-t"
                    src={DhakaUn}
                    alt="loading"
                  />
                </div>
                <div className="px-1">
                  <h2 className="pt-4 pb-2 font-semibold ">Dhaka University</h2>
                  <p className="pb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit ipsam reprehenderit, veniam pariatur magni optio non
                    cumque corrupti dolor omnis,
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
          </div>
        </div>
      </div>
    </section>
  );
}
