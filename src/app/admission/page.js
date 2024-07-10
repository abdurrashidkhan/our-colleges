import "./style.css";
export default function Admission() {
  return (
    <section>
      <div className="container mx-auto py-5">
        <div id="admission_banner" className="relative">
          <div className="admission_content text-center">
            <h1 className="text-4xl font-semibold text-[#fff]">Join Your Collage.</h1>
            <p className="text-[#faf3f3dd] py-10 tracking-[1px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dolor voluptatum tempore dignissimos provident dolorum doloribus iste ipsam incidunt labore iure fuga unde nobis mollitia dolores earum distinctio adipisci eligendi nostrum, asperiores est vero? Necessitatibus, excepturi. Laboriosam assumenda quaerat eius? Voluptates, culpa doloremque nostrum laudantium a porro deleniti consequuntur architecto?</p>
            <button  className="bg-[#ec49539d] px-2 py-2  text-lg text-[#fff] rounded shadow-2xl">Admission Requirements</button>
          </div>
        </div>
      </div>
    </section>
  );
}
