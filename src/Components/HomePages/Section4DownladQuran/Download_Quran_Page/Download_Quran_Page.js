import React  from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import image2 from "../../../Images/HomePage/Section3_Quran_Pdf_Downlad_Images/Quran_Pdf/PDF.png";

import "./Download_Quran_Page.css";

import Sperated from "./Nav_Items_Repeat/Nav_Items_Repeat";

const DownloadQuranPage = () => {

  const dark_mode = useSelector((state) => state.darkMode.value);

  const data = useSelector((data) => data.QuranPdf.value);

  const { ElementID } = useParams();

  const element = data[+ElementID - 1];


  return (

    <div
      className={`DownloadQuran relative flex gap-10 lg:gap-0 flex-wrap py-8 lg:flex-nowrap  ${
        dark_mode ? ` bg-dark_main_bg_color` : `bg-light_main_bg_color`
      }`}
      dir="rtl"
    >

      <div
        className={`DownloadQuran relative flex gap-10  lg:gap-2 flex-wrap py-8 lg:flex-nowrap`}
      >


        <div className="w-full lg:w-[64%] flex justify-center items-center">

          <div className="DownloadQuran_top w-full  lg:gap-10 flex gap-[50px] flex-wrap  px-3 ">
          
            <div className="DownloadQuran_image w-full flex flex-col justify-center items-center rounded-xl ">
              <img
                src={element.imageDownload}
                alt="..."
                className="w-[450px] sm:w-[600px] md:w-[690px] md:h-auto  rounded-xl"
              />
            </div>

            <div className="DownloadQuran_image_details w-full flex justify-center gap-6 flex-wrap  rounded-2xl">

              <div
                className={`DownloadQuran_image_details_child w-[450px] sm:w-[600px] md:w-[690px] ]  flex flex-wrap gap-6   rounded-2xl p-2 py-3
                ${
                  dark_mode
                    ? `bg-[#323232]  border-dark_main_bg_color`
                    : `bg-[#f6f6f6] border`
                }
                `}
              >

                <h1
                  className={`w-full flex justify-center text-center text-lg font-bold ${
                    dark_mode
                      ? ` text-light_main_bg_color`
                      : ` text-main_hover_color`
                  }`}
                >
                  تحميل مصحف المدينة المنورة باللون الأزرق pdf
                </h1>

                <p
                  className={`w-full flex justify-center text-center text-[17px] ${
                    dark_mode
                      ? ` text-light_main_bg_color`
                      : ` text-dark_main_txt_color`
                  }`}
                >
                  الرواية : حفص عن عاصم - طبعة عام : 1429 للهجرة .
                </p>

                <p
                  className={`w-full flex justify-center text-center text-[17px] ${
                    dark_mode
                      ? ` text-light_main_bg_color`
                      : ` text-dark_main_txt_color`
                  }`}
                >
                  حجم الملف : {element.size} ميغا بايت - نسخة مكتوبة بالرسم العثماني.{" "}
                </p>

                <div className="w-full flex justify-center cursor-pointer">
                  <img src={image2} alt="..." className="w-[80px] " />
                </div>


              </div>

            </div>
          
          
          </div>

        </div>


        <div className="DownloadQuran_content w-full lg:w-[35%]  flex flex-wrap justify-center gap-[50px] lg:gap-0 lg:justify-between lg:flex-col  pt-2">

          <div
            className={`DownloadQuran_content_box flex flex-wrap gap-10 w-[450px] sm:w-[600px] md:w-[690px]  lg:w-full px-4 py-3 rounded-2xl
          
        `}
          >
            <h1
              className={`w-full flex justify-start text-xl lg:text-xl font-bold ${
                dark_mode
                  ? ` text-light_main_bg_color`
                  : ` text-main_hover_color`
              }`}
            >
              {" "}
              {` مصحف المدينة المنورة  ${element.color|| "ملون"}`}{" "}
            </h1>

            <ul className="w-full flex flex-wrap justify-center  gap-1 ">
              <li
                className={`w-full flex justify-start lg:text-lg  ${
                  dark_mode
                    ? ` text-light_main_txt_color`
                    : ` text-dark_main_txt_color`
                }`}
              >
                {" "}
                1- مصحف المدينة مكتوب بالرسم العثماني{" "}
              </li>
              <li
                className={`w-full flex justify-start lg:text-lg ${
                  dark_mode
                    ? ` text-light_main_txt_color`
                    : ` text-dark_main_txt_color`
                }   `}
              >
                {" "}
                2- كتب هذا المصحف الخطاط عثمان طه{" "}
              </li>
              <li
                className={`w-full flex justify-start lg:text-lg ${
                  dark_mode
                    ? ` text-light_main_txt_color`
                    : ` text-dark_main_txt_color`
                }   `}
              >
                {" "}
                3- تم طباعته في مجمع الملك فهد{" "}
              </li>
              <li
                className={`w-full flex justify-start lg:text-lg  ${
                  dark_mode
                    ? ` text-light_main_txt_color`
                    : ` text-dark_main_txt_color`
                }   `}
              >
                {" "}
                4- أشرف على طباعته الشيخ علي الحذيفي{" "}
              </li>
            </ul>

            <div className="DownloadQuran_content-last w-full flex  justify-start ">
              <div className="DownloadQuran_content_last_content w-full flex flex-wrap">
                <div className="w-full lg:w-[310px] flex justify-between lg:text-lg ">
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    صيغة الملف{" "}
                  </p>
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    {element.format}
                  </p>
                </div>
                <div className="w-full lg:w-[310px] flex justify-between lg:text-lg">
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    حجم الملف
                  </p>
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    {element.size}{" "}
                  </p>
                </div>
                <div className="w-full lg:w-[310px] flex justify-between lg:text-lg">
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    عام الطباعة{" "}
                  </p>
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    1429 للهجرة{" "}
                  </p>
                </div>
                <div className="w-full lg:w-[310px] flex justify-between lg:text-lg">
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    لون الخلفية{" "}
                  </p>
                  <p
                    className={`${
                      dark_mode
                        ? ` text-light_main_txt_color`
                        : ` text-dark_main_txt_color`
                    }  `}
                  >
                    {" "}
                    {element.color|| "ملون"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>


          <Sperated element = {element.linkDownload}/>

          
        </div>

       
      </div>

    </div>

  );
};

export default DownloadQuranPage;
