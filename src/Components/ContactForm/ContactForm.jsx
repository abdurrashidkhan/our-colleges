"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import CheckingUser from "../Admin/checkingUser";
import insertContactInfo from "@/database/insert/insertContactInfo";
export default function ContactForm() {
  const [user, loading, error] = useAuthState(auth);
  // const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser(); // call checking user fund or no
  const [isLoading, seIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    seIsLoading(true);

    const contactInfo = {
      displayName: data.userName,
      description: data.description,
      email: data?.email,
    };
    const insertProjects = insertContactInfo(contactInfo, seIsLoading, reset);
  };
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error.message);
  }

  return (
    <section>
      <div className="bg-[#f5f5f5] dark:bg-[#0f1b2bd3] rounded shadow-2xl py-10 px-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className="w-full">
                <label htmlFor="userName" className=" ">
                  Name{" "}
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Enter Your Full Name"
                  {...register("userName", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "enter your full name ",
                    },
                  })}
                />
                <label className="">
                  {errors.userName?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.userName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="email" className=" ">
                  Email Address{" "}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "enter your email address",
                    },
                  })}
                />
                <label className="">
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="w-full py-5">
              <textarea
                id="description"
                name="description"
                type="text"
                cols={20}
                rows={10}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#ffffff00] mt-2 "
                placeholder="Share feedback...."
                {...register("description", {
                  required: {
                    value: true,
                    maxLength: 60,
                    message: "Share feedback....",
                  },
                })}
              ></textarea>

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
    </section>
  );
}
