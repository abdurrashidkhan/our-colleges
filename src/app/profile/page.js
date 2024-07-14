"use client";
import userInfo from "@/database/find/userFind/userFind";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiEdit } from "react-icons/fi";
import { auth } from "../firebase.init";
import Loading from "../loading";


export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(false);
  const [userFind, setUser] = useState([]);

  const userFindInfo = async (email) => {
    setLoading(true);
    const { userData } = await userInfo(email);
    setUser(userData);
    setLoading(false);
  };

  console.log(userFind?.displayName);

  useEffect(() => {
    userFindInfo(user?.email);
  }, [user]);

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <section className="">
      <div className="container mx-auto px-2">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
          />
        </div>

        <div className="flex items-center gap-5 justify-between px-5">
          <div className="">
            <img
              className="rounded-full w-[100px] h-auto mt-5"
              alt="loading"
              src={userFind?.photoURL}
              alt="loading"
            />

            <div className="py-3">
              <h1 className="text-2xl ">{userFind?.displayName}</h1>
              <p>Unknown</p>
            </div>
          </div>
          <div className="">
            <Link href="/profile/update">
            <FiEdit className="text-3xl" />
            </Link>
          </div>
        </div>

        <div className="">
          <div className="pb-5">
            <p className=" text-gray-700 dark:text-gray-400 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              debitis labore consectetur voluptatibus mollitia dolorem veniam
              omnis ut quibusdam minima sapiente repellendus asperiores
              explicabo, eligendi odit, dolore similique fugiat dolor,
              doloremque eveniet. Odit, consequatur. Ratione voluptate
              exercitationem hic eligendi vitae animi nam in, est earum culpa
              illum aliquam.
            </p>
          </div>

          <div className=" ">
            <div className=" ">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 justify-around">
                <div className=" ">
                  <p className=" text-gray-500 md:text-lg dark:text-gray-400">
                    Your Name
                  </p>
                  <p className="text-lg font-semibold">
                    {userFind?.displayName}
                  </p>
                </div>

                <div className="flex flex-col py-3">
                  <dt className=" text-gray-500 md:text-lg dark:text-gray-400">
                    Date Of Birth
                  </dt>
                  <dd className="text-lg font-semibold">Not Include</dd>
                </div>
              </div>
            </div>
            <div className="">
              <dl>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 justify-around">
                  <div className="">
                    <p className=" text-gray-500  dark:text-gray-400">
                      Location
                    </p>
                    <p className=" font-semibold">Unknown</p>
                  </div>

                  <div className="flex flex-col py-3">
                    <dt className=" text-gray-500 md:text-lg dark:text-gray-400">
                      Gender
                    </dt>
                    <dd className="text-lg font-semibold">Not Include</dd>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 justify-around">
                  <div className="">
                    <p className=" text-gray-500 md:text-lg dark:text-gray-400">
                      Phone Number
                    </p>
                    <dd className="text-lg font-semibold">Not Include</dd>
                  </div>

                  <div className="">
                    <p className=" text-gray-500 md:text-lg dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-lg font-semibold">{userFind?.email}</p>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
