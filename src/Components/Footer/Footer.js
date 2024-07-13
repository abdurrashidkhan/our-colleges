import logo from "../../assets/images/logo/logo.png";
export default function Footer() {
  return (
    <Footer>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 ">
          <div className="">
            <div className="">
              <img src={logo} alt="loading" />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
