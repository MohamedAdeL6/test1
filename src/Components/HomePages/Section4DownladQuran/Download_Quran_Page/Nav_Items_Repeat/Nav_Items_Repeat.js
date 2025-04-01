import React, { useEffect } from "react";

import "../Download_Quran_Page.css";


import { useSelector } from "react-redux";


const Sperated = (props) => {

  let linkDownload = props.element

  const dark_mode = useSelector((state) => state.darkMode.value);

  useEffect(() => {
    document.querySelector(".cLoader").style.strokeDashoffset = 0;
    var intervalID = setInterval(() => {
      if (document.querySelector(".cCount").innerHTML === "0") {
        document.querySelector(".cLink").classList.add("hidden");
        document.querySelector(".cLink1").classList.remove("hidden");
        clearInterval(intervalID);
      } else {
        document.querySelector(".cCount").innerHTML -= 0.5;
      }
    }, 1000);
  }, []);

  return (

    <div className="w-full downloadFile flex justify-center xl:w-[70%]">

      <div
        id="pageredirect "
        className="flex flex-wrap justify-centeritems-center"
      >

        <div class="cLoaderWrap relative rotate-[140deg]">

          <svg
            id="cLoaderSVG"
            width="260"
            height="260"
            xmlns="http://www.w3.org/2000/svg"
          >

            <circle
              class="cPath"
              r="110"
              cy="130"
              cx="130"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: 500,
                strokeWidth: "20px",
                stroke: "#f7f7f7",
                fill: "none",
              }}
            ></circle>

            <circle
              class="cLoader"
              r="110"
              cy="130"
              cx="130"
              style={{
                strokeDashoffset: 500,
                strokeDasharray: 500,
                transition: "all 15s linear",
                fill: "none",
                strokeWidth: "20px",
                stroke: "#035dcd",
              }}
            ></circle>

            <circle
              class="hLoader"
              r="110"
              cy="130"
              cx="130"
              stroke={`${dark_mode ?  `#000` : `#fff` }`}
              style={{
                strokeDashoffset: 500,
                strokeDasharray: 500,
                transition: "all 1s linear",
                fill: "none",
                strokeWidth: "22px",
              }}
            ></circle>
          </svg>

          <b class={`cCount absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[-140deg] text-5xl
          ${dark_mode ? ` text-light_main_txt_color` : ` text-dark_main_txt_color`}
          `}>
            {" "}
            15{" "}
          </b>
        </div>

        <div class=" w-full cButton relative">

          <a
            href={linkDownload}
            rel="nofollow noreferrer"
            className="cLink duration-500 text-[#b5b5b5] hover:text-[#b5b5b5] flex  justify-center items-center absolute bottom-[20px] left-[50%] translate-x-[-50%] select-none z-8 border-[5px] border-[#00000008] bg-[#f8f8f8] px-[15px] h-[40px] text-[14px] w-[160px] rounded-full text-[ #d2d2d2] cursor-progress"
          >
            جاري تهيئة الرابط
          </a>

          <a
            target="_self"
            rel="nofollow noreferrer"
            href={linkDownload}
            className="cLink1 hidden duration-500 text-[#000] hover:text-[#fff] hover:bg-[#035dcd]  border-[6px] border-double  text-center leading-7 absolute bottom-[20px] left-[50%] translate-x-[-50%] select-none  border-[#035dcd] bg-[#f8f8f8] px-[15px] h-[40px] text-[14px] w-[160px] rounded-full text-[ #d2d2d2] cursor-pointer"
            onClick={(e) => {
              e.target.innerHTML = "جاري التحميل";
            }}
          >
            الرابط جاهز
          </a>

          <a
            class="cLink2 err noredi"
            href="javascript"
            rel="nofollow noreferrer"
            className="hidden"
          >
            رابط معطل
          </a>
        </div>

      </div>

    </div>

  );

};

export default Sperated;
