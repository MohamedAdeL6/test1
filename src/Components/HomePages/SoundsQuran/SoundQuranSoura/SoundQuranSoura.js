import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  IoMdArrowDropright,
  IoMdShare,
  IoIosLink,
  IoMdCloudDownload,
  IoIosPause,
  IoMdClose,
} from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { VscUnmute, VscMute } from "react-icons/vsc";
import { MdOutlineFavoriteBorder, MdOutlinePlaylistAdd } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";

import { FaArrowUp, FaPause, FaPlay } from "react-icons/fa";
import classNames from "classnames";

function SoundQuranSoura() {
  const darkMode = useSelector((state) => state.darkMode.value);
  const soundQuran = useSelector((state) => state.soundQuran.value);
  const reciters = useSelector((state) => state.quranReciters.data);
  const dispatch = useDispatch();

  const [isAudioSouraOpen, setIsAudioSouraOpen] = useState(false);
  const [menuDownload, setMenuDownload] = useState(false);
  const [menuDownloadID, setMenuDownloadId] = useState(0);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [audioLink, setAudioLink] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [indexSoura, setIndexSoura] = useState(0);
  const audioRefs = useRef([]);

  // Get reciterName  and  reciterStyle
  const { name_style } = useParams();
  const reciterName = name_style.split("-")[0];
  const reciterStyle = name_style.split("-")[1].toLowerCase();

  // Get reciterImage
  const reciterImage = reciters.find(
    (reciter) => reciter.name === reciterName
  )?.image;

  // Play Audio Handler
  const playAudio = useCallback(
    (index, audioUrl) => {
      const currentAudio = audioRefs.current[index];

      if (currentAudio.src !== audioUrl) {
        currentAudio.src = audioUrl; // Set only if the URL is different
      }

      // Pause all other audios
      audioRefs.current.forEach((audio, i) => {
        if (i !== index && audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });

      // Toggle play/pause for the current audio
      if (playingAudioId === index) {
        currentAudio.pause();
        setPlayingAudioId(null);
        setIsPlaying(false);
      } else {
        setPlayingAudioId(index);
        setAudioLink(audioUrl);
        setIsAudioSouraOpen(true);
        if (currentAudio.src !== audioUrl) {
          currentAudio.src = audioUrl;
        }
        currentAudio
          .play()
          .catch((err) => console.error("Error playing audio:", err));
        setIsPlaying(true);
      }
    },
    [playingAudioId]
  );

  // Scroll Visibility Handler
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to Top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Audio Player Effects
  useEffect(() => {
    if (!audioRefs.current[indexSoura]) return;

    const audio = audioRefs.current[indexSoura];

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);
    const handleAudioEnd = () => setIsPlaying(false);

    if (audioLink) {
      audio.src = audioLink;
      audio.play().catch((err) => console.error("Audio playback error:", err));
    }

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [audioLink]);

  // Function Play or Pause audio
  function togglePlayPause() {
    // ------------------------------
    const audio = audioRefs.current[indexSoura];

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
    // ------------------------------------
    if (playingAudioId === indexSoura) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(indexSoura);
      setIsAudioSouraOpen(true);
    }
    // ------------------------------
    allAudios.forEach((audio, i) => {
      if (i === indexSoura) {
        setPlayingAudioId(null);
      } else {
        setPlayingAudioId(indexSoura);
        setIsAudioSouraOpen(true);
      }
    });
  }

  // ------ Function Forward 10 Second
  const handleForwardSeconds = () => {
    const audio = audioRefs.current[indexSoura];
    if (audio) audio.currentTime = Math.min(audio.currentTime + 10, duration);
  };
  // ------ Function Previous 10 Second
  const handlePreviousSeconds = () => {
    const audio = audioRefs.current[indexSoura];
    if (audio) audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };
  // ------ Function mute Sound
  const toggleMute = () => {
    if (audioRefs.current[indexSoura]) {
      audioRefs.current[indexSoura].muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  // ------ Function handle Slider Change
  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRefs.current[indexSoura])
      audioRefs.current[indexSoura].currentTime = newTime;
  };

  // Close Audio Player
  const closeAudioSoura = () => {
    setIsAudioSouraOpen(false);
    // Pause all audio
    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    setPlayingAudioId(null);
    setIsPlaying(false);
  };

  return (
    <div
      className={classNames("w-full flex justify-center items-center", {
        "bg-dark_main_bg_color": darkMode,
        "bg-[#ebedee]": !darkMode,
      })}
    >
      <div className="container w-full flex flex-col items-center">
        <div className="w-full py-3">
          <div className={`flex justify-center items-center mb-3`}>
            <div
              className={`w-fit text-center p-3 rounded-md flex justify-center items-center gap-5 border ${
                darkMode
                  ? `text-white border-border_color`
                  : `text-main_hover_color border-main_hover_color`
              } `}
            >
              <h1 className={`text-3xl `}>{reciterName}</h1>

              <div className="relative w-fit h-[80px] rounded-lg">
                <img
                  src={reciterImage}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {soundQuran.map((soura, index) =>
              soura.RecitersQuran[reciterName] ? (
                <li
                  key={index}
                  className={`border ${
                    darkMode ? `border-border_color` : `border-main_hover_color`
                  }  rounded-lg py-3 px-2 flex justify-between items-center`}
                >
                  <div className="w-full flex gap-0 max_sm:gap-3 sm:gap-5 items-center">
                    <button
                      className={`relative p-1 text-[#fff] rounded-md flex justify-center items-center ${
                        darkMode
                          ? `hover:bg-dark_main_bg_color text-[#fff] border border-border_color`
                          : `bg-main_hover_color`
                      }`}
                      onClick={() => {
                        playAudio(
                          index,
                          soura.RecitersQuran[reciterName][reciterStyle]
                        );
                        setIndexSoura(index);
                      }}
                    >
                      {playingAudioId === index && isPlaying ? (
                        <IoIosPause className="text-xl" />
                      ) : (
                        <IoMdArrowDropright className="text-2xl" />
                      )}
                      <audio
                        ref={(el) => (audioRefs.current[index] = el)}
                        className="audio"
                        preload="auto"
                      />
                    </button>

                    <div
                      className={`w-full relative grow flex justify-around items-center gap-4`}
                    >
                      <div
                        className={`mr-2 max_sm:mr-0 flex justify-center items-center w-[2rem] h-[2rem] rotate-45 ${
                          darkMode ? `bg-[#6e6f6f]` : `bg-[#dcdbdb]`
                        }  duration-200 rounded-sm group-hover:bg-main_hover_color`}
                      >
                        <span
                          className={`flex justify-center items-center rotate-[-45deg] group-hover:text-light_main_txt_color ${
                            darkMode
                              ? `text-light_main_txt_color`
                              : `text-dark_main_txt_color`
                          }`}
                        >
                          {soura.id}
                        </span>
                      </div>

                      <div className="grow flex justify-between items-center gap-2 max_sm:gap-0">
                        <div
                          className={`w-fit flex flex-col items-center justify-center font-bold text-base max_sm:text-lg ${
                            darkMode
                              ? `text-light_main_txt_color`
                              : `text-dark_main_bg_color`
                          }`}
                        >
                          <div
                            className={`w-max max_sm:w-fit flex justify-center items-start sm:justify-start`}
                          >
                            {soura.name}
                          </div>

                          <div
                            className={`w-fit hidden sm:flex justify-center items-center sm:justify-start gap-1 text-xs text-zinc-500 pr-1`}
                          >
                            <span> سورة </span>
                            <span> "{soura.id}" </span>
                          </div>
                        </div>

                        <div
                          className={`${
                            darkMode ? `text-white` : `text-black`
                          } flex flex-col justify-center items-center group-hover:text-main_hover_color text-base font-bold`}
                        >
                          <div
                            className={`w-max max_sm:w-fit flex items-center justify-center`}
                          >
                            <span>
                              {soura.numberAyats > 10
                                ? `${soura.numberAyats} آية`
                                : `${soura.numberAyats}  آيات`}
                            </span>
                          </div>

                          <div
                            className={`w-full hidden sm:flex items-center justify-center gap-1 text-sm text-zinc-500`}
                          >
                            <span> مكية </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-[102%] absolute left-0 top-1/2 translate-y-[-50%] transition-all duration-700 ease-in-out scale-100 bg-white text-black rounded-lg z-10  ${
                          menuDownload && menuDownloadID === index
                            ? `opacity-100`
                            : `opacity-0 `
                        }`}
                      >
                        <div
                          className={`w-full grid grid-cols-6 gap-1 py-2 px-2 rounded-md`}
                        >
                          <div
                            className={`group relative flex justify-between items-center`}
                          >
                            <span
                              className={`flex justify-center items-center p-1 rounded-md duration-400 hover:bg-main_hover_color hover:text-white text-xl cursor-pointer`}
                            >
                              <IoMdShare />
                            </span>

                            <span
                              className={`hidden z-10 group-hover:flex p-1 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent ${
                                darkMode
                                  ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                                  : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                              }`}
                            >
                              مشاركة
                            </span>
                          </div>

                          <div
                            className={`group relative flex justify-between items-center`}
                          >
                            <span
                              className={`flex justify-center items-center p-1 rounded-md duration-400 hover:bg-main_hover_color hover:text-white text-xl cursor-pointer`}
                            >
                              <IoIosLink />
                            </span>

                            <span
                              className={`hidden z-10 group-hover:flex p-1 px-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent ${
                                darkMode
                                  ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                                  : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                              }`}
                            >
                              نسخ الرابط
                            </span>
                          </div>

                          <div
                            className={`group relative flex justify-between items-center`}
                          >
                            <span
                              className={`flex justify-center items-center p-1 rounded-md duration-400 hover:bg-main_hover_color hover:text-white text-xl cursor-pointer`}
                            >
                              <IoMdCloudDownload />
                            </span>

                            <span
                              className={`hidden z-10 group-hover:flex p-1  px-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent ${
                                darkMode
                                  ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                                  : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                              }`}
                            >
                              تحميل
                            </span>
                          </div>

                          <div
                            className={`group relative flex justify-between items-center`}
                          >
                            <span
                              className={`flex justify-center items-center p-1 rounded-md duration-400 hover:bg-main_hover_color hover:text-white text-xl cursor-pointer`}
                            >
                              <MdOutlinePlaylistAdd />
                            </span>

                            <span
                              className={`hidden z-10 group-hover:flex p-1 px-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent ${
                                darkMode
                                  ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                                  : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                              }`}
                            >
                              أضف إلي مكتبتي الصوتية
                            </span>
                          </div>

                          <div
                            className={`group relative flex justify-between items-center`}
                          >
                            <span
                              className={`flex justify-center items-center p-1 rounded-md duration-400 hover:bg-main_hover_color hover:text-white text-xl cursor-pointer`}
                            >
                              <MdOutlineFavoriteBorder />
                            </span>

                            <span
                              className={`hidden z-10 group-hover:flex p-1 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[50%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[50%] after:translate-x-[-50%]  after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent ${
                                darkMode
                                  ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                                  : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                              }`}
                            >
                              أضف الي المفضلة
                            </span>
                          </div>

                          <div
                            className={`group relative flex justify-between items-center`}
                          >
                            <span
                              className={`flex justify-center items-center p-1 rounded-md duration-400 hover:bg-main_hover_color hover:text-white text-xl cursor-pointer`}
                            >
                              <BsExclamationTriangleFill />
                            </span>
                            <span
                              className={`hidden z-10 group-hover:flex p-1 px-2 justify-center items-center text-sm rounded-lg absolute top-[127%] left-[200%] translate-x-[-50%] w-max after:content-[''] after:absolute after:bottom-full after:left-[18%] after:translate-x-[-50%] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent ${
                                darkMode
                                  ? `bg-dark_main_tooltip_color text-dark_main_txt_color`
                                  : `bg-light_main_tooltip_color text-light_main_txt_color after:border-dark_border_color`
                              }`}
                            >
                              الإبلاغ عن خطأأو خلل
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={` flex justify-center items-stretch h-full text-xl cursor-pointer`}
                    >
                      <button
                        className={`cursor-pointer flex justify-center items-center`}
                        onClick={() => {
                          setMenuDownload(!menuDownload);
                          setMenuDownloadId(index);
                        }}
                      >
                        <span>
                          {" "}
                          <PiDotsThreeOutlineVerticalFill
                            className={`${
                              darkMode ? `text-white` : `text-black`
                            }`}
                          />{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              ) : null
            )}
          </ul>
        </div>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className={`${
              isAudioSouraOpen ? `bottom-[120px]` : `bottom-[25px]`
            } fixed right-[60px] p-3 bg-second_hover_color text-white rounded-full shadow-lg hover:bg-`}
          >
            <FaArrowUp size={20} />
          </button>
        )}

        {isAudioSouraOpen && (
          <div className="fixed bottom-0 w-full bg-gray-200 p-4">
            {/* Display the current audio */}
            {audioRefs.current[indexSoura] && (
              <>
                <div className="flex justify-between text-sm">
                  <span>
                    {new Date(currentTime * 1000)
                      .toISOString()
                      .substring(14, 19)}
                  </span>
                  <span>
                    {new Date(duration * 1000).toISOString().substring(14, 19)}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime || 0}
                  onChange={handleSliderChange}
                  className="inputName w-full h-2 rounded-lg cursor-pointer"
                />

                <div className="flex justify-center gap-4 mt-2">
                  <button onClick={() => handlePreviousSeconds()}>
                    <TbPlayerTrackNextFilled />
                  </button>
                  <button onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={handleForwardSeconds}>
                    <TbPlayerTrackNextFilled className="rotate-180" />
                  </button>
                  <button onClick={toggleMute}>
                    {isMuted ? <VscMute /> : <VscUnmute />}
                  </button>
                  <button
                    onClick={closeAudioSoura}
                    className={`p-2 duration-300 hover:bg-slate-600 rounded-lg text-lg`}
                  >
                    <IoMdClose />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SoundQuranSoura;
