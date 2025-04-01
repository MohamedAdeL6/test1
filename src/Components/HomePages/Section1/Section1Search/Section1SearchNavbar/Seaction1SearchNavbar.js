import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import image from "../../../../Images/HomePage/Section1_Search_Images/nav-before.png"
import { Link } from 'react-router-dom';
import { RiMenuUnfoldLine } from "react-icons/ri";


const NavbarQuranHomePage = () => {

  const dark_mode = useSelector((state) => state.darkMode.value);
  const [menuSetting, setMenuSetting] = useState(false);

  return (

    <div className="Seaction1SearchNavbar w-full flex items-center justify-center">

      <div className="w-full flex justify-center items-center relative">

        <div className={`w-full flex rounded-full ${dark_mode ? `border-0` : `border border-[#fff]`}`}>

          <div className={`${dark_mode ? `image flex h-[60px]` : `hidden`}`}>
            <img src={image} alt="..." className={`w-full h-full`} />
          </div>

          <div className={`w-full flex justify-center items-center`}>

            <nav className={`w-full flex grow items-center jusrify-between ${dark_mode ? `border-b-2 border-t-2 border-[#22a5ad]` : `border-0`}`}>

              <div className="w-full relative flex items-center justify-between">

                <div className="flex justify-center items-center rounded-full sm:hidden">
                  <Link
                    title="القرآن الكريم"
                    to={`/BrowseQuran`}
                    className={`w-full text-center text-white whitespace-nowrap px-4 py-4 text-sm font-bold border-l border-[#239fb8] ${dark_mode ? `bg-[#1f2125]` : `bg-[#000] rounded-tr-full rounded-br-full`}`}
                    aria-current="page"
                  >
                    القرآن الكريم
                  </Link>
                </div>

                <div className="hidden sm:flex sm:grow sm:items-stretch sm:justify-between">

                  <ul className="flex grow justify-between items-center ">

                    <li className={`flex grow justify-start items-center rounded-tr-full rounded-br-full  text-white `}>
                      <Link
                        title="القرآن الكريم"
                        to={`/BrowseQuran`}
                        className={`w-full font-extrabold text-center text-xl py-4 ${dark_mode ? `border-l border-[#239fb8]` : `bg-[#000] rounded-tr-full rounded-br-full border-l border-[#fff]`} duration-500 hover:bg-[#000]`}
                        aria-current="page"
                      >
                          القرآن الكريم
                      </Link>
                    </li>

                    <li className={`flex grow justify-center items-center`}>
                      <Link
                        title="صوتيات"
                        to={`/SoundsQuran`}
                        className={`w-full font-extrabold text-white text-center text-xl py-4 duration-500 hover:bg-[#000]  hover:border-[#fff]`}
                      >
                        صوتيات
                      </Link>
                    </li>

                    <li className={`flex grow justify-center items-center`}>
                      <Link
                        title="تفسير"
                        to={`/TafserQuran`}
                        className={`w-full font-extrabold text-white text-center text-xl py-4 border-r duration-500 hover:bg-[#000] ${dark_mode ? `border-[#239fb8]` : `border-[#fff]`}`}
                      >
                        تفسير
                      </Link>
                    </li>

                    <li className={`flex grow justify-center items-center`}>
                      <Link
                        title=" الإذاعة "
                        to={`/radioFm`}
                        className={`w-full font-extrabold text-white text-center text-xl py-4 border-r duration-500 hover:bg-[#000] ${dark_mode ? `border-[#239fb8]` : `border-[#fff]`}`}
                      >
                        الإذاعة
                      </Link>
                    </li>

                    <li className={`flex grow justify-center items-center`}>
                      <Link
                        title="الأذكار"
                        to={`/SpeceficAzkar`}
                        className={`w-full font-extrabold text-white text-center text-xl py-4 border-r border-[#239fb8] duration-500 hover:bg-[#000] ${dark_mode ? `border-[#239fb8]` : `border-[#fff]`}`}
                      >
                        الأذكار
                      </Link>
                    </li>

                    <li className={`flex grow justify-center items-center`}>
                      <Link
                        title=" عداد التسبيح الإلكتروني"
                        to={`/RosaryOnline`}
                        className={`w-full font-extrabold text-white text-center text-xl py-4 border-r duration-500 hover:bg-[#000]
                        ${dark_mode ? `border-[#239fb8] hover:rounded-tl-0 hover:rounded-bl-0 ` : ` border-[#fff] hover:rounded-tl-full hover:rounded-bl-full`}`}
                      >
                        عداد التسبيح الإلكتروني
                      </Link>
                    </li>

                  </ul>
                  
                </div>

                <div className="flex justify-center rounded-full sm:hidden">
                  <button
                    type="button"
                    className={`relative flex justify-center items-center py-[11px] text-white ${dark_mode ? `bg-[#1f2125]` : `pl-5 rounded-tl-full rounded-bl-full`}`}
                    onClick={() => setMenuSetting(!menuSetting)}
                  >
                    <RiMenuUnfoldLine className={`text-3xl`} />
                  </button>
                </div>

              </div>

            </nav>

          </div>

          <div className={`${menuSetting ? `w-full flex justify-center items-center absolute z-10 bottom-[-159px] sm:hidden` : `hidden`}`}>
           
            <div className='w-[93%] flex flex-wrap justify-between items-center gap-1 bg-[#ebf9fa] rounded-lg border border-[#22a5ad]'>
             
              <ul className="flex flex-wrap grow justify-between items-center rounded-lg ">
               
                <li className={`w-[47%] flex justify-center items-center`}>
                  <Link
                    title="القرآن الكريم"
                    to={`/BrowseQuran`}
                    className={`w-full text-[#22a5ad] text-center font-extrabold text-xl py-3 border-b border-l border-[#22a5ad] duration-500 hover:text-[#fff] hover:bg-gray-700 hover:border-[#374151] hover:rounded-tr-lg whitespace-nowrap`}
                    aria-current="page"
                  >
                    القرآن
                  </Link>
                
                </li>

                <li className={`w-[47%] flex justify-center items-center`}>
                  <Link
                    title="صوتيات"
                    to={`/SoundsQuran`}
                    className={`w-full text-[#22a5ad] text-center font-extrabold text-xl py-3 border-b border-r border-[#22a5ad] duration-500 hover:text-[#fff] hover:bg-gray-700 hover:border-[#374151] hover:rounded-tl-lg whitespace-nowrap`}
                  >
                    صوتيات
                  </Link>
                </li>

                <li className={`w-[47%] flex justify-center items-center`}>
                  <Link
                    title="تفسير"
                    to={`/TafserQuran`}
                    className={`w-full text-[#22a5ad] text-center font-extrabold text-xl py-3 border-b border-l border-[#22a5ad] duration-500 hover:text-[#fff] hover:bg-gray-700 hover:border-[#374151] whitespace-nowrap`}
                  >
                    تفسير
                  </Link>
                </li>

                <li className={`w-[47%] flex justify-center items-center`}>
                  <Link
                    title="الاذاعه"
                    to={`/radioFm`}
                    className={`w-full text-[#22a5ad] text-center font-extrabold text-xl py-3 border-b border-r border-[#22a5ad] duration-500 hover:text-[#fff] hover:bg-gray-700 hover:border-[#374151]  whitespace-nowrap`}
                  >
                    الاذاعه
                  </Link>
                </li>

                <li className={`w-[47%] flex justify-center items-center`}>
                  <Link
                    title="الأذكار"
                    to={`/SpeceficAzkar`}
                    className={`w-full text-[#22a5ad] text-center font-extrabold text-xl py-3 border-l border-[#22a5ad] duration-500 hover:text-[#fff] hover:bg-gray-700 hover:border-[#374151] hover:rounded-br-lg whitespace-nowrap`}
                  >
                    الأذكار
                  </Link>
                </li>

                <li className={`w-[47%] flex justify-center items-center`}>
                  <Link
                  title=" عداد التسبيح الإلكتروني"
                  to={`/RosaryOnline`}
                    className={`w-full text-[#22a5ad] text-center font-extrabold text-xl py-3 border-r border-[#22a5ad] duration-500 hover:text-[#fff] hover:bg-gray-700 hover:border-[#374151] hover:rounded-bl-lg whitespace-nowrap `}
                  >
                        التسبيح الإلكتروني 
                  </Link>
                </li>

              </ul>

            </div>
            
          </div>

          <div className={`${dark_mode ? `image flex rotate-180 h-[60px]` : `hidden`}`}>
            <img
              src={image}
              alt="..."
              className={`w-full h-full`}
            />
          </div>

        </div>

      </div>

    </div>
  )

}

export default NavbarQuranHomePage

