import React, { useState } from 'react'
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useSelector } from 'react-redux';

function BrowseQuranHeader() {
	const dark_mode = useSelector((state) => state.darkMode.value);
	const soundQuran = useSelector((state) => state.soundQuran.value)
	// ------- reatrieve RecitersQuran -------
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className={`w-full flex flex-wrap justify-center items-center gap-5`}>
			<header className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color` : `bg-[#fff]`} rounded-lg`}>
				<div className={`w-full flex flex-wrap justify-center items-center`}>
					<div className={`w-full py-2 px-2 sm:px-3 flex  sm:flex-nowrap justify-between items-center rounded-lg gap-4`}>
						<div className={`w-[45%] sm:w-1/3 xl:w-1/4 flex justify-start items-center shadow rounded-md`}>
							<select name="السورة" id="cars" className={`w-full bg-[#fafafa] outline-none p-1 rounded-md appearance-none`}>
								<option defaultValue="السورة" disabled > السورة </option>
								{
									soundQuran.map(soura => {
										return (
											<option value={`${soura.name}`} key={soura.id}>{soura.name} </option>
										)
									})
								}
							</select>
						</div>
						<div className={`w-full sm:w-1/3 xl:w-1/4 flex justify-center sm:justify-start items-center gap-3`}>
							<div className={`w-full flex justify-center items-center shadow rounded-md`}>
								<select
									name="الجزء"
									id="cars"
									className={`w-full bg-[#fafafa] outline-none p-1 rounded-md appearance-none`}
									onChange={handleChange} value={selectedOption}
								>
									<option defaultValue="الجزء" disabled > الجزء </option>
									{
										Array.from({ length: 30 }, (_, i) => i + 1).map((part, index) => {
											return (
												<option value={`${part}`} key={index} className={`cursor-pointer`}>
													الجزء {index + 1}
												</option>
											)
										})
									}
								</select>
							</div>
							<div className={`flex justify-center items-center p-2 bg-[#9fb3b3] rounded-lg cursor-pointer`}>
								<MdOutlineZoomOutMap className={`text-white `} />
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}
export default BrowseQuranHeader


