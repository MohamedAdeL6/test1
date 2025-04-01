import React, { useState, useEffect, useMemo } from "react";
import moment from "moment-hijri";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrayerTimes } from "../../Store_Rtk/Slices/PrayerTimesData";
import { ImSpinner6 } from "react-icons/im";
import playerTimeLogo from "../../Images/HomePage/Section2_PrayerTimes/Header_Logo/logo.png";

const PrayerTimes = () => {
  const dark_mode = useSelector((state) => state.darkMode.value);

  const dispatch = useDispatch();
  const {
    data: timings,
    loading,
    error,
  } = useSelector((state) => state.prayerTimes);

  // --------------------------------------------------------------------------
  // Hijri Date
  const hijriDate = useMemo(() => moment().format("iDD iMMM iYYYY هـ"), []);
  // --------------------------------------------------------------------------
  // Gregorian Date
  const gregorianDate = useMemo(() => {
    const today = new Date();
    return `${today.getDate()} ${today.toLocaleString("ar", {
      month: "short",
    })} ${today.getFullYear()} م`;
  }, []);
  // --------------------------------------------------------------------------

  // Real-Time Clock
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    dispatch(fetchPrayerTimes()); // Fetch prayer times on mount

    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [dispatch]);

  // ---------------------------------------------------------------------------
  function getNextPrayerTime() {
    if (!timings || !timings.timings) return { name: "Fajr", time: new Date() };

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    for (const [name, time] of Object.entries(timings.timings)) {
      const [hour, minute] = time.split(":").map(Number);
      const prayerMinutes = hour * 60 + minute;

      if (prayerMinutes > currentMinutes) {
        return { name, time: new Date(now.setHours(hour, minute, 0, 0)) };
      }
    }

    // If all prayers have passed, return Fajr of the next day
    const [hour, minute] = timings.timings.Fajr.split(":").map(Number);
    return {
      name: "Fajr",
      time: new Date(
        now.setDate(now.getDate() + 1),
        now.setHours(hour, minute, 0, 0)
      ),
    };
  }

  const [remainingHour, setRemainingHour] = useState("");
  const [remainingMinute, setRemainingMinute] = useState("");
  const [remainingSecond, setRemainingSecond] = useState("");
  const [remaining, setRemaining] = useState("");
  const [nextPrayer, setNextPrayer] = useState(getNextPrayerTime());

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      const diff = nextPrayer.time - now;

      if (diff <= 0) {
        setNextPrayer(getNextPrayerTime());
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setRemainingHour(`${hours}  ساعة `);
      setRemainingMinute(`${minutes} دقيقة `);
      setRemainingSecond(`${seconds} ثانية`);
      setRemaining(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateRemainingTime();
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [nextPrayer]);

  // ---------------------------------------------------------------------------
  // Function change Name Of Prayer From English To Arabic
  const getPrayerName = (prayer) => {
    switch (prayer) {
      case "Fajr":
        return "الفجر";
      case "Dhuhr":
        return "الظهر";
      case "Asr":
        return "العصر";
      case "Maghrib":
        return "المغرب";
      case "Isha":
        return "العشاء";
      case "Midnight":
        return "منتصف الليل";
      case "Firstthird":
        return "الثلث الأول";
      case "Lastthird":
        return "الثلث الأخير";
      case "Sunrise":
        return "الشروق";
      case "Sunset":
        return "الغروب";
      case "Imsak":
        return "الامساك";
      default:
        return prayer; // Keep the original English name if no match
    }
  };

  return (
    <div
      className={`w-full flex justify-center items-center py-3 ${
        dark_mode ? `bg-dark_main_bg_color` : `bg-dark_second_bg_color`
      }`}
    >
      <div className="container flex flex-wrap justify-center items-center gap-6">
        <div className={`flex flex-wrap justify-center items-center gap-9 `}>
          {/* header */}
          <div className={`w-full flex justify-center items-center md:mb-5  `}>
            <div
              className={`flex justify-center items-center gap-4 border-b-2 py-4 ${
                dark_mode ? `border-border_color` : `border-main_hover_color`
              }`}
            >
              <div className="flex justify-center items-center">
                <img src={playerTimeLogo} alt="..." />
              </div>

              <div className="flex justify-center items-center">
                <h2
                  className={`w-full text-xl sm:text-3xl font-bold ${
                    dark_mode ? `text-white` : `text-main_hover_color`
                  }`}
                >
                  {" "}
                  مواقيت الصلاة فى المنيا{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* Location,Time  &&  Prayer Countdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 h-full ">
            {/* Location & Time */}
            <div
              className={`md:col-span-1 xl:col-span-2 flex flex-wrap justify-center items-center gap-6 px-6 pb-6 rounded-lg ${
                dark_mode
                  ? `bg-dark_main_bg_color border border-border_color`
                  : `bg-dark_second_bg_color`
              } `}
            >
              <h3
                className={`w-full text-3xl font-bold text-start ${
                  dark_mode ? `text-white` : `text-black`
                }`}
              >
                {" "}
                مصر, المنيا{" "}
              </h3>
              <p
                className={`w-full ${
                  dark_mode ? `text-white` : `text-teal-600`
                } text-lg md:text-2xl font-bold`}
              >
                الساعة:{" "}
                <span className="w-full text-orange-600 font-bold">{time}</span>
              </p>
              <p
                className={`w-full ${
                  dark_mode ? `text-white` : `text-teal-600`
                } md:text-xl font-bold`}
              >
                التاريخ هجري: {hijriDate}
              </p>
              <p
                className={`w-full ${
                  dark_mode ? `text-white` : `text-teal-600`
                } md:text-xl font-bold`}
              >
                التاريخ الميلادي: {gregorianDate}
              </p>
            </div>

            {/* Prayer Countdown */}
            <div
              className={`md:col-span-1 xl:col-span-1 flex flex-wrap justify-center items-center gap-6 p-6 text-white rounded-lg shadow-lg ${
                dark_mode
                  ? `bg-dark_main_bg_color border border-border_color`
                  : `bg-main_hover_color `
              }`}
            >
              <p className="w-full text-2xl text-center">
                الصلاه القادمة هي صلاة "{getPrayerName(nextPrayer.name)}"
              </p>
              <div className="w-full flex flex-wrap justify-center items-center gap-3 font-bold text-center">
                <span className={`w-full text-start text-xl p-2`}>
                  {" "}
                  متبقي على صلاة {getPrayerName(nextPrayer.name)}{" "}
                </span>
                <div
                  className={`w-full flex justify-center items-center gap-3 text-xl p-3 ${
                    dark_mode
                      ? `bg-dark_main_bg_color border border-border_color`
                      : `bg-dark_second_bg_color`
                  } text-black text-center rounded-xl`}
                >
                  <span
                    className={`text-white p-2 px-3 ${
                      dark_mode
                        ? `bg-dark_main_bg_color border border-border_color hover:bg-[#666]`
                        : `bg-main_hover_color hover:bg-[#24696d]`
                    } rounded-lg duration-500 cursor-pointer`}
                  >
                    {" "}
                    {remainingSecond}{" "}
                  </span>
                  <span
                    className={`text-white p-2 px-3 ${
                      dark_mode
                        ? `bg-dark_main_bg_color border border-border_color hover:bg-[#666]`
                        : `bg-main_hover_color hover:bg-[#24696d]`
                    } rounded-lg duration-500 cursor-pointer`}
                  >
                    {" "}
                    {remainingMinute}{" "}
                  </span>
                  <span
                    className={`text-white p-2 px-3 ${
                      dark_mode
                        ? `bg-dark_main_bg_color border border-border_color hover:bg-[#666]`
                        : `bg-main_hover_color hover:bg-[#24696d]`
                    } rounded-lg duration-500 cursor-pointer`}
                  >
                    {" "}
                    {remainingHour}{" "}
                  </span>
                  {/* {remaining}  */}
                </div>
              </div>
            </div>
          </div>
          {/* Prayer Times Table */}
          <div className="w-full flex justify-center">
            {loading ? (
              <div className="w-full flex flex-col items-center justify-center p-6 shadow-xl text-2xl font-bold text-gray-600 border rounded-xl bg-white">
                <span>جاري تحميل أوقات الصلاة...</span>
                <ImSpinner6 className="animate-spin text-4xl mt-2 text-orange-600" />
              </div>
            ) : timings && timings.timings ? (
              <div className={`w-full overflow-x-auto shadow-lg rounded-lg`}>
                <table className="w-full border border-gray-300 text-center">
                  <thead
                    className={`hidden lg:table-header-group ${
                      dark_mode ? `bg-dark_main_bg_color` : `bg-gray-200 `
                    }`}
                  >
                    <tr>
                      {Object.keys(timings.timings).map((prayer, index) => (
                        <th
                          key={index}
                          className={`text-center border  py-3 px-2 text-lg font-bold ${
                            dark_mode
                              ? `border-border_color text-white`
                              : `border-gray-300 text-black`
                          }`}
                        >
                          {
                            <>
                              <span className={`block`}>
                                {prayer === "Fajr" ||
                                prayer === "Maghrib" ||
                                prayer === "Isha" ||
                                prayer === "Midnight" ||
                                prayer === " Firstthird" ||
                                prayer === "Lastthird"
                                  ? "🌙"
                                  : "☀️"}
                              </span>
                              <span className={`block`}>
                                {getPrayerName(prayer)}
                              </span>
                            </>
                          }
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hidden lg:table-row">
                      {Object.keys(timings.timings).map((prayer, index) => (
                        <td
                          key={index}
                          className={`border ${
                            dark_mode
                              ? `border-border_color text-white`
                              : `border-gray-300 text-black`
                          } p-3 text-lg`}
                        >
                          {timings.timings[prayer]}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                {/* Mobile & Tablet View (Cards in Two Columns for Tablet) */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  {Object.keys(timings.timings).map((prayer, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap justify-between items-center p-3 bg-gray-100 rounded-lg shadow"
                    >
                      <span className="w-full flex justify-center items-center gap-2 text-lg font-semibold border-b-2">
                        {
                          <>
                            <span className="py-3">
                              {prayer === "Fajr" ||
                              prayer === "Maghrib" ||
                              prayer === "Isha" ||
                              prayer === "Midnight" ||
                              prayer === "Firstthird" ||
                              prayer === "Lastthird"
                                ? "🌙"
                                : "☀️"}
                            </span>
                            <span className="py-3">
                              {" "}
                              {getPrayerName(prayer)}{" "}
                            </span>
                          </>
                        }
                      </span>
                      <span className="w-full flex justify-center items-center text-lg font-bold text-main_hover_color py-3 mr-3">
                        {timings.timings[prayer]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mobile View (Cards) */}
                <div className="lg:hidden flex flex-col gap-4 p-4">
                  {Object.keys(timings.timings).map((prayer, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap justify-between items-center p-3 bg-gray-100 rounded-lg shadow"
                    >
                      <span className="w-full flex justify-center items-center gap-2 text-lg font-semibold border-b-2 ">
                        {
                          <>
                            <span className={`py-3`}>
                              {prayer === "Fajr" ||
                              prayer === "Maghrib" ||
                              prayer === "Isha" ||
                              prayer === "Midnight" ||
                              prayer === " Firstthird" ||
                              prayer === "Lastthird"
                                ? "🌙"
                                : "☀️"}
                            </span>
                            <span className={`py-3`}>
                              {" "}
                              {getPrayerName(prayer)}{" "}
                            </span>
                          </>
                        }
                      </span>
                      <span className="w-full flex justify-center items-center text-lg font-bold text-main_hover_color py-3 mr-3">
                        {timings.timings[prayer]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-lg font-bold text-red-600">
                تعذر تحميل البيانات
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
