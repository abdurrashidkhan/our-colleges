"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import insertAdmissionInfo from "@/database/insert/insertAdmissionInfo";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import CheckingUser from "../Admin/checkingUser";
export default function AdmissionForm() {
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
    console.log(data);
    // // loading start
    seIsLoading(true);

    // thimble
    const imgbbAPIKey = "ce39a956ae9b7efbe82ad1c15c002276";
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
          const admissionInfo = {
            studentName: data.studentName,
            number: data.number,
            subject: data.selectSubject,
            email: user?.email,
            address: data.address,
            birthday: data.birthday,
            image: img,
            // date: new Date(),
          };
          const insertProjects = insertAdmissionInfo(
            admissionInfo,
            seIsLoading,
            reset
          );
          console.log(insertProjects);
        }
      });
  };
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error.message);
  }
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
                <label htmlFor="studentName" className=" ">
                  Student Name{" "}
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Enter Your Full Name"
                  {...register("studentName", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "enter your full name ",
                    },
                  })}
                />
                <label className="">
                  {errors.studentName?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.studentName.message}
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

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="number" className=" ">
                  Mobile Number{" "}
                </label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Enter your number"
                  {...register("number", {
                    required: {
                      value: true,
                      message: "enter your number",
                    },
                  })}
                />
                <label className="">
                  {errors.number?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="birthday" className=" ">
                  Date of Birth{" "}
                </label>
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Enter your birthday"
                  {...register("birthday", {
                    required: {
                      value: true,
                      message: "enter your birthday",
                    },
                  })}
                />
                <label className="">
                  {errors.birthday?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.birthday.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
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
              <div className="w-full">
                <label htmlFor="address" className=" ">
                  Your Address{" "}
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Enter your address"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "enter your address",
                    },
                  })}
                />
                <label className="">
                  {errors.address?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.address.message}
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
