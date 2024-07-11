import OurClientReview from "@/Components/CollegeImgeSllider/CollegeImgeSllider";

export default function MyCollege() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-20 sm:pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
          <div className="">
            <OurClientReview />
          </div>
          <div className="">
            <div className="px-4">
              <div className="">
                <p className="text-[#20b820] font-semibold">Our College__</p>
                <h1 className="capitalize text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold py-3 dark:text-[#fff] text-[#444444] hvf-dom-checked ">
                  Dhaka university about us.
                </h1>
                {/* <p>
                  University of Dhaka || the highest echelon of academic
                  excellence. On the first day of July 1921 the University of
                  Dhaka opened its doors to students with Sir P.J. Hartog as the
                  first Vice-Chancellor of the University. The University was
                  set up in a picturesque part of the city known as Ramna on 600
                  acres of land.
                </p> */}
              </div>
              <div className=" py-5">
                <ul>
                  <li className="py-1">
                    <div className="flex items-center justify-start gap-3">
                      <p className="font-bold text-sm">01.</p>
                      <p className="font-medium ">
                        {" "}
                        World University Rankings: 554 in 2025
                      </p>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex items-center justify-start gap-3">
                      <p className="font-bold text-sm">02.</p>
                      <p className="font-medium ">
                        Asian University Rankings: #19 in Southern Asia
                      </p>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex items-center justify-start gap-3">
                      <p className="font-bold text-sm">03.</p>
                      <p className="font-medium ">
                        Approximately 39,496 students
                      </p>
                    </div>
                  </li>

                  <li className="py-1">
                    <div className="flex items-center justify-start gap-3">
                      <p className="font-bold text-sm">04.</p>
                      <p className="font-medium "> Around 1,999 teachers</p>
                    </div>
                  </li>

                  <li className="py-1.5">
                    <div className="flex items-center justify-center gap-3">
                      <p className="font-bold text-sm">05.</p>
                      <p className="font-medium ">
                        The university offers various facilities for its
                        students, including libraries, research centers, and
                        residential halls.
                      </p>
                    </div>
                  </li>
                  <li className="py-1.5">
                    <div className="flex items-center justify-center gap-3">
                      <p className="font-bold text-sm">06.</p>
                      <p className="font-medium ">
                        {" "}
                        Significant contributions in research across various
                        disciplines, evidenced by numerous publications and
                        citation.
                      </p>
                    </div>
                  </li>
                  <li className="py-1.5">
                    <div className="flex items-center justify-start gap-3">
                      <p className="font-bold text-sm">07.</p>
                      <p className="font-medium ">
                        Situated in Ramna, Dhaka, the university occupies 275
                        acres of land
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="py-5">
          <p>
            On 31 January a delegation led by Nawab Sir Salimullah,Nawab Syed
            Nawab Ali Chowdhury and Sher e-Bangla A.K. Fazlul Hug met Viceroy
            Lord Hardinge on his visit to Dhaka (then Dacca) and raised the
            demand of the establishment of a University in the region.On 2
            February a communique was published stating the decision of the
            Government of India to recommend the Constitution of a University at
            Dhaka.On 4 April the Government of British India invited the
            Government of Bengal to submit a complete scheme of the
            University.On 27 May the Government of Bengal published resolution
            in regard to the proposed University and appointed a Committee of
            thirteen members with Sir Robert Nathaniel as President to frame the
            scheme. The Committee, known as Nathan committee, submitted the
            scheme in the same year.
          </p>
        </div>
      </div>
    </section>
  );
}
