"use client";
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import CheckingUser from "@/Components/Admin/checkingUser";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import insertResearch from "@/database/insert/insertResearch";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
export default function AddResearched() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser(); // call checking user fund or not
  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);
  //

  const [isLoading, seIsLoading] = useState(false);

  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // loading start
    seIsLoading(true);

    // thimble
    const imgbbAPIKey = "0f140d3e8e7c284d126389c955a6ca33";
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    // end thimble

    const image = data.image[0];
    formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const researchInfo = {
            title: data.title,
            researcher:data.researcher,
            description: data.description,
            catagories: data.catagories,
            date: data.date,
            image: img,
            // date: new Date(),
          };
          const research = insertResearch(
            researchInfo,
            seIsLoading,
            reset
          );
        }
      });
  };
  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }

  //
  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div className="w-[98%] h-auto mb-5">
      <div
        id="project-content"
        className="rounded  bg-[#fff] text-[#000] dark:bg-[#122033] dark:text-[#e7e6eb] shadow-2xl  mb-[4rem]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-serif pt-4  pl-5">
            Add Research
            </h1>
          </div>
          <div className="p-4 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className="w-full">
                <label htmlFor="title" className=" ">
                  Title{" "}
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here project Title "
                  {...register("title", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "project title is short",
                    },
                  })}
                />
                <label className="">
                  {errors.title?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.title.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="date" className=" ">
                  Date{" "}
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here Project Duration "
                  {...register("date", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.date?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.date.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="researcher" className=" ">
                Researcher{" "}
                </label>
                <input
                  id="researcher"
                  name="researcher"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder=" researcher name" 
                  {...register("researcher", {
                    required: {
                      value: true,
                      message: "please enter researcher name",
                    },
                  })}
                />
                <label className="">
                  {errors.researcher?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.researcher.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="catagories" className=" ">
                Catagories{" "}
                </label>
                <input
                  id="catagories"
                  name="catagories"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder=" catagories name" 
                  {...register("catagories", {
                    required: {
                      value: true,
                      message: "please enter catagories name",
                    },
                  })}
                />
                <label className="">
                  {errors.catagories?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.catagories.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="pt-3">
              <label htmlFor="image" className=" ">
              Research Photo
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
              <label htmlFor="description" className=" ">
                Description{" "}
              </label>
              <textarea
                cols="10"
                rows="5"
                id="description"
                name="description"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here project Benefit "
                {...register("description", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.description?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {isLoading ? (
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
          )}
        </form>
      </div>
    </div>
  );
}
