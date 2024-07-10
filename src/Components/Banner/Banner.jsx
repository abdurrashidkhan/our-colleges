import "./style.css";
export default function Banner() {
  return (
    <main>
      <div className="container mx-auto py-5">
        <div className="">
          <div className="relative" id="banner_image">
            <div className="banner_content">
              <div className="px-5 ">
                <h1 className="text-4xl text-[#fff] font-semibold tracking-[5px]">
                  Welcome Our College.
                </h1>
                <p className="py-6 text-[#fff] tracking-[1px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam quasi saepe asperiores nobis similique accusantium at
                  consequatur dolor maiores, iure, quod nulla recusandae rem
                  atque repellat illum. Maiores eos error dolor esse modi sequi
                  iste aliquid quaerat? Ipsam recusandae explicabo sunt
                  asperiores fugiat, voluptas vel ab voluptates! Est, quisquam
                  saepe?
                </p>
                <button className="bg-[#A32D47] text-[#fff]  text-xl py-1.5 px-4 rounded hover:px-5 ease-in-out duration-500">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
