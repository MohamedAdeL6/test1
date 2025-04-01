import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdMenuBook, MdRadio, MdFavorite, MdOutlineCloudDownload, MdCollectionsBookmark, MdLibraryBooks, MdOndemandVideo, MdMapsHomeWork } from "react-icons/md";
import { useSelector } from 'react-redux';



function BrowseQuranSidebar() {

	  const dark_mode = useSelector((state) => state.darkMode.value);
	
	return (
		<div className={`h-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color border border-border_color` : `bg-dark_second_bg_color`}  rounded-md`}>

			<div className="desktop-sidebar py-1 h-full flex justify-center items-center">

				<ul className="list-unstyled flex flex-wrap justify-center items-stretch gap-5 px-2">
					<li className={`w-full flex jusstart items-center duration-700  rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={`/`}
							className="menu-link w-full p-2 flex justify-start items-center gap-3">
							<span className="icon-home"> <FaHome /> </span>
							<span> الرئيسية </span>
						</Link>
					</li>
					<li className={`w-full flex jusstart items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-favorite"> <MdFavorite /> </span>
							<span> المفضلة </span>
						</Link>
					</li>
					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-radio"> <MdRadio /> </span>
							<span> الإذاعة </span>
						</Link>
					</li>

					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b  ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={`/BrowseQuran`}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-menu_book"> <MdMenuBook /> </span>
							<span> تصفح القرآن </span>
						</Link>
					</li>
					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-folder-video"> <MdOndemandVideo /> </span>
							<span> 	التلاوات المرئية </span>
						</Link>
					</li>
					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-file_download"> <MdOutlineCloudDownload /> </span>
							<span> تحميل المصحف  </span>
						</Link>
					</li>
					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-book"> <MdCollectionsBookmark />  </span>
							<span> سورة الكهف </span>
						</Link>
					</li>
					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-notebook"> <MdLibraryBooks /> </span>
							<span> 	حصن المسلم </span>
						</Link>
					</li>

					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-center gap-3">
							<span className="icon-store_mall_directory"> <MdMapsHomeWork /> </span>
							<span> التطبيقات </span>
						</Link>
					</li>

					<li className={`w-full flex justify-start items-center duration-700 rounded-md border-b ${dark_mode ? `border-border_color text-light_main_txt_color hover:bg-main_hover_color` : `text-light_main_tooltip_color border-[#ddd] hover:bg-[#ddd]`}`}>
						<Link to={``}
							className="menu-link w-full p-3 flex justify-start items-cente gap-3">
							<span className="mp3-icon icon-tafsir"></span>
							<span> تفسير القرآن </span>
						</Link>
					</li>


				</ul>

			</div>

		</div>
	)
}

export default BrowseQuranSidebar
