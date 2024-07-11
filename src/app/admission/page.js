"use client"
import CheckAdmin from "@/Components/Admin/CheckAdmin";
import CheckingUser from "@/Components/Admin/checkingUser";
import AdmissionForm from "@/Components/Admission/Admission";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Loading from "../loading";
import "./style.css";

export default function Admission() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const [isLoading, seIsLoading] = useState(false);
  const checkingUsers = CheckingUser(); // call checking user fund or not
  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);
// // 


useEffect(() => {
  CheckAdmin(user, signOut);
}, [user, signOut]);
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
    <section className="h-auto dark:bg-[#122033] dark:text-[#dddddd] bg-[#eeeeee] text-[#000] ease-in-out duration-1000">
      <div className="container mx-auto py-5">
        <div id="admission_banner" className="relative">
          <div className="admission_content text-center">
            <h1 className="text-4xl font-semibold text-[#fff]">Join Your Collage.</h1>
            <p className="text-[#faf3f3dd] py-10 tracking-[1px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dolor voluptatum tempore dignissimos provident dolorum doloribus iste ipsam incidunt labore iure fuga unde nobis mollitia dolores earum distinctio adipisci eligendi nostrum, asperiores est vero? Necessitatibus, excepturi. Laboriosam assumenda quaerat eius? Voluptates, culpa doloremque nostrum laudantium a porro deleniti consequuntur architecto?</p>
            <button  className="bg-[#ff3b55a8] px-2 py-2  text-lg text-[#fff] rounded shadow-2xl">Admission Requirements</button>
          </div>
        </div>
        <div className="px-4 py-5">
          <h2 className="text-base">Application Form. </h2>
          <div className="">
            {/*  */}
            <AdmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
