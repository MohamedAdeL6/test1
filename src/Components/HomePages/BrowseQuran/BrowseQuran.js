import React from 'react'
// import BrowseQuranHeader from './BrowseQuranHeader/BrowseQuranHeader'
import BrowseQuranPages from './BrowseQuranPages/BrowseQuranPages'
import BrowseQuranSidebar from './BrowseQuranSidebar/BrowseQuranSidebar'
import { useSelector } from 'react-redux';


function BrowseQuran() {

    const dark_mode = useSelector((state) => state.darkMode.value);
  

  return (

    <div className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color ` :  `bg-[#ddd]`}`}>

      <div className={`container w-full flex-nowrap flex justify-center items-center gap-3 `}>

        <div className={`w-full flex-nowrap flex justify-between py-1`}>

          <div className='hidden sm:flex justify-center items-stretch w-[30%] xl:w-[21%] h-5/6'>
            <BrowseQuranSidebar />
          </div>

          <div className='w-full sm:w-[67%] xl:w-[77%] 2xl:w-[78%] flex flex-wrap justify-center items-center gap-2'>
            <BrowseQuranPages />
          </div>

        </div>


      </div>
    </div>
    
  )
}

export default BrowseQuran
