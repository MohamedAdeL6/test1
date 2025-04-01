
import { MdOutlineSubdirectoryArrowLeft, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import "./BrowseQuranPages.css";
import { useEffect, useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useSelector } from "react-redux";

function BrowseQuranPages() {

  const BASE_URL = "https://cdn.qurango.net/Sura2/files/mobile/";
  const dark_mode = useSelector((state) => state.darkMode.value);
  const soundQuran = useSelector((state) => state.soundQuran.value);

  const PartQuran = [
    { "1": "2" }, { "2": "23" }, { "3": "43" }, { "4": "63" }, { "5": "83" },
    { "6": "103" }, { "7": "122" }, { "8": "143" }, { "9": "163" }, { "10": "183" },
    { "11": "202" }, { "12": "223" }, { "13": "243" }, { "14": "263" }, { "15": "283" },
    { "16": "303" }, { "17": "323" }, { "18": "343" }, { "19": "363" }, { "20": "383" },
    { "21": "403" }, { "22": "423" }, { "23": "443" }, { "24": "463" }, { "25": "483" },
    { "26": "503" }, { "27": "523" }, { "28": "543" }, { "29": "563" }, { "30": "583" }
  ];

  const surahStartPages = {
    "الفاتحة": 2, "البقرة": 3, "آل عمران": 50, "النساء": 77, "المائدة": 106, "الأنعام": 128, "الأعراف": 151, "الأنفال": 177,
    "التوبة": 187, "يونس": 208, "هود": 221, "يوسف": 235, "الرعد": 249, "إبراهيم": 255, "الحجر": 262, "النحل": 267,
    "الإسراء": 282, "الكهف": 293, "مريم": 305, "طه": 312, "الأنبياء": 322, "الحج": 332, "المؤمنون": 342, "النور": 350,
    "الفرقان": 359, "الشعراء": 367, "النمل": 377, "القصص": 385, "العنكبوت": 396, "الروم": 404, "لقمان": 411, "السجدة": 415,
    "الأحزاب": 418, "سبأ": 428, "فاطر": 434, "يس": 440, "الصافات": 446, "ص": 453, "الزمر": 458, "غافر": 467, "فصلت": 477,
    "الشورى": 483, "الزخرف": 489, "الدخان": 496, "الجاثية": 499, "الأحقاف": 502, "محمد": 507, "الفتح": 511, "الحجرات": 515,
    "ق": 518, "الذاريات": 520, "الطور": 523, "النجم": 526, "القمر": 528, "الرحمن": 531, "الواقعة": 534, "الحديد": 537,
    "المجادلة": 542, "الحشر": 545, "الممتحنة": 549, "الصف": 551, "الجمعة": 553, "المنافقون": 554, "التغابن": 556,
    "الطلاق": 558, "التحريم": 560, "الملك": 562, "القلم": 564, "الحاقة": 566, "المعارج": 568, "نوح": 570, "الجن": 572,
    "المزمل": 574, "المدثر": 575, "القيامة": 577, "الإنسان": 578, "المرسلات": 580, "النبأ": 582, "النازعات": 583, "عبس": 585,
    "التكوير": 586, "الإنفطار": 587, "المطففين": 588, "الإنشقاق": 589, "البروج": 590, "الطارق": 591, "الأعلى": 591, "الغاشية": 592,
    "الفجر": 593, "البلد": 594, "الشمس": 595, "الليل": 595, "الضحى": 596, "الشرح": 596, "التين": 597, "العلق": 597, "القدر": 598,
    "البينة": 598, "الزلزلة": 599, "العاديات": 599, "القارعة": 600, "التكاثر": 600, "العصر": 601, "الهمزة": 601, "الفيل": 601,
    "قريش": 602, "الماعون": 602, "الكوثر": 602, "الكافرون": 603, "النصر": 603, "المسد": 603,
    "الناس": 604, "الفلق": 604, "الإخلاص": 604,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPart, setSelectedPart] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (event) => {
    const partNumber = event.target.value;
    setSelectedPart(partNumber);
    const selectedObj = PartQuran.find((el) => Object.keys(el)[0] === partNumber);

    if (selectedObj) {
      const pageNumber = parseInt(Object.values(selectedObj)[0]);
      setCurrentPage(pageNumber);
    }
  };

  const updatePage = (direction) => {
    setCurrentPage((prevPage) => {
      let newPage = direction === "next" ? prevPage + (isLargeScreen ? 2 : 1) : prevPage - (isLargeScreen ? 2 : 1);
      return newPage < 1 ? 1 : newPage > 606 ? 1 : newPage;
    });
  };

  const toggleFullScreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-2">
      <header className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-[#fff]`} rounded-lg`}>
        <div className="w-full py-2 px-2 sm:px-3 flex sm:flex-nowrap justify-between items-center rounded-lg gap-4">
          <div className="w-full flex justify-start items-center shadow rounded-md">
            <select
              className={`w-full p-1 rounded-md outline-none appearance-none ${dark_mode ? `bg-dark_main_bg_color text-light_main_txt_color border border-border_color` : `bg-[#fafafa] text-light_main_tooltip_color`}`}
              onChange={(e) => {
                console.log(e.target.value)
                const selectedSurah = e.target.value;
                if (surahStartPages[selectedSurah]) {
                  isLargeScreen ? selectedSurah === "البقرة" ? setCurrentPage(surahStartPages[selectedSurah]) : setCurrentPage(surahStartPages[selectedSurah] + 1) : selectedSurah === "البقرة" || selectedSurah === "الفاتحة" ? setCurrentPage(surahStartPages[selectedSurah] + 1) : setCurrentPage(surahStartPages[selectedSurah] + 2);
                }
              }}
            >
              <option defaultValue="السورة" disabled>السورة</option>
              {soundQuran.map(soura => <option key={soura.id} value={soura.name}>{soura.name}</option>)}
            </select>
          </div>
          <div className={`w-full flex justify-center items-center shadow rounded-md `}>
            <select
              id="quranPart" value={selectedPart} onChange={handleChange}
              className={`w-full p-1 rounded-md outline-none appearance-none ${dark_mode ? `bg-dark_main_bg_color text-light_main_txt_color border border-border_color` : `bg-[#fafafa] text-light_main_tooltip_color`} `}>
              <option value="">اختر الجزء</option>
              {PartQuran.map((part, index) => {
                const partNumber = Object.keys(part)[0];
                return <option key={index} value={partNumber}>الجزء {partNumber}</option>;
              })}
            </select>
          </div>
          <div
            className={`flex justify-center items-center p-2 rounded-lg cursor-pointer ${dark_mode ? `text-main_hover_color hover:text-light_main_txt_color border border-border_color` : `bg-[#9fb3b3] text-dark_main_txt_color hover:text-light_main_txt_color`}`}
            onClick={toggleFullScreen}
          >
            <MdOutlineZoomOutMap className="text-white" />
          </div>
        </div>
      </header>
      <div className="w-full flex justify-center items-center px-2">
        <div className="w-full sm:w-1/2 flex justify-between items-center border border-[#cecece] rounded-lg">
          <button className={`backBtn flex justify-between items-center gap-2 hover:text-[#fff] hover:bg-[#22a5ad] p-1 sm:px-4 rounded-md duration-500 ${dark_mode ? `text-light_main_txt_color` : `text-dark_main_txt_color hover:text-light_main_txt_color`}`} onClick={() => updatePage("back")}>
            <MdOutlineSubdirectoryArrowRight /> <span >السابق</span>
          </button>
          <button className={`nextBtn flex justify-between items-center gap-2 hover:text-[#fff] hover:bg-[#22a5ad] p-1 sm:px-4 rounded-md duration-500 ${dark_mode ? `text-light_main_txt_color` : `text-dark_main_txt_color hover:text-light_main_txt_color`}`} onClick={() => updatePage("next")}>
            <span>التالي</span> <MdOutlineSubdirectoryArrowLeft />
          </button>
        </div>
      </div>
      <div className="w-full justify-center items-center rounded-md border-[10px] border-main_hover_color">
        <div className='pageContainer w-full flex flex-nowrap justify-center items-center rounded-md lg:h-[650px] xl:h-[650px]'>
          <div className="w-full h-full flex rounded-md">
            <img src={`${BASE_URL}${currentPage === 2 ? 2 : currentPage === 122 || currentPage === 202 ? currentPage : currentPage <= 1 ? 1 : currentPage - 1}.jpg`} alt='QuranPages' className="w-full inline-block" id="nextImage" />
          </div>
          <div className="w-full h-full hidden xl:flex rounded-md">
            <img src={`${BASE_URL}${currentPage === 2 ? 3 : currentPage === 122 || currentPage === 202 ? currentPage - 1 : currentPage}.jpg`} alt='QuranPages' className="w-full inline-block" id="backImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseQuranPages;






