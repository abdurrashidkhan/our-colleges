import ContactForm from "@/Components/ContactForm/ContactForm";
import "./style.css";
export default function Contact() {
  return (
    <section className="">
      <div className="container mx-auto py-10">
        <div className="">
          {/* contact banner  */}
          <div className="">
          <div id="contact_banner" className="relative">
          <div className="contact_content text-center">
            <h1 className="text-4xl font-semibold text-[#fff]">Contact anay needed.</h1>
            <p className="text-[#faf3f3dd] py-10 tracking-[1px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dolor voluptatum tempore dignissimos provident dolorum doloribus iste ipsam incidunt labore iure fuga unde nobis mollitia dolores earum distinctio adipisci eligendi nostrum, asperiores est vero? Necessitatibus, excepturi. Laboriosam assumenda quaerat eius? Voluptates, culpa doloremque nostrum laudantium a porro deleniti consequuntur architecto?</p>
            <button  className="bg-[#ff3b55a8] px-5 py-1.5  text-lg text-[#fff] rounded shadow-2xl">Get started</button>
          </div>
        </div>
          </div>
          <div className="py-8 pb-10 text-center ">
            <h1 className="text-2xl ">Let&apos;s Start a Conversation</h1>
            <p className="py-1">Here are some of our common questions. Contact us to know more and your question will be answered within 24hours</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5  shadow-2xl px-4">
            <div className="">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-lg font-medium">
                    What are the eligibility criteria for admission?
                  </div>
                  <div className="collapse-content">
                    <p>
                      The eligibility criteria vary depending on the faculty and
                      program. Generally, candidates must have a certain GPA in
                      both SSC and HSC exams or equivalent qualifications.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    How can I apply for admission?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Applications are typically submitted online through the
                      official Dhaka University admission portal. Detailed
                      instructions are provided on the university’s website
                      during the admission period.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    What documents are required for the application?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Commonly required documents include SSC and HSC
                      certificates and transcripts, a recent passport-sized
                      photograph, and the application fee payment receipt.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    What is the admission test format?
                  </div>
                  <div className="collapse-content">
                    <p>
                      The format varies by faculty, but it generally includes
                      multiple-choice questions (MCQs) covering subjects
                      relevant to the chosen program. Some faculties may also
                      have written exams and practical tests.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg font-medium">
                    When are the admission tests held?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Admission tests are usually held in October-November for
                      the academic year starting in the following year. The
                      specific dates are announced on the university’s website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/*  */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
