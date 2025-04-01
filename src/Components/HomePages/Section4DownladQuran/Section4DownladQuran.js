import React from "react";
import { useSelector } from "react-redux";

const Section4DownladQuran = () => {

  const quranPdf = useSelector((data) => data.QuranPdf.value);
  const dark_mode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`w-full flex justify-center items-center border-t ${dark_mode ? `bg-dark_main_bg_color border-border_color ` : `bg-dark_second_bg_color border-[#ddd] mt-4 `}`}>

      <div className="container flex justify-center items-center">

        <div className={`w-full flex flex-wrap justify-center items-center gap-9 py-10  ${dark_mode ? ` border-border_color mt-4` : ``}`}>

          {/* header */}
          <div className={`w-full flex justify-center items-center`}>
            <div className={`W-full flex justify-center items-center `}>
              <h2 className={`text-xl sm:text-3xl font-bold  border-b-2 pb-4 ${dark_mode ? `border-border_color text-white` : `text-main_hover_color border-main_hover_color`}`}>
                {" "}
                تحميل القرآن الكريم PDF{" "}
              </h2>
            </div>
          </div>
          {/* Download */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {quranPdf.map((book, index) => (
              <div key={index} className={`shadow-md rounded-lg overflow-hidden p-4 text-center  ${dark_mode ? `bg-dark_main_bg_color border border-border_color` : `bg-dark_second_bg_color`}`}>
                <img src={book.cover} alt={book.title} className="w-full h-40 object-cover rounded" />
                <h2 className={`text-lg font-bold mt-2 mb-2  ${dark_mode ? `text-white` : `text-gray-600`}`}>{book.title}</h2>
                <p className={`text-base mb-2 ${dark_mode ? `text-white` : `text-gray-600`}`}>اللغة: {book.language}</p>
                <p className={`text-base mb-2 ${dark_mode ? `text-white` : `text-gray-600`}`}>الحجم: {book.size}</p>
                <div className="mt-4 flex justify-center space-x-4 ">
                  <span className={`text-2xl  ${dark_mode ? `text-white` : `text-gray-600`}`}> تحميل : &nbsp;  </span>
                  <a href={book.pdf} target="_blank" rel="noopener noreferrer">
                    <img src="https://www.pdfquran.com/images/PDF.webp" alt="PDF" className="w-10 h-10" />
                  </a>
                  <a href={book.zip} target="_blank" rel="noopener noreferrer">
                    <img src="https://www.pdfquran.com/images/ZIP.webp" alt="ZIP" className="w-10 h-10" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>

  );
};

export default Section4DownladQuran;















