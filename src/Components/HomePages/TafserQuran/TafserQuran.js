import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaArrowUp } from "react-icons/fa";

const TafsirQuran = () => {


  // useEffect(() => {
  //   const fersDataaa = async () => {
  //     const response = await fetch(
  //       `  https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafseer-al-saddi/2/2.json`
  //     );
  
  //     if (!response.ok) {
  //       throw new Error(`http error! Status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  //     console.log(data.text);
      
  //     // data.map((el) => {
  //     //   console.log(el);
  //     // })
     
      
  //   }
  //   fersDataaa()
  // }, [])

 

  const darkMode = useSelector((state) => state.darkMode.value);
  const surahsList = useSelector((state) => state.tafserSoura.data);

  const [selectedTafsirName, setSelectedTafsirName] = useState("");
  const [sourahName, setSourahName] = useState("");
  const [tafsirName, setTafsirName] = useState("");
  const [selectedSurah, setSelectedSurah] = useState("");
  const [fromAya, setFromAya] = useState("");
  const [toAya, setToAya] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [tafsir, setTafsir] = useState("التفسير");
  const [ayats, setAyats] = useState([" الآيـــأت القرآنيـــة "]);

  const [data, setData] = useState([]);

  // Check If Aya Valid
  const isAyaValid = (sura, fromAya, toAya) => {
    const selected = surahsList.find((item) => item.number === parseInt(sura));
    return (
      selected && fromAya >= 1 && toAya <= selected.ayat && fromAya <= toAya
    );
  };

  // ----------------------------------------------------------------

  // Get Tafsir ID
  const tafsirObject = Array.isArray(tafsirName)
    ? tafsirName.find((tafsir) => tafsir.name === selectedTafsirName)
    : null;

  // ----------------------------------------------------------------

  // Function THat show Tafsir In Teaxtarea
  const showData = async () => {
    if (!selectedSurah || !fromAya || !toAya) {
      alert("❌ Please select a Sura and Aya numbers!");
      return;
    }

    if (!isAyaValid(selectedSurah, parseInt(fromAya), parseInt(toAya))) {
      alert("❌ This Aya is not found in the selected Sura!");
      return;
    }

    try {
      const response = await fetch(
        `http://api.quran-tafseer.com/tafseer/${tafsirObject.id}/${selectedSurah}/${fromAya}/${toAya}`
      );

      if (!response.ok) {
        throw new Error(`http error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      alert("❌ Failed to fetch Tafseer. Please try again.");
      console.error(error);
    }
  };

  // ----------------------------------------------------------------

  // Get Data Of as (Name, Id )
  const sourahNameData = async () => {
    try {
      const response = await fetch(
        `http://api.quran-tafseer.com/quran/${selectedSurah}/1`
      );

      if (!response.ok) {
        throw new Error(`http error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSourahName(data);
    } catch (error) {
      alert("❌ Failed to fetch Tafseer. Please try again.");
      console.error(error);
    }
  };

  // ----------------------------------------------------------------

  // Get All Tafsirs Name To Show It In SelectBox






  // Get All Tafsirs Name To Show It In SelectBox
  const tafsirNameData = async () => {
    try {
      
      const response = await fetch("https://cors-anywhere.herokuapp.com/http://api.quran-tafseer.com/tafseer/");

      if (!response.ok) {
        throw new Error(`http error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      
      setTafsirName(data);
    } catch (error) {
      alert("❌ Failed to fetch Tafseer. Please try again.");
      console.error(error);
    }
  };

  // ----------------------------------------------------------------

  // Call Function At Least Once When Page Load
  useEffect(() => {
    tafsirNameData();
  }, []);

  // Store the Ayat in an array
  const [ayat, setAyat] = useState([]);
  // Select All Ayat I Need It
  const fetchAyatRange = async () => {
    try {
      const ayatArray = []; // Array to store Ayat

      for (let i = parseInt(fromAya); i <= parseInt(toAya); i++) {
        const response = await fetch(
          `http://api.quran-tafseer.com/quran/${selectedSurah}/${i}`
        );

        if (!response.ok) {
          throw new Error(`http error! Status: ${response.status}`);
        }

        const data = await response.json();
        ayatArray.push(data); // Push each Ayah to the array
      }

      setAyat(ayatArray); // Update state with the fetched Ayat
    } catch (error) {
      alert("❌ Failed to fetch Ayat. Please try again.");
      console.error(error);
    }
  };

  // Scroll Visibility Handler
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to Top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [currentPage, setCurrentPage] = useState(1);
  const ayatsPerPage = 5;

  // Calculate start and end indexes for slicing
  const startIndex = (currentPage - 1) * ayatsPerPage;
  const endIndex = startIndex + ayatsPerPage;

  // Get only the 5 Ayats for the current page
  const currentAyats = data.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / ayatsPerPage);

  return (
    <div
      className={`w-full flex justify-center items-center pb-2 ${
        darkMode ? `bg-dark_main_bg_color` : `bg-white`
      }`}
    >
      <div className="w-full flex flex-col justify-center items-center min-h-[calc(100vh-65px)] bg-white rounded-lg sm:shadow-md ">
        {/* Header */}
        <div
          className={`w-full flex justify-center items-center ${
            darkMode ? `bg-dark_main_bg_color` : `bg-[#dff0d8]`
          }`}
        >
          <div className={`container`}>
            <div className={`w-full flex justify-center items-center`}>
              <h1
                className={`text-3xl font-bold text-center my-4 py-4 px-6 rounded-lg ${
                  darkMode
                    ? `text-white border border-border_color`
                    : `text-gray-800 border-2 border-white`
                }`}
              >
                تفسير القرآن الكريم
              </h1>
            </div>
          </div>
        </div>

        {/* Selection Section */}
        <div
          className={`w-full flex justify-center items-center ${
            darkMode
              ? `bg-dark_main_bg_color border border-border_color`
              : `bg-[#d9edf7]`
          }`}
        >
          <div className={`container w-full`}>
            <div
              className={`w-full flex flex-wrap justify-start items-center lg:gap-4 lg:flex-nowrap lg:justify-center py-6`}
            >
              <div className="w-3/5 grow grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Tafsir Selection */}
                <div className={`w-full flex justify-center items-center`}>
                  <div className="w-full flex flex-wrap justify-start items-center ">
                    <label
                      className={`block text-lg font-semibold text-gray-700 mb-2 pr-2 ${
                        darkMode ? `text-white` : `text-gray-700`
                      }`}
                    >
                      اخترالتفسير:
                    </label>
                    <select
                      className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                        darkMode ? "text-dark_main_txt_color" : "text-zinc-600"
                      }`}
                      value={selectedTafsirName}
                      onChange={(e) => {
                        setSelectedTafsirName(e.target.value);
                      }}
                    >
                      <option value="">اختر التفسيـــر</option>

                      {Array.isArray(tafsirName) && tafsirName.length > 0 ? (
                        tafsirName.map((tafsir, index) => (
                          <option key={index} value={tafsir.name}>
                            {tafsir.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>لا توجد بيانات متاحة</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* Surah Selection */}
                <div className="w-full flex flex-wrap justify-start items-center ">
                  <label
                    className={`block text-lg font-semibold mb-2 pr-2 ${
                      darkMode ? `text-white` : `text-gray-700`
                    }`}
                  >
                    اختر السورة:
                  </label>
                  <select
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      darkMode ? "text-dark_main_txt_color" : "text-zinc-600"
                    }`}
                    value={selectedSurah}
                    onChange={(e) => setSelectedSurah(e.target.value)}
                  >
                    <option value="">اختر السورة</option>
                    {surahsList.map((surah, index) => (
                      <option key={index} value={surah.number}>
                        {surah.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Aya Selection */}
              <div className="w-full grow grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* From Aya Selection */}
                <div>
                  <label
                    className={`block text-lg font-semibold  mb-2 pr-1 ${
                      darkMode ? `text-white` : `text-gray-700`
                    }`}
                  >
                    من الآية:
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      darkMode
                        ? `placeholder:text-dark_main_txt_color`
                        : `placeholder:text-gray-700`
                    }`}
                    placeholder="رقم الآية"
                    value={fromAya}
                    onChange={(e) => setFromAya(e.target.value)}
                  />
                </div>
                {/* To Aya Selection */}
                <div>
                  <label
                    className={`block text-lg font-semibold text-gray-700 mb-2 pr-1 ${
                      darkMode ? `text-white` : `text-gray-700`
                    }`}
                  >
                    إلى الآية:
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      darkMode
                        ? `placeholder:text-dark_main_txt_color`
                        : `placeholder:text-gray-700`
                    }`}
                    placeholder="رقم الآية"
                    value={toAya}
                    onChange={(e) => setToAya(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    className={`block text-lg font-semibold text-gray-700 mb-2 pr-1 ${
                      darkMode ? `text-white` : `text-gray-700`
                    }`}
                  >
                    التنفيذ:
                  </label>
                  <button
                    className={`w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                      darkMode
                        ? "text-dark_main_txt_color"
                        : "text-light_second_bg_color"
                    }`}
                    onClick={() => {
                      showData();
                      sourahNameData();
                      fetchAyatRange();
                    }}
                  >
                    نفذ
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Suorh && Tafsir Selection */}
        </div>

        {/* Tafsir Name && Soura Name */}
        <div
          className={`w-full flex justify-center items-center border-b py-4 ${
            darkMode
              ? `bg-dark_main_bg_color border-border_color`
              : `bg-[#dff0d8] border-white`
          }`}
        >
          <div className={`container w-full`}>
            <div
              className={` w-full flex flex-wrap gap-6 justify-between items-center sm:flex-nowrap`}
            >
              <div
                className={`w-full lg:w-1/3 flex justify-center items-center`}
              >
                <h1 className={`w-full p-3 bg-white text-center rounded-lg`}>
                  سورة {sourahName.sura_name}
                </h1>
              </div>

              <div
                className={`w-full lg:w-1/3 flex justify-center items-center`}
              >
                <h1 className={`w-full p-3 bg-white text-center rounded-lg`}>
                  {selectedTafsirName ? `${selectedTafsirName}` : `تفسيــر`}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Ayats Display */}
        <div
          className={`w-full flex flex-wrap justify-center items-center min-h-[100px] ${
            darkMode
              ? ` border-border_color bg-dark_main_bg_color`
              : ` border-white bg-[#d9edf7]`
          }`}
        >
          <div className={`container w-full`}>
            <div className={`w-full text-justify py-3`}>
              <p
                className={`w-full flex justify-center items-center mb-3 ${
                  darkMode
                    ? "text-[#aaa] border-border_color"
                    : "text-dark_main_txt_color border-dark_main_txt_color"
                }`}
              >
                {" "}
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ{" "}
              </p>

              <p
                className={`w-full text-center ${
                  darkMode
                    ? "text-[#aaa] border-border_color"
                    : "text-dark_main_txt_color border-dark_main_txt_color"
                }`}
              >
                {data.length ? (
                  data
                    .sort((a, b) => a.ayah_number - b.ayah_number)
                    .map((num, index) => (
                      <Fragment key={index}>
                        {
                          ayat.find(
                            (aya) => aya.ayah_number === num.ayah_number
                          )?.text
                        }
                        <span className={`relative text-2xl mx-1`}>
                          &#1757;
                          <span
                            className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-bold`}
                          >
                            {num.ayah_number}
                          </span>
                        </span>
                      </Fragment>
                    ))
                ) : (
                  <span
                    className={`text-center text-2xl ${
                      darkMode ? `text-dark_main_txt_color` : `text-zinc-500`
                    }`}
                  >
                    {ayats}
                  </span>
                )}
              </p>

              <p
                className={`w-full flex justify-center items-center mt-5 ${
                  darkMode
                    ? "text-[#aaa] border-border_color"
                    : "text-dark_main_txt_color border-dark_main_txt_color"
                }`}
              >
                {" "}
                صَدَقَ اللهُ العَظيمُ{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Tafsir Display */}
        <div
          className={`w-full flex justify-center items-center flex-1 ${
            darkMode
              ? "bg-dark_main_bg_color border-border_color"
              : "bg-[#dff0d8] border-gray-300"
          }`}
        >
          <div className="relative w-full flex flex-col justify-center items-center grow text-lg">
            <div className="w-full flex justify-center items-center my-4">
              <div className="container">
                <h1 className="w-full p-3 bg-white text-center rounded-lg">
                  تفسير الآيات
                </h1>
              </div>
            </div>

            {currentAyats.length ? (
              currentAyats.map((num) => (
                <div
                  key={num.ayah_number}
                  className={`w-full border-b ${
                    darkMode
                      ? "text-[#aaa] border-border_color"
                      : "text-dark_main_txt_color border-dark_main_txt_color"
                  }`}
                >
                  <div
                    className={`w-full flex flex-wrap justify-center items-center gap-3 border-b ${
                      darkMode
                        ? "border-border_color bg-dark_main_bg_color"
                        : "border-white bg-[#dff0d8]"
                    }`}
                  >
                    <div className="container w-full">
                      <div className="w-full text-start py-4">
                        <div className="w-full flex justify-center items-center">
                          <div
                            className={`w-fit flex justify-center items-center p-2 rounded-md border mb-2 ${
                              darkMode ? "border-border_color" : "border-white"
                            }`}
                          >
                            <span className="flex justify-center items-center">
                              الآية : رقم
                            </span>

                            <span className="relative text-2xl mr-2">
                              &#1757;
                              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-bold">
                                {num.ayah_number}
                              </span>
                            </span>
                          </div>
                        </div>

                        <span className="block w-full text-center">
                          {
                            ayat.find(
                              (aya) => aya.ayah_number === num.ayah_number
                            )?.text
                          }
                          <span className="relative text-2xl mr-2">
                            &#1757;
                            <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-bold">
                              {num.ayah_number}
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-wrap justify-center items-center py-4">
                    <div className="container w-full">
                      <p
                        className={`w-fit block p-2 rounded-md border mb-3 ${
                          darkMode ? "border-border_color" : "border-white"
                        }`}
                      >
                        {tafsir}
                      </p>
                      <p className="text-start">{num.text}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p
                className={`text-center text-2xl ${
                  darkMode ? "text-dark_main_txt_color" : "text-zinc-500"
                }`}
              >
                {tafsir}
              </p>
            )}

            {/* Pagination Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{
                  padding: "10px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                }}
                className="disabled:opacity-50"
              >
                السابق
              </button>

              <span className="text-lg">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                style={{
                  padding: "10px",
                  backgroundColor: "#ddd",
                  borderRadius: "50%",
                }}
                className=" disabled:opacity-50 "
              >
                التالي
              </button>
            </div>
          </div>
        </div>
        
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`${`bottom-[25px]`} fixed right-[60px] p-3 bg-second_hover_color text-white rounded-full shadow-lg hover:bg-`}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default TafsirQuran;
