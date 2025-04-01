import React, { useEffect, useState } from "react";
import "./HeaderBottom.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { LiaReadme } from "react-icons/lia";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";

function HeaderBottom() {
  const dark_mode = useSelector((state) => state.darkMode.value);

  const [menuSetting, setMenuSetting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector(".HeaderBottomOpen");
      const menuIcon = document.querySelector(".menuIcon");

      if (
        menu &&
        !menu.contains(e.target) &&
        menuIcon &&
        !menuIcon.contains(e.target)
      ) {
        setMenuSetting(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className={`HeaderBottom w-full flex justify-center items-center relative ${
        dark_mode
          ? `bg-dark_main_bg_color border-b border-[#595959]`
          : `bg-white`
      }`}
    >
      <div className={`container flex justify-between items-center`}>
        <div className={`w-full flex justify-ccenter items-center`}>
          <nav className="w-full flex justify-center items-center">
            <div className="w-full relative flex items-center justify-between py-4">
              <div className={`logo flex justify-center items-center`}>
                <Link to={``}>
                  <img
                    loading="lazy"
                    src="https://surahquran.com/img/logo2.svg"
                    alt="القرآن الكريم"
                    title="موقع القران الكريم"
                    className={`w-[160px] ${
                      dark_mode
                        ? `bg-tranparent`
                        : `bg-main_hover_color p-2 rounded-xl`
                    }`}
                  />
                </Link>
              </div>

              <div className="hidden sm:flex sm:grow">
                <nav className="w-full flex grow justify-end items-center ">
                  <ul className="flex grow justify-end items-center gap-2">
                    <li className={`flex justify-center items-center`}>
                      <Link
                        to={`/BrowseQuran`}
                        className={`flex justify-content-center align-items-center gap-2 border border-[#22a5ad] p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `text-light_main_txt_color hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `text-dark_main_txt_color hover:bg-main_hover_color hover:text-light_main_txt_color`
                        }`}
                      >
                        <span className="flex justify-content-center align-items-end pt-1">
                          {" "}
                          <LiaReadme className={`h-auto text-lg `}/>{" "}
                        </span>
                        <span> القراء الكريم </span>
                        
                      </Link>
                    </li>

                    <li className={`flex justify-center items-center`}>
                      <Link
                        to={`/SoundsQuran`}
                        className={`flex justify-content-center align-items-center gap-2 border border-[#22a5ad] p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `text-light_main_txt_color hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `text-dark_main_txt_color hover:bg-main_hover_color hover:text-light_main_txt_color`
                        }`}
                      >
                        <span className="flex justify-content-center align-items-end ">
                           <CiMicrophoneOn className={`h-auto text-lg`}/> 
                            </span>
                      <span> القراء </span>  
                      </Link>
                    </li>

                    <li className={`flex justify-center items-center`}>
                      <Link
                        to={`/TafserQuran`}
                        className={`flex justify-content-center align-items-center gap-2 border border-[#22a5ad] p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `text-light_main_txt_color hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `text-dark_main_txt_color hover:bg-main_hover_color hover:text-light_main_txt_color`
                        }`}
                      >
                        <span className="flex justify-content-center align-items-end">
                           <IoReaderOutline className={`h-auto text-base `}/> 
                            </span>
                       <span> التفسيـــر </span> 
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </nav>

          <div className="menuIcon relative group flex items-center sm:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                dark_mode
                  ? `text-light_main_txt_color hover:bg-dark_second_bg_header_color`
                  : ` text-dark_main_txt_color hover:text-light_main_txt_color hover:bg-main_hover_color`
              }  focus:outline-none  focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuSetting(!menuSetting)}
            >
              <span
                className={`hidden z-20 group-hover:flex p-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[100%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent  after:border-dark_border_color
                ${
                  dark_mode
                    ? `bg-dark_second_bg_color text-light_main_tooltip_color after:border-[#fff]`
                    : `bg-light_main_tooltip_color text-light_main_txt_color`
                }`}
              >
                {" "}
                Open menu{" "}
              </span>

              <TfiMenuAlt className={`rotate-180 text-xl`} />
            </button>
          </div>

          <div
            className={`HeaderBottomOpen ${
              menuSetting
                ? `w-full flex justify-center items-center absolute bottom-[-147px] sm:hidden`
                : `hidden`
            }
          sm:hidden w-full flex justify-center items-center absolute left-0 z-10 rounded-bl-lg 
          ${
            dark_mode
              ? `bg-[#1f2125] bottom-[-232px]`
              : `bg-[#fff] bottom-[-256px] py-3 border-t`
          }`}
          >
            <nav className="w-full flex justify-center items-center accordion">
              <div
                className={`w-full relative flex items-center justify-between ${
                  dark_mode ? `border-0 p-0` : `border-0 px-3`
                }`}
              >
                <nav
                  className={`w-full flex grow justify-end items-center border ${
                    dark_mode
                      ? `rounded-bl-lg rounded-br-lg border-[#fff]`
                      : `rounded-lg border-[#22a5ad]`
                  } `}
                >
                  <ul
                    className={`flex flex-wrap grow justify-end items-center gap-2 p-3`}
                  >
                    <li
                      className={`w-full flex justify-center items-center border-b-2 border-[#fff] duration:500 hover:bg-[#22a5ad] hover:border-[#fff] hover:rounded-lg`}
                    >
                      <Link
                        to={`/`}
                        className={`w-full text-center p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `hover:bg-main_hover_color hover:text-light_main_txt_color border border-main_hover_color text-main_hover_color`
                        }`}
                        aria-current="page"
                      >
                        الرئيسية
                      </Link>
                    </li>

                    <li
                      className={`w-full flex justify-center items-center border-b-2 border-[#fff] duration:500 hover:bg-[#22a5ad] hover:border-[#fff] hover:rounded-lg`}
                    >
                      <Link
                        to={`/BrowseQuran`}
                        className={`w-full text-[#fff] text-center p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `hover:bg-main_hover_color hover:text-light_main_txt_color border border-main_hover_color text-main_hover_color`
                        }`}
                      >
                        القراء الكريم
                      </Link>
                    </li>

                    <li
                      className={`w-full flex justify-center items-center border-b-2 border-[#fff] duration:500 hover:bg-[#22a5ad] hover:border-[#fff] hover:rounded-lg`}
                    >
                      <Link
                        to={`/SoundsQuran`}
                        className={`w-full text-[#fff] text-center p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `  hover:bg-main_hover_color hover:text-light_main_txt_color border border-main_hover_color text-main_hover_color`
                        }`}
                      >
                        القراء
                      </Link>
                    </li>

                    <li
                      className={`w-full flex justify-center items-center duration-700 hover:bg-[#22a5ad] hover:border-[#fff] hover:rounded-lg`}
                    >
                      <Link
                        to={`/TafserQuran`}
                        className={`w-full text-[#fff] text-center p-3 text-sm font-medium rounded-md duration-500 ${
                          dark_mode
                            ? `hover:bg-second_hover_color hover:text-light_main_txt_color`
                            : `hover:bg-main_hover_color hover:text-light_main_txt_color border border-main_hover_color text-main_hover_color`
                        }`}
                      >
                        التفسيـــر
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBottom;
