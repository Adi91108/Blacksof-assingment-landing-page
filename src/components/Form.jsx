import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

function Form() {
  return (
    <>
      <div className="bg-gradient-to-b via-white from-white to-gray-900 rounded-lg p-6 w-5/6 pt-10 ">
            <form action="" className="rounded-md">
              <p className="">Fill out the form.</p>
              <p>Our team will touch base with you within 24 hours</p>
              <div className="grid grid-cols-2 grid-rows-2">
                <input
                  className="border-b-[1px] border-gray-500 ml-0 m-4 bg-transparent placeholder:text-gray-800"
                  type="text"
                  placeholder="Full Name*"
                  required
                />
                <input
                  className="border-b-[1px] border-gray-500 ml-0 mt-9 m-4 bg-transparent placeholder:text-gray-800"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <input
                  className="border-b-[1px] border-gray-500 ml-0 m-4 bg-transparent placeholder:text-gray-800"
                  type="text"
                  placeholder="Country"
                />
                <input
                  className="border-b-[1px] border-gray-500 ml-0 m-4 bg-transparent placeholder:text-gray-800"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <input
                className="border-b-[1px] border-gray-500 w-[100%] ml-0 mt-9 m-4 bg-transparent placeholder:text-gray-800"
                type="text"
                placeholder="Tells us your requirements*"
                required
              />

              <div className="mt-3 flex gap-1 items-center">
                <button className="rounded-[40px] bg-[#181818]  hover:bg-gray-400 p-3 w-24 text-white">
                  Submit
                </button>
                <button className="rounded-[50%] bg-[#181818]  hover:bg-gray-400 w-fit p-3 text-white">
                   <ArrowRightAltRoundedIcon/>
                </button>
              </div>
            </form>
          </div>
          
    </>
  );
}

export default Form;
