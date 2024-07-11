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
    //         sscRoll: data.sscRoll,
    //         hscRoll: data.hscRoll,
    //         sscBoard: data.sscBoard,
    //         hscBoard: data.hscBoard,
    //         sscPassingYear: data.sscPassingYear,
    //         hscPassingYear: data.hscPassingYear,
    //         college: data.college,
    //         selectSubject: data.selectSubject,
    //         date: new Date(),
    //         image: img,
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
        className="rounded  bg-[#fff] text-[#000] dark:bg-[#122033] dark:text-[#e7e6eb] shadow-2xl mt-5  mb-[4rem]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className="w-full">
                <label htmlFor="sscRoll" className=" ">
                  SSC Roll{" "}
                </label>
                <input
                  id="sscRoll"
                  name="sscRoll"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here SSC Roll "
                  {...register("sscRoll", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "enter your ssc roll ",
                    },
                  })}
                />
                <label className="">
                  {errors.sscRoll?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.sscRoll.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="hscRoll" className=" ">
                  HSC Roll{" "}
                </label>
                <input
                  id="hscRoll"
                  name="hscRoll"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here HSC Roll"
                  {...register("hscRoll", {
                    required: {
                      value: true,
                      message: "enter your hsc roll",
                    },
                  })}
                />
                <label className="">
                  {errors.hscRoll?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.hscRoll.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="sscBoard" className=" ">
                  Board{" "}
                </label>
                <select
                  id="sscBoard"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  {...register("sscBoard", {
                    required: {
                      value: true,
                      message: "Select Board",
                    },
                  })}
                >
                  <option selected disabled>
                    Select Board
                  </option>
                  <option value="dhaka">Dhaka</option>
                  <option value="comilla">Comilla</option>
                  <option value=" chattogram ">Chattogram</option>
                  <option value="rajshahi ">Rajshahi </option>
                </select>
                <label className="">
                  {errors.sscBoard?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.sscBoard.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="hscBoard" className=" ">
                  Board{" "}
                </label>
                <select
                  id="hscBoard"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  {...register("hscBoard", {
                    required: {
                      value: true,
                      message: "Select hscBoard",
                    },
                  })}
                >
                  <option selected disabled>
                    Select Board
                  </option>
                  <option value="dhaka">Dhaka</option>
                  <option value="comilla">Comilla</option>
                  <option value=" chattogram ">Chattogram</option>
                  <option value="rajshahi ">Rajshahi </option>
                </select>
                <label className="">
                  {errors.hscBoard?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.hscBoard.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="sscPassingYear" className=" ">
                  Passing Year{" "}
                </label>
                <input
                  id="sscPassingYear"
                  name="sscPassingYear"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here Passing Year "
                  {...register("sscPassingYear", {
                    required: {
                      value: true,
                      message: "Enter Your Passing Year",
                    },
                  })}
                />
                <label className="">
                  {errors.sscPassingYear?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.sscPassingYear.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="hscPassingYear" className=" ">
                  Passing Year{" "}
                </label>
                <input
                  id="hscPassingYear"
                  name="hscPassingYear"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here Passing Year "
                  {...register("hscPassingYear", {
                    required: {
                      value: true,
                      message: "Enter Your Passing Year",
                    },
                  })}
                />
                <label className="">
                  {errors.hscPassingYear?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.hscPassingYear.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <h2 className="py-4 font-semibold">Step:02</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="college" className=" ">
                  Select College{" "}
                </label>
                <select
                  id="college"
                  name="college"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  {...register("college", {
                    required: {
                      value: true,
                      message: "Select College",
                    },
                  })}
                >
                  <option selected disabled>
                    Select College
                  </option>
                  <option value="dhaka-university">Dhaka University</option>
                  <option value="jahangirnagar-university ">
                    Jahangirnagar University
                  </option>
                  <option value="khulna-university ">Khulna University </option>
                  <option value="rajshahi-university ">
                    University of Rajshahi
                  </option>
                </select>
                <label className="">
                  {errors.college?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.college.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="selectSubject" className=" ">
                  Select Subject{" "}
                </label>
                <select
                  id="selectSubject"
                  name="selectSubject"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  {...register("selectSubject", {
                    required: {
                      value: true,
                      message: "Select select",
                    },
                  })}
                >
                  <option selected disabled>
                    Select Subject
                  </option>
                  <option value="economics">Economics</option>
                  <option value="political-science">Political Science </option>
                  <option value="geography-environment">
                    Geography Environment
                  </option>
                  <option value="bangla">Bangla</option>
                  <option value="sociology">Sociology</option>
                </select>
                <label className="">
                  {errors.selectSubject?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.selectSubject.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="pt-6">
              <label htmlFor="image" className=" ">
                Student Photos
              </label>
              <input
                id="image"
                name="image"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Drop your photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "input box is clear please Drop your photos",
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
