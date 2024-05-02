import React from "react";
import { FaHourglassHalf, FaPaperPlane } from "react-icons/fa";

export const JobCard = ({
  description,
  jobRole,
  location,
  minExp,
  minJdSalary,
  maxJdSalary,
}) => {
  const minSalary = minJdSalary || 0;
  const FAKE_COMPANY_NAMES_SALARY_LOGO = {
    Flipkart: {
      logo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
      salary: "12-16 LPA",
    },
    Amazon: {
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      salary: "15-20 LPA",
    },
    Google: {
      logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      salary: "20-25 LPA",
    },
    Microsoft: {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhqZsr5q4Dz-ecvcVg_9WzU0VsmEw6l6pYYaq9RdWKw&s",
      salary: "18-22 LPA",
    },
    Apple: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png",
      salary: "28-36 LPA",
    },
  };

  const formatSalary = `${minJdSalary || "-"} - ${maxJdSalary || "-"} LPA`;

  return (
    <section>
      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col border-2 overflow-hidden rounded-lg shadow-lg">
            <div className="flex flex-col justify-between items-start flex-1 p-6 bg-white">
              <div className="text-[0.7rem] text-gray-800 px-2 py-[0.5px] font-light flex justify-center items-center border rounded-full w-fit">
                <FaHourglassHalf /> Posted 2 days ago
              </div>
              <div className="flex-1 cursor-pointer items-center flex pt-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={
                    FAKE_COMPANY_NAMES_SALARY_LOGO[
                      Object.keys(FAKE_COMPANY_NAMES_SALARY_LOGO)[
                        Math.floor(Math.random() * 5)
                      ]
                    ].logo
                  }
                  alt=""
                />
                <div className="flex flex-col items-start px-2 justify-center">
                  <div className="text-gray-500 font-semibold">
                    {
                      Object.keys(FAKE_COMPANY_NAMES_SALARY_LOGO)[
                        Math.floor(Math.random() * 5)
                      ]
                    }
                  </div>
                  <div className="text-sm">{jobRole}</div>
                  <div className="text-[0.55rem] font-semibold">{location}</div>
                </div>
              </div>
              <div className="flex flex-col  mt-2 ">
                <p className="text-[0.75rem] font-semibold flex items-center gap-1 text-neutral-600">
                  Estimated Salary: {formatSalary} 💸
                </p>
                <div className="flex flex-col items-start mb-2">
                  <p className="text-[0.65rem] font-medium text-neutral-400">
                    {" "}
                    Minimum Experience:
                  </p>
                  <p className="text-[0.7rem] font-semibold text-gray-800">
                    {" "}
                    {minExp} years
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-[0.8rem] font-semibold text-neutral-600 pt-3">
                    About Company:
                  </span>
                  <div className="text-[0.7rem] font-bold">About Us</div>
                  <p className="text-sm text-left">
                    {description.slice(0, 300) + "..."}
                  </p>
                </div>
                <button className="flex justify-center text-sm text-[#4747e7] z-10 ">
                  View Job
                </button>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[2rem] w-[14rem] max-w-full bg-[#54efc4] text-black font-medium rounded-xl outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[#7ddfc4]  active:scale-105"
                  >
                    Easy Apply{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
