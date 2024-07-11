import OurClientReview from "@/Components/CollegeImgeSllider/CollegeImgeSllider";

export default function MyCollege() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-20 sm:pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-5">
        
        <div className="">
          <OurClientReview />
        </div>
        <div className="">
          <div className="">
            <div className="px-4">
              <p className="text-[#20b820] font-semibold">Our Testimonial__</p>
              <h1 className="capitalize text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444] hvf-dom-checked ">
                What our clients say about us.
              </h1>
              <p>
                Conducted comprehensive website analysis focusing on SEO, user
                experience, and content relevance. Identified optimization
                opportunities for enhanced visibility and engagement. Presented
                actionable recommendations for improved performance
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  )
}
