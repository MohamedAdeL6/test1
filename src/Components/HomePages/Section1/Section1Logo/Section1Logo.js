import React from 'react'
import QuranSvg from "../../../Images/HomePage/HomePage_Image_Svg/HomePage_Image_Quran_Svg";

function Section1Logo() {
    return (
        <div className='homePage_image w-full flex justify-center items-center'>
            <div className={`w-[450px] sm:w-[400px] lg:w-[420px] 2xl:w-[390px]`} >
                <QuranSvg />
            </div>
        </div>
    )
}

export default Section1Logo
