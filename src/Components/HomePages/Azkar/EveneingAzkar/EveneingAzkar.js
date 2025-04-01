import React, { useEffect, useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import {
  FaUndo,
  FaEdit,
  FaBold,
  FaFont,
  FaPrint,
  FaSearch,
  FaShareSquare,
  FaPlay,
  FaArrowUp,
  FaSpinner,
} from "react-icons/fa";

import { MdMotionPhotosPaused } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchAzkar } from "../../../Store_Rtk/Slices/AzkarData";
import {
  fetchSpecificAzkar,
  decrementAzkarCount,
  resetAzkarCount,
  storeOriginalCounts,
} from "../../../Store_Rtk/Slices/SpeceficiAzkarData";

function EveningAzkar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [titleAzkar, seTitleAzkar] = useState("أذكار الصباح والمساء");
  const azkarData = useSelector((state) => state.azkar.data);
  const specificAzkar = useSelector((state) => state.specificAzkar);
  const dark_mode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  // functin that call all fetching data to show in component
  useEffect(() => {
    dispatch(fetchAzkar());
    dispatch(fetchSpecificAzkar()).then(() => {
      dispatch(storeOriginalCounts()); // Store original repeat values
    });
  }, [dispatch]);
  // Function to decrease count
  const handleDecrement = (index) => {
    dispatch(decrementAzkarCount(index));
  };
  // Function to Reset count
  const handleReset = (index) => {
    dispatch(resetAzkarCount(index));
  };

  // ------------------------------------------------------------

  // Function disappere Menu When click in any place in window
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!document.querySelector(".parent")?.contains(e.target)) {
        setIsOpen(false);
      }
      if (!document.querySelector(".menuAzkar")?.contains(e.target)) {
        setIsOpenMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // ------------------------------------------------------------
  // Manage playing audio state
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const playAudio = (index) => {
    // Stop all other audios
    const allAudios = document.querySelectorAll(".audio");
    allAudios.forEach((audio, i) => {
      if (i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    // Play or pause the selected audio
    const currentAudio = document.getElementById(`audio${index}`);
    if (playingAudioId === index) {
      currentAudio.pause();
      setPlayingAudioId(null);
    } else {
      currentAudio.play();
      setPlayingAudioId(index);
    }
  };

  // ------------------------------------------------------------
  const [isVisible, setIsVisible] = useState(false);
  // Function To Chech Showing Of Btn
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // Function To Go Top Of Page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // -------------------------------------------------------------

  const [isLoading, setIsLoading] = useState(true); // Add loading state
  // ----------------------------
  useEffect(() => {
    setIsLoading(true); // Start loading
    dispatch(fetchAzkar());
    dispatch(fetchSpecificAzkar()).then(() => {
      dispatch(storeOriginalCounts()); // Store original repeat values
      setIsLoading(false); // Stop loading
    });
  }, [dispatch]);

  return (
    <div
      className={`flex justify-center items-center ${
        dark_mode ? `bg-dark_main_bg_color` : `bg-light_main_bg_color`
      } pt-2`}
    >
      <div className="container flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-start gap-5 sm:flex-nowrap">
          <div className="sidebar w-full md:w-1/3 lg:1/5  flex justify-center items-center border rounded-lg ">
            <div className="w-full flex flex-wrap justify-center items-center">
              <header className="w-full flex flex-wrap justify-start items-center gap-2 border-b p-3">
                <h1
                  className={`w-full text-4xl font-bold ${
                    dark_mode
                      ? `text-light_main_txt_color`
                      : `text-dark_main_txt_color`
                  }`}
                >
                  حصن المسلم
                </h1>
                <span
                  className={`w-full text-lg  ${
                    dark_mode ? `text-gray-400` : `text-gray-600`
                  }`}
                >
                  من أذكار الكتاب والسنة
                </span>
              </header>

              <div className="menuAzkar w-full relative flex flex-wrap justify-center items-center">
                <div className="w-full flex justify-between items-center p-3 border-b">
                  <span
                    className={`text-xl ${
                      dark_mode
                        ? `text-light_main_txt_color`
                        : `text-dark_main_txt_color`
                    }`}
                  >
                    الفهرس
                  </span>

                  <button
                    className={`hidden justify-center items-center cursor-pointer sm:flex`}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                  >
                    <FaSearch
                      className={`text-2xl ${
                        dark_mode
                          ? `text-light_main_txt_color`
                          : `text-dark_main_txt_color`
                      }`}
                    />
                  </button>

                  <button
                    className={`flex justify-center items-center cursor-pointer sm:hidden ${
                      dark_mode
                        ? `text-light_main_txt_color`
                        : `text-dark_main_txt_color`
                    }`}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                  >
                    <CgMenuGridO className="text-2xl  " />
                  </button>
                </div>

                <div
                  className={`w-full sm:flex sm:flex-wrap 
								${dark_mode ? `bg-dark_main_bg_color` : `bg-light_main_bg_color`}
									${isOpenMenu ? `flex flex-wrap absolute left-0 top-full z-10` : `hidden`}`}
                >
                  {azkarData.map((el, index) => (
                    <button
                      key={index}
                      to={`/SpeceficAzkar`}
                      className={`w-full flex justify-between items-center py-2 px-3 border-b hover:bg-gray-100
												${
                          dark_mode
                            ? `text-light_main_txt_color hover:text-dark_main_txt_color`
                            : `text-dark_main_txt_color`
                        }
												`}
                      onClick={() => {
                        dispatch(
                          fetchSpecificAzkar({ url: el.TEXT, title: el.TITLE })
                        );
                        seTitleAzkar(el.TITLE);
                        setIsOpenMenu(false);
                      }}
                    >
                      <h3 className={`text-right `}>{el.TITLE}</h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`content w-full md:w-2/3 lg:3/4 flex flex-wrap justify-center items-center gap-2 first-letter`}
          >
            <div
              className={`w-full text-white p-3 rounded-b-lg ${
                dark_mode
                  ? `bg-dark_main_bg_color border-b border-border_color`
                  : `bg-sky-600`
              }`}
            >
              <div className={`flex justify-between items-center`}>
                <div
                  className={`relative flex flex-wrap justify-center items-center `}
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="parent bg-red-500 p-2 rounded-lg text-white"
                  >
                    <BsSliders2 />
                  </button>
                  {isOpen && (
                    <ul
                      className={`absolute right-0 top-full mt-2 shadow-lg rounded-lg  w-48
											${
                        dark_mode
                          ? `bg-dark_main_bg_color border border-border_color text-white`
                          : `bg-light_main_bg_color text-gray-700`
                      }
										`}
                    >
                      <li
                        className={`p-2 border-b flex gap-3 cursor-pointer ${
                          dark_mode
                            ? `hover:bg-white hover:text-black`
                            : `hover:bg-gray-100`
                        }`}
                      >
                        <FaEdit />
                        <span>إظهار التشكيل</span>
                      </li>
                      <li
                        className={`p-2 border-b flex gap-3 cursor-pointer ${
                          dark_mode
                            ? `hover:bg-white hover:text-black`
                            : `hover:bg-gray-100`
                        }`}
                      >
                        <FaBold />
                        <span>خط عريض</span>
                      </li>
                      <li
                        className={`p-2 border-b flex gap-3 cursor-pointer ${
                          dark_mode
                            ? `hover:bg-white hover:text-black`
                            : `hover:bg-gray-100`
                        }`}
                      >
                        <FaFont />
                        <span>حجم الخط: 28px</span>
                      </li>
                      <li
                        className={`p-2 border-b flex gap-3 cursor-pointer ${
                          dark_mode
                            ? `hover:bg-white hover:text-black`
                            : `hover:bg-gray-100`
                        }`}
                      >
                        <FaPrint />
                        <span>نسخة للطباعة</span>
                      </li>
                    </ul>
                  )}
                </div>
                <div className={`text-xl font-bold text-center flex-grow `}>
                  <h1
                    className={`w-full flex justify-center items-center text-3xl `}
                  >
                    {titleAzkar}
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap gap-2">
              {isLoading ? (
                <div className="w-full flex justify-center items-center py-5">
                  <FaSpinner className="text-4xl text-blue-500 animate-spin" />
                </div>
              ) : (
                specificAzkar.data.map((azkar, index) => (
                  <div
                    key={index}
                    className={`w-full flex flex-wrap justify-between items-start gap-3 border-b rounded-lg lg:flex-nowrap  px-4 py-3
									${
                    dark_mode
                      ? `bg-dark_main_bg_color border-b border-border_color`
                      : `bg-gray-100`
                  }
								`}
                  >
                    <div
                      className={`w-full lg:w-3/4	 flex flex-wrap justify-start items-start gap-3`}
                    >
                      <p
                        className={`w-full flex text-xl font-bold  text-justify ${
                          dark_mode
                            ? `text-light_main_txt_color`
                            : `bg-gray-100 text-gray-700`
                        }`}
                      >
                        {azkar.ARABIC_TEXT}
                      </p>

                      <div
                        className={`w-full flex justify-center items-center`}
                      >
                        <button
                          className={`flex justify-center items-center`}
                          onClick={() => playAudio(azkar.ID)}
                        >
                          <audio
                            src={`${azkar.AUDIO}`}
                            id={`audio${azkar.ID}`}
                            className={`audio`}
                          />
                          {playingAudioId === azkar.ID ? (
                            <MdMotionPhotosPaused
                              className={`text-green-700 text-xl `}
                            />
                          ) : (
                            <FaPlay className={`text-red-700`} />
                          )}
                        </button>
                        {}
                        <span
                          className={`w-full flex justify-end items-end cursor-pointer text-sky-500`}
                        >
                          {" "}
                          <FaShareSquare />{" "}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-full lg:w-1/4	p-4  rounded-lg flex flex-wrap items-center gap-4
											${
                        dark_mode
                          ? `bg-dark_main_bg_color border border-border_color`
                          : `bg-green-200`
                      }
										`}
                    >
                      <div
                        className={`w-full flex justify-center items-center text-3xl font-bold px-3 py-1 border text-white rounded-xl
										${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-sky-500`}`}
                      >
                        {azkar.REPEAT}
                      </div>

                      <div className="w-full flex justify-center items-center gap-5">
                        <button
                          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                          onClick={() => handleDecrement(index)}
                        >
                          <CiCircleMinus size={14} />
                        </button>
                        <button
                          className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
                          onClick={() => handleReset(index)}
                        >
                          <FaUndo size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="btnUp">
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-[70px] p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
}

export default EveningAzkar;
