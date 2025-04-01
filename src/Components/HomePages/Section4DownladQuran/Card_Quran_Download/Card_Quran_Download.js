import React from "react";

import { useSelector } from "react-redux";

import "./Card_Quran_Download.css";


const CardQuranDownload = (props) => {
  
  const data = props.data;

  const dark_mode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`
    card_content
    
    `}>
      <div className="w-full flex flex-wrap gap-4  cursor-pointer pt-10">
        <div className="card_image w-full flex justify-center items-center duration-300 rounded-3xl hover:rounded-none hover:scale-[1.03]  ">
          <img
            src={data.image}
            alt=".."
            className="w-full h-full duration-300 rounded-3xl hover:rounded-none hover:scale-[1.03]"
          />
        </div>
        <p
          className={`w-full flex justify-center xl:justify-start items-center pr-4  text-lg font-bold hover:text-[red]
           ${
            dark_mode ? `text-light_main_txt_color` : `text-dark_main_txt_color`
          } `}
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default CardQuranDownload;
