
import Section1Search from "./Section1Search/Section1Search";
import Section1Logo from "./Section1Logo/Section1Logo";
import { useSelector } from "react-redux";

function Section1() {

  const dark_mode = useSelector((state) => state.darkMode.value);


  return (
    <div className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color border-b border-border_color pb-4` : `bg-main_hover_color`}`}>
      <div className={`container w-full flex flex-wrap justify-center items-center `}>
        <div className={`w-full flex flex-wrap justify-center items-center `}>
          <div className={`w-full 2xl:w-2/3 flex flex-wrap justify-center items-center gap-9 py-7`}>
            <Section1Logo />
            <Section1Search />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
