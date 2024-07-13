"use client";
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import CheckingUser from "@/Components/Admin/checkingUser";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import uesDeleteService from "@/database/delete/useDeleteService";
import uesAllServices from "@/database/find/allCollegeGallery/allService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function ManageServices() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [allServiceInfo, setServiceInfo] = useState([]);
  const [IsLoading, setLoading] = useState(false);
  CheckingUser(); // call checking user fund or not
  // data faceting
  const serviceInfo = async () => {
    setLoading(true);
    const { allService } = await uesAllServices();
    setServiceInfo(allService);
    setLoading(false);
  };
  const deleteService = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = uesDeleteService(id);
        // console.log(result)
        Swal.fire({
          title: "Deleted!",
          text: "Service deleted.",
          icon: "success",
        });
      }
    });
  };
  // data faceting
  useEffect(() => {
    CheckAdmin(user, signOut);
    serviceInfo();
  }, [user, signOut]);
  // data faceting
  if (loading || outLoading || IsLoading) {
    return <Loading></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div>
      {allServiceInfo?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-[#000] dark:text-[#fff] ">No.</th>
                <th className="text-[#000] dark:text-[#fff] ">Title</th>
                <th className="text-[#000] dark:text-[#fff] ">Date</th>
                <th className="text-[#000] dark:text-[#fff] ">Price</th>
                <th className="text-[#000] dark:text-[#fff] ">Categories</th>
                <th
                  colSpan={2}
                  className="text-center text-[#000] dark:text-[#fff] "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allServiceInfo.map((service, index) => (
                <tr key={service?._id}>
                  <th>{index + 1}</th>
                  <td className="capitalize">{service?.title}</td>
                  <td className="capitalize">{service?.date.slice(0, 10)}</td>
                  <td className="capitalize">&#36;{service?.price}</td>
                  <td className="capitalize">{service?.categories}</td>
                  <td className="capitalize">
                    <Link href={`/service/update/${service?._id}`}>
                      <FaRegEdit className="text-xl text-[#158111]" />
                    </Link>
                  </td>
                  <td className="capitalize">
                    <button onClick={() => deleteService(service?._id)}>
                      <MdDelete className="text-xl mt-1 text-red-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <div className="content_center">
            <h2>No Data Found...</h2>
          </div>
        </div>
      )}
    </div>
  );
}
