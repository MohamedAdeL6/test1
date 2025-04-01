import React from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube,  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const dark_mode = useSelector((state) => state.darkMode.value);

  return (
    <footer className={`w-full flex flex-col justify-center items-center border-t ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-dark_second_bg_color border-gray-300`}`}>

      <div className="container flex justify-center items-center">

        <div className={`grid grid-cols-1`}>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 sm:gap-3 py-8 `}>

            {/* Quran Kareem Section */}
            <div className={`w-full flex flex-wrap items-start content-start gap-5 ${dark_mode ? `text-white` : `text-main_hover_color`}`}>
              <h2 className="text-2xl font-bold pb-4 border-b border-border_color">القرآن الكريم</h2>
              <p className={`w-full flex flex-wrap justify-center items-center gap-5 ${dark_mode ? `text-light_main_bg_color` : `text-black`}  `}>
                <span className={`w-full`}>  "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"  </span>
                <span className={`w-full`}> (Surah Al-Qamar 54:17)</span>
              </p>
            </div>

            {/* Quick Links */}
            <div className={`w-full flex flex-wrap justify-start items-center gap-5 ${dark_mode ? `text-white` : `text-main_hover_color`}`}>
              <div className={`w-full flex flex-wrap justify-start items-center `}>
                <h3 className="text-2xl font-bold pb-4 border-b border-border_color">
                  روابط سريعة
                </h3>

              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-1">
                <li>
                  <Link to={`/`} className={` inline-block w-max ${dark_mode ? `text-white` : `text-dark_main_txt_color`} duration-500 hover:text-main_hover_color`}>
                    🏠  الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to={`/SoundsQuran`} className={` inline-block w-max ${dark_mode ? `text-white` : `text-dark_main_txt_color`} duration-500 hover:text-main_hover_color`}>
                    📖 تلاوة القرآن
                  </Link>
                </li>
                <li>
                  <Link to={`/TafserQuran`} className={` inline-block w-max ${dark_mode ? `text-white` : `text-dark_main_txt_color`} duration-500 hover:text-main_hover_color`}>
                    📜 تفسير القرآن
                  </Link>
                </li>
                <li>
                  <Link to={``} className={` inline-block w-max ${dark_mode ? `text-white` : `text-dark_main_txt_color`} duration-500 hover:text-main_hover_color`}>
                    📚 الأحاديث
                  </Link>
                </li>
                <li>
                  <Link to={`/SpeceficAzkar`} className={` inline-block w-max ${dark_mode ? `text-white` : `text-dark_main_txt_color`} duration-500 hover:text-main_hover_color`}>
                    📚 الأذكار
                  </Link>
                </li>
                <li>
                  <Link to={``} className={` inline-block w-max ${dark_mode ? `text-white` : `text-dark_main_txt_color`} duration-500 hover:text-main_hover_color`}>
                    📞 اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div className={`flex flex-wrap justify-start items-start content-start gap-5 ${dark_mode ? `text-white` : `text-main_hover_color`}`}>

              <h3 className="text-2xl font-bold border-b pb-4 border-border_color ">
                تابعونا على
              </h3>

              <div className="w-full flex justify-strat items-center gap-5 pt-2 ">
                <a href="##" className={` ${dark_mode ? `text-white` : `text-gray-700`} duration-500 hover:text-main_hover_color text-2xl`}>
                  <FaFacebook />
                </a>
                <a href="##" className={` ${dark_mode ? `text-white` : `text-gray-700`} duration-500 hover:text-main_hover_color text-2xl`}>
                  <FaTwitter />
                </a>
                <a href="##" className={` ${dark_mode ? `text-white` : `text-gray-700`} duration-500 hover:text-main_hover_color text-2xl`}>
                  <FaInstagram />
                </a>
                <a href="##" className={` ${dark_mode ? `text-white` : `text-gray-700`} duration-500 hover:text-main_hover_color text-2xl`}>
                  <FaYoutube />
                </a>
              </div>

              <p className={`w-full flex flex-wrap cursor-pointer ${dark_mode ? `text-white` : `text-black`} duration-500 hover:text-main_hover_color text-sm`}>
               <span className={`w-full text-lg`}>  Email 📩 </span>  
               <span className={`w-full text-xs`}> mohamedadel.ma.098@gmail.com.com </span>
              </p>

            </div>

          </div>
        </div>
      </div>
      
          {/* Divider */}
          <div className={`w-full py-5 text-center  border-t ${dark_mode ? `border-border_color` : `border-gray-300`}`}>
            <p className={`${dark_mode ? `text-white` : `text-dark_main_txt_color`} text-lg`}>
              © {new Date().getFullYear()} موقع القرآن الكريم. جميع الحقوق محفوظة.
            </p>
          </div>
    </footer>
  );
};

export default Footer;
