"use client";
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import insertService from "@/database/insert/insertService";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

// import './Upload.css'

const AddService = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
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

    // const imageOne = data.imageOne[0];
    // formData.append('imageOne', imageOne);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleOne(result.data.url)
    //     }
    //   })

    // const imageTwo = data.imageTwo[0];
    // formData.append('imageTwo', imageTwo);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleTwo(result.data.url)
    //     }
    //   })

    // const imageThree = data.imageThree[0];
    // formData.append('imageThree', imageThree);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleThree(result.data.url)
    //     }
    //   })

    // const imageFore = data.imageFore[0];
    // formData.append('imageFore', imageFore);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleFore(result.data.url)
    //     }
    //   })

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
          const service = {
            name: data.servicesName,
            title: data.servicesTitle,
            categories: data.catagories,
            price: data.servicePrice,
            serviceDiscount: data.serviceDiscount,
            date: new Date(),
            facture: data.serviceFacture,
            img: img,
            description: data.serviceDescription,
          };
          // console.log(service);
          const insertServices = insertService(service, seIsLoading, reset);
        }
      });
  };
  if (loading || outLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div className="w-[98%] h-auto mb-5">
      <div
        id="service-content"
        className="rounded  bg-[#fff] text-[#000] dark:bg-[#122033] dark:text-[#e7e6eb] shadow-2xl  mb-[4rem]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-serif pt-4  pl-5">Add Service</h1>
          </div>
          <div className="p-4 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className="w-full">
                <label htmlFor="servicesName" className=" ">
                  Service Name{" "}
                </label>
                <input
                  id="servicesName"
                  name="servicesName"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here service Name "
                  {...register("servicesName", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.servicesName?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.servicesName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="servicesTitle" className=" ">
                  Service Title{" "}
                </label>
                <input
                  id="servicesTitle"
                  name="servicesTitle"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="Type Here service Name "
                  {...register("servicesTitle", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "service title is short",
                    },
                  })}
                />
                <label className="">
                  {errors.servicesTitle?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.servicesTitle.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="servicePrice" className=" ">
                  Service price{" "}
                </label>
                <input
                  id="servicePrice"
                  name="servicePrice"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="service price"
                  {...register("servicePrice", {
                    required: {
                      value: true,
                      message: "please enter your service price",
                    },
                  })}
                />
                <label className="">
                  {errors.servicePrice?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.servicePrice.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="serviceDiscount" className=" ">
                  service Discount{" "}
                </label>
                <input
                  id="serviceDiscount"
                  name="serviceDiscount"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="service Discount"
                  {...register("serviceDiscount", {
                    required: {
                      value: true,
                      message: "please enter service discount",
                    },
                  })}
                />
                <label className="">
                  {errors.serviceDiscount?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.serviceDiscount.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              <div className="w-full">
                <label htmlFor="catagories" className=" ">
                  Service Catagories
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
                <label htmlFor="serviceFacture" className=" ">
                  service Facture
                </label>
                <input
                  id="serviceFacture"
                  name="serviceFacture"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                  placeholder="service Facture"
                  {...register("serviceFacture", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  })}
                />
                <label className="">
                  {errors.serviceFacture?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.serviceFacture.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="pt-3">
              <label htmlFor="image" className=" ">
                Service Photo
              </label>
              <input
                id="image"
                name="image"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here service photos "
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
              <label htmlFor="serviceBenefit" className=" ">
                Service Benefit{" "}
              </label>
              <textarea
                cols="10"
                rows="5"
                id="serviceBenefit"
                name="serviceBenefit"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here service Benefit "
                {...register("serviceBenefit", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.serviceBenefit?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.serviceBenefit.message}
                  </span>
                )}
              </label>
            </div>
            <div className="pt-3">
              <label htmlFor="serviceDescription" className=" ">
                Service Description
              </label>
              <textarea
                cols="10"
                rows="5"
                id="serviceDescription"
                name="serviceDescription"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-700 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-[#1f296117]  bg-[#fff] mt-2"
                placeholder="Type Here service Description "
                {...register("serviceDescription", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                })}
              />
              <label className="">
                {errors.serviceDescription?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.serviceDescription.message}
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
};

export default AddService;
