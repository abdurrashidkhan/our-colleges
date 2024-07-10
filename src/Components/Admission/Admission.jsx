"use client";
import { useForm } from "react-hook-form";
export default function AdmissionForm() {
  // const [user, loading, error] = useAuthState(auth);
  // const [signOut, outLoading, OutError] = useSignOut(auth);
  // const checkingUsers = CheckingUser(); // call checking user fund or not
  // useEffect(() => {
  //   CheckAdmin(user, signOut);
  // }, [user, signOut]);
  //

  // const [isLoading, seIsLoading] = useState(false);

  // useEffect(() => {
  //   CheckAdmin(user, signOut);
  // }, [user, signOut]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // // loading start
    // seIsLoading(true);

    // // thimble
    // const imgbbAPIKey = "0f140d3e8e7c284d126389c955a6ca33";
    // const formData = new FormData();
    // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    // // end thimble

    // const image = data.image[0];
    // formData.append("image", image);
    // // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.success) {
    //       const img = result.data.url;
    //       const project = {
    //         title: data.projectsTitle,
    //         projectDuration: data.projectDuration,
    //         categories: data.catagories,
    //         projectBeget: data.projectBeget,
    //         projectDiscount: data.projectDiscount,
    //         clientLocation: data.clientLocation,
    //         projectBenefit: data.projectBenefit,
    //         date: new Date(),
    //         image: img,
    //         description: data.projectDescription,
    //         // date: new Date(),
    //       };
    //       const insertProjects = projectInsert(project, seIsLoading, reset);
    //     }
    //   });
  };
  // if (loading || outLoading) {
  //   return <Loading></Loading>;
  // }
  // if (error || OutError) {
  //   console.log(error?.message);
  // }

  // //
  // if (loading || outLoading) {
  //   return <Loading></Loading>;
  // }
  // if (error || OutError) {
  //   console.log(error?.message);
  // }
  return (
    <div className="w-[98%] h-auto mb-5">
      <div
        id="project-content"
        className="rounded  bg-[#fff] text-[#000] dark:bg-[#122033] dark:text-[#e7e6eb] shadow-2xl  mb-[4rem]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-serif pt-4  pl-5">Add Project</h1>
          </div>
          <div className="p-4 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className="w-full">
                <label htmlFor="projectsTitle" className=" ">
                  Project Title{" "}
                </label>
                <input
                  id="projectsTitle"
                  name="projectsTitle"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here project Title "
                  {...register("projectsTitle", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "project title is short",
                    },
                  })}
                />
                <label className="">
                  {errors.projectsTitle?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.projectsTitle.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="projectDuration" className=" ">
                  Project Duration{" "}
                </label>
                <input
                  id="projectDuration"
                  name="projectDuration"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here Project Duration "
                  {...register("projectDuration", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.projectDuration?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.projectDuration.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="projectBeget" className=" ">
                  Project Beget{" "}
                </label>
                <input
                  id="projectBeget"
                  name="projectBeget"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Project Beget"
                  {...register("projectBeget", {
                    required: {
                      value: true,
                      message: "please enter your project price",
                    },
                  })}
                />
                <label className="">
                  {errors.projectBeget?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.projectBeget.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="projectDiscount" className=" ">
                  Project Discount{" "}
                </label>
                <input
                  id="projectDiscount"
                  name="projectDiscount"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="project Discount"
                  {...register("projectDiscount", {
                    required: {
                      value: true,
                      message: "please enter project discount",
                    },
                  })}
                />
                <label className="">
                  {errors.projectDiscount?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.projectDiscount.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="catagories" className=" ">
                  Project Catagories
                </label>
                <select
                  id="catagories"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  {...register("catagories", {
                    required: {
                      value: true,
                      message: "Select Catagories",
                    },
                  })}
                >
                  <option selected disabled>
                    Select Catagories
                  </option>
                  <option value="seo">Search Engine Optimization (SEO)</option>
                  <option value="content-marketing">Content Marketing</option>
                  <option value="social-Media-marketing">
                    Social Media Marketing
                  </option>
                  <option value="email-marketing">Email Marketing</option>
                  <option value="affiliate-marketing">
                    Affiliate Marketing
                  </option>
                  <option value="influencer-marketing">
                    Influencer Marketing
                  </option>
                  <option value="analytics-data-analysis">
                    Analytics and Data Analysis
                  </option>
                  <option value="mobile-marketing">Mobile Marketing</option>
                  <option value="video-marketing">Video Marketing</option>
                  <option value="ecommerce-marketing">
                    E-commerce Marketing
                  </option>
                  <option value="registry-gifting">Registry and Gifting</option>
                </select>
                <label className="">
                  {errors.catagories?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.catagories.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="clientLocation" className=" ">
                  Client Location
                </label>
                <input
                  id="clientLocation"
                  name="clientLocation"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Client Location"
                  {...register("clientLocation", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.clientLocation?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.clientLocation.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="pt-3">
              <label htmlFor="image" className=" ">
                Project Photo
              </label>
              <input
                id="image"
                name="image"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here project photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="pt-3">
              <label htmlFor="projectBenefit" className=" ">
                Project Benefit{" "}
              </label>
              <textarea
                cols="10"
                rows="5"
                id="projectBenefit"
                name="projectBenefit"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here project Benefit "
                {...register("projectBenefit", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.projectBenefit?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.projectBenefit.message}
                  </span>
                )}
              </label>
            </div>
            <div className="pt-3">
              <label htmlFor="projectDescription" className=" ">
                Project Description
              </label>
              <textarea
                cols="10"
                rows="5"
                id="projectDescription"
                name="projectDescription"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here project Description "
                {...register("projectDescription", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.projectDescription?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.projectDescription.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {/* {isLoading ? (
            <button
              className="btn w-full rounded capitalize bg-blue-700 py-2 text-white hover:bg-blue-600 rounded-b border-none"
              disabled
            >
              <span className="loading loading-spinner"></span>
              loading...
            </button>
          ) : (
            <button className="uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b">
              submit
            </button>
          )} */}
        </form>
      </div>
    </div>
  );
}
