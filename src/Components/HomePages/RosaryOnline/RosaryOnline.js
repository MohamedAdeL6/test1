import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const RosaryOnline = () => {
  const [phrases, setPhrases] = useState([
    "سبحان الله",
    "الحمدلله",
    "الله أكبر",
    "لا إله إلا الله",
    "رب اغفر لي",
    "أستغفر الله",
    "لا حول ولا قوة إلا بالله",
    "اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي",
    "اللهم صل وسلم وبارك على سيدنا محمد",
    "سبحان الله وبحمده سبحان الله العظيم",
    "اللهم اغفر لي ذنبي كله دقه وجله، علانيته وسره، وأوله وآخره.",
    "الله أكبر كبيرا والحمدلله كثيرا وسبحان الله وبحمده بكرةً وأصيلا.",
    "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    "أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه",
    "لا اله الا انت سبحانك إني كنت من الظالمين",
    "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته",
    "لا إله إلا الله وحده لا شريك لهُ ، لهُ الملك ، ولهُ الحمدُ ، وهو على كل شيء قدير",
  ]);

  const [addTextZakr, setAddTextZakr] = useState(false);
  const [textZakr, setTextZakr] = useState(""); // Set initial state to an empty string
  const [counters, setCounters] = useState(Array(phrases.length).fill(0));

  const textareaRef = useRef(null);
  const zakrRef = useRef(null);
  const dark_mode = useSelector((state) => state.darkMode.value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (zakrRef.current && !zakrRef.current.contains(event.target)) {
        setAddTextZakr(false);
      }
    };

    if (addTextZakr) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addTextZakr]);

  const addNewZakr = () => {
    if (textZakr.trim() !== "") {
      setPhrases([...phrases, textZakr]); // Add new phrase
      setCounters([...counters, 0]); // Add new counter entry
      setTextZakr(""); // Clear the textarea
      setAddTextZakr(false); // Close the modal
    }
  };

  const incrementCounter = (index) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const resetCounter = (index) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index] = 0;
      return newCounters;
    });
  };

  const resetAllCounters = () => {
    setCounters(Array(phrases.length).fill(0));
  };

  return (
    <div
      className={`w-full flex justify-center items-center ${
        dark_mode ? `bg-dark_main_bg_color` : `bg-light_main_bg_color`
      }`}
    >
      <div className="w-full container  flex justify-center items-center">
        <div className="w-full flex flex-wrap justify-center items-center">
          <div className="w-full flex flex-wrap justify-center items-center mb-3">
            <div className={`w-full flex justify-center items-center py-3`}>
              <h1
                className={`text-4xl font-bold mb-5 py-4 px-5 rounded-lg  border-2 ${
                  dark_mode
                    ? `text-light_main_txt_color`
                    : `text-dark_main_txt_color`
                }`}
              >
                المسبحة اونلاين
              </h1>
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
              <button
                className="w-full flex justify-center items-center px-4 py-2 rounded-md text-xl bg-[#3b82f6] text-white"
                onClick={() => setAddTextZakr(true)}
              >
                إضـافــــة ذكـــــر
              </button>

              <button
                className={`w-full text-light_main_txt_color px-4 py-2 rounded text-xl ${
                  dark_mode
                    ? `bg-dark_main_bg_color border border-border_color`
                    : `bg-red-500 text-dark_main_txt_color`
                }`}
                onClick={resetAllCounters}
              >
                تصفير جميع العدادات
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className={`flex flex-wrap justify-center items-center gap-3 border p-4 rounded shadow-lg ${
                  dark_mode ? `border-border_color` : `border-blue-200`
                }`}
              >
                <h2
                  className={`w-full text-center text-3xl font-semibold mb-2 ${
                    dark_mode
                      ? `text-light_main_txt_color`
                      : `text-dark_main_txt_color`
                  }`}
                >
                  {phrase}
                </h2>

                <div
                  className={`w-full text-center text-2xl font-bold mb-2 text-white rounded-lg py-3 ${
                    dark_mode
                      ? `bg-dark_main_bg_color border border-border_color`
                      : `bg-zinc-500`
                  }`}
                >
                  {counters[index]}
                </div>

                <div className="w-full flex justify-between items-center">
                  <button
                    className={`text-white px-3 rounded text-xl leading-loose ${
                      dark_mode
                        ? `bg-dark_main_bg_color border border-border_color`
                        : `bg-blue-500`
                    }`}
                    onClick={() => incrementCounter(index)}
                  >
                    +
                  </button>
                  <button
                    className={`text-white px-3 rounded text-xl leading-loose ${
                      dark_mode
                        ? `bg-dark_main_bg_color border border-border_color`
                        : `bg-red-500`
                    }`}
                    onClick={() => resetCounter(index)}
                  >
                    ⟲
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Azkar Modal */}
        {addTextZakr && (
          <div className="fixed left-0 top-0 flex justify-center items-center h-screen w-screen cursor-pointer pr-7 pl-3 sm:pr-0 sm:pl-0">
            <div className="absolute left-0 top-0 h-screen w-screen bg-[#585f6b] opacity-80"></div>

            <div
              ref={zakrRef}
              className="z-10 flex flex-col justify-center items-center w-full h-1/2 max-w-2xl p-5 bg-white rounded-lg"
            >
              <textarea
                ref={textareaRef}
                className="addZakr w-full h-40 p-4 text-lg border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="أضف أذكارك هنا..."
                value={textZakr}
                onChange={(e) => setTextZakr(e.target.value)}
              ></textarea>

              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg text-lg shadow-md"
                onClick={addNewZakr}
              >
                إضافة الذكر
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RosaryOnline;
