import "./style.css";
export default function Banner() {
  return (
    <main>
      <div className="container mx-auto py-5">
        <div className="">
          <div className="relative" id="banner_image">
            <div className="banner_content">
              <div className="px-5 ">
                <h1 className="text-4xl text-[#fff] font-semibold tracking-[5px]">
                  Welcome Our College.
                </h1>
                <p className="py-6 text-[#fff] tracking-[1px]">
                  Welcome to our unified platform, bringing together three
                  esteemed institutions: Oakridge College, Maplewood University,
                  and Pinecrest Institute. Our website offers a seamless
                  experience for students to book a variety of campus
                  facilities, including libraries, study rooms, sports
                  complexes, and event spaces. With a user-friendly interface,
                  students can effortlessly manage their bookings, ensuring they
                  have the resources they need for academic success and
                  extracurricular activities. Whether you&apos;re reserving a
                  study room for group work or scheduling time at the gym, our
                  platform is designed to streamline your college experience,
                  saving you time and enhancing your productivity.
                </p>
                <button className="bg-[#A32D47] text-[#fff]  text-xl py-1.5 px-4 rounded hover:px-5 ease-in-out duration-500">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
