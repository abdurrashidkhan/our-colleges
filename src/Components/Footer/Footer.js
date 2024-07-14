import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo/logo.png";
export default function Footer() {
  return (
    <footer className=" bg-[#d6d6d6] dark:bg-[#0f1b2bce] shadow-2xl">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-8 ">
          <div className="">
            <div className="">
              <Image className="w-[80px]"  src={logo} alt="loading" />
              <h1 className="py-2 text-lg font-medium">Dhaka College</h1>
              <p className="text-base">Dhaka College, established in 1841, is one of the oldest educational institutions in Bangladesh. Renowned for its academic excellence, it offers diverse programs and fosters a vibrant campus life.</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl pb-4 font-medium">Helpful Link</h1>
            <ul>
              <li className="hover:text-[#A32D47] py-.5"><Link href="#">Admission</Link></li>
              <li className="hover:text-[#A32D47] py-.5"><Link href="#">Our College</Link></li>
              <li className="hover:text-[#A32D47] py-.5"><Link href="#">Contact</Link></li>
              <li className="hover:text-[#A32D47] py-.5"><Link href="#">Profile</Link></li>
              <li className="hover:text-[#A32D47] py-.5"><Link href="#">Learn About</Link></li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl font-medium">Get in touch.</h2>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, saepe.</p>
            <div className="">
              <input type="text" className="p-2 rounded w-full" placeholder="Enter your email"/>
              <button className="my-2 bg-[#A32D47] w-full rounded shadow-2xl py-1 text-[#fff]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
