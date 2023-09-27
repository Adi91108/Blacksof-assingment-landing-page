import Form from "../components/Form";
import Navbar from "../components/Navbar";
import logo1 from "../image/logo1.png";
import logo from "../image/logo.png";
import zoom from "../image/zoom.png";

const LOGOS = [
  <img src={zoom} key={1} alt="" className="w-50 h-20" />,
  <img src={logo1} key={2} alt="" className="w-20" />,
  <img src={logo} key={3} alt="" className="w-20" />,
  <img src={logo1} key={4} alt="" className="w-20" />,
  <img src={zoom} key={5} alt="" className="w-20" />,
  <img src={logo} key={6} alt="" className="w-20" />,
  <img src={logo1} key={7} alt="" className="w-20" />,
  <img src={zoom} key={8} alt="" className="w-20" />,
  <img src={logo} key={9} alt="" className="w-20" />,
  <img src={zoom} key={10} alt="" className="w-20" />,
  <img src={logo1} key={11} alt="" className="w-20" />,
  <img src={logo} key={12} alt="" className="w-20" />,
];

const HomePage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center h-1/5 pt-10 cursor-pointer ">
        <Navbar />
      </div>

      <div className="flex flex-col pt-10 items-center xl:flex xl:flex-row xl:h-[70%]">
        <div className="flex flex-col flex-1 text-white justify-center text-4xl pl-20 pr-10 leading-snug">
          <p>
            Searching for <span className="font-extrabold">Augmented </span>
           <span  className="flex flex-row ">
           <span className="inline-block font-extrabold xl:block xl:font-extrabold">Development</span>
            <span className="inline-block pl-2 ">Teams To </span>
           </span> 
           <span className="flex flex-col ">
            <span className=""> Steer your product</span>
            <span className=""> towards triumph?"</span>
           </span>
          </p>

          <div className="flex justify-between pt-6">
            <div className="flex flex-col">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-[#cccccc] text-xs">Client</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">80+</p>
              <p className="text-[#cccccc] text-xs">Projects successfully</p>
              <p className="text-[#cccccc] text-xs">completed</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">60%</p>
              <p className="text-[#cccccc] text-xs">client converted into</p>
              <p className="text-[#cccccc] text-xs">longterm engagement partner</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 h-2/4">
          <Form />
        </div>
      </div>
<div className="pt-10">
<div className="absolute m-auto left-[40%] ">
          <p className="text-gray-500 text-center">Leading the charge for industries!</p>
        </div>
</div>

      <div className="pt-8">
        <div className="relative m-auto w-full overflow-hidden bg-grey before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="flex w-[calc(250px*10)]">
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[125px] bg-[#eee9e9] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div
                className="slide flex w-[125px] bg-[#eee9e9] items-center justify-center"
                key={index}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
