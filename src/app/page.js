import Banner from "@/Components/Banner/Banner";
import CollegeGallery from "@/Components/CollegeGallery/CollegeGallery";
import Colleges from "@/Components/Colleges/Colleges";
import ReviewPage from "@/Components/Review/reviewPage";
import Researched from "./our-researched/page";

export default function Home() {
  return (
    <>
      <Banner />
      <Colleges />
      <CollegeGallery />
      <Researched/>
      <ReviewPage/>
    </>
  );
}
