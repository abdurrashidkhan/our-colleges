import AdmissionForm from "@/Components/Admission/Admission";
import "./style.css";
export default function Admission() {
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
