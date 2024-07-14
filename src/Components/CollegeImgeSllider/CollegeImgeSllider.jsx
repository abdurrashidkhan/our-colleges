"use client";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import clientImage from "../../assets/images/Banner_img/banner.jpg";
export default function OurClientReview() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  // slider content
  const reviewContent = [
    {
      id: 1,
      name: "Tom curs",
      position: "seo of lab info",
      image: clientImage,
      location: "Dhaka, Bangladesh",
      review:
        "Sure! For a concise review: Evaluated client's digital marketing. Website analyzed for SEO and UX. Content strategy and social media presence reviewed. Paid ads and email campaigns assessed. Conversion optimization and analytics examined. Recommendations provided for improvement",
    },
    {
      id: 2,
      name: "Tom curs",
      position: "seo of lab info",
      image: clientImage,
      location: "Dhaka, Bangladesh",
      review:
        "Sure! For a concise review: Evaluated client's digital marketing. Website analyzed for SEO and UX. Content strategy and social media presence reviewed. Paid ads and email campaigns assessed. Conversion optimization and analytics examined. Recommendations provided for improvement",
    },
    {
      id: 3,
      name: "Tom curs",
      position: "seo of lab info",
      image: clientImage,
      location: "Dhaka, Bangladesh",
      review:
        "Sure! For a concise review: Evaluated client's digital marketing. Website analyzed for SEO and UX. Content strategy and social media presence reviewed. Paid ads and email campaigns assessed. Conversion optimization and analytics examined. Recommendations provided for improvement",
    },
  ];
  return (
    <div className="hover:cursor-pointer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {reviewContent.map((r) => (
          <SwiperSlide key={r.id}>
            <div className="bg-[#fff] dark:bg-[#122033] shadow-2xl">
              <div className="">
                <Image
                  className="mx-auto rounded  shadow-2xl"
                  loading="lazy"
                  //
                  src={r.image}
                  width={"100%"}
                  height={"auto"}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
