import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function RadioPage() {

	const [playRadioIcon, setPlayRadioIcon] = useState(false)

	const showSTopIcon = () => {
		document.querySelector(".radioQuranKareem").pause()
		if (playRadioIcon) {

			document.querySelector('.whitePlayIcon').classList.remove('hidden')
			document.querySelector('.greenPlayIcon').classList.add('hidden')

			document.querySelector('.redRoundIcon').classList.remove('hidden')
			document.querySelector('.greenRoundIcon').classList.add('hidden')

			document.querySelector('.whiteStopIcon').classList.remove('hidden')
			document.querySelector('.redStopIcon').classList.add('hidden')

			setPlayRadioIcon(!playRadioIcon)
		}

	}

	const showPlayIcon = () => {

		document.querySelector(".radioQuranKareem").play()
		document.querySelector('.whitePlayIcon').classList.add('hidden')
		document.querySelector('.greenPlayIcon').classList.remove('hidden')

		document.querySelector('.redRoundIcon').classList.add('hidden')
		document.querySelector('.greenRoundIcon').classList.remove('hidden')

		document.querySelector('.whiteStopIcon').classList.add('hidden')
		document.querySelector('.redStopIcon').classList.remove('hidden')

		setPlayRadioIcon(!playRadioIcon)
	}

	const dark_mode = useSelector((state) => state.darkMode.value);

	return (

		<div className={`w-full h-[calc(100vh_-_65px)] flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color`: `bg-dark_second_bg_color`}`}>

			<div className={`container w-full flex justify-center items-center`}>

				<div className={`w-full flex flex-wrap justify-center items-center `}>

					<div className={`w-full sm:w-3/4 flex flex-wrap justify-center items-center gap-5 border ${dark_mode ? `border-border_color` : `border-[#bebebedd]`} rounded-lg`}>

						<div className={`w-full flex`}>

							<div className={`w-full flex  ${dark_mode ? `bg-dark_main_bg_color`: `bg-gradient-to-b from-[#007eff] to-white`}  rounded-lg px-2 lg:py-3`}>

								<div className={`w-full flex justify-end flex-row-reverse items-center gap-3`}>

									<a href="/" className={`inline-block w-[30px] h-[30px]`} >
										<svg viewBox="0 -2 20 20" className={`bg-[#007eff] rounded-full`} fill="white">
											<path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
											>

											</path>
										</svg>
									</a>
									<a href="/p/radio-stations.html" className={`inline-block w-[30px] h-[30px]`}>
										<svg viewBox="-60 -60 720 720" className={`bg-[#080] rounded-full`} fill="white">
											<path d="M455.518,224.995l-90.064-90.064l14.258-14.259l90.064,90.064L455.518,224.995z M312.773,140.697L173.767,1.689   l-47.973,47.973L264.801,188.67L312.773,140.697z M449.746,277.685l-47.971,47.97l139.01,139.01l47.971-47.971L449.746,277.685z    M368.461,339.4l95.043-95.044L346.096,126.949l-95.042,95.044l41.929,41.929l-11.636,11.635   c-44.527-34.375-98.291-40.361-127.018-11.635c-15.378,15.38-20.797,37.939-17.257,62.414h16.972   c-3.37-18.604-0.8-34.492,7.553-42.846c18.485-18.485,66.012-0.931,106.15,39.211c40.141,40.137,57.697,87.666,39.213,106.15   c-8.857,8.855-26.178,11.219-46.229,6.883v15.221c24.914,3.881,47.938-1.453,63.558-17.068   c28.182-28.182,22.963-80.463-9.699-124.48l11.936-11.938L368.461,339.4z M28.905,342.15H0c0,65.42,25.476,126.924,71.738,173.18   c46.256,46.26,107.761,71.736,173.178,71.736v-28.902c-55.339,0-110.682-21.064-152.812-63.197   C49.968,452.832,28.904,397.492,28.905,342.15z M244.915,520.027v-28.793c-38.191,0.002-76.39-14.537-105.466-43.615   c-29.079-29.076-43.618-67.275-43.618-105.469H67.043c0,45.57,17.345,91.145,52.039,125.834   C153.773,502.678,199.342,520.025,244.915,520.027z M188.893,398.174c-15.447-15.445-23.167-35.736-23.167-56.021l-28.789-0.002   c-0.003,27.666,10.53,55.33,31.591,76.391c21.061,21.059,48.724,31.592,76.389,31.59l-0.001-28.789   C224.63,421.342,204.342,413.619,188.893,398.174z M220.752,366.318c6.669,6.672,15.418,10.01,24.167,10.01V342.15h-34.181   C210.737,350.898,214.076,359.645,220.752,366.318z"></path>
										</svg>
									</a>
									<a href="/" className={`inline-block w-[30px] h-[30px]`}>
										<svg viewBox="0 0 24 24" className={`bg-[#f00] rounded-full`} fill="white">
											<path d="M16.776114,17.3694395 C17.1243807,17.7980754 17.0592286,18.4278794 16.6305926,18.7761461 L12.6305926,22.0261461 C12.26319,22.3246608 11.73681,22.3246608 11.3694074,22.0261461 L7.36940737,18.7761461 C6.94077145,18.4278794 6.87561931,17.7980754 7.223886,17.3694395 C7.57215269,16.9408036 8.2019567,16.8756514 8.63059263,17.2239181 L12,19.9615616 L15.3694074,17.2239181 C15.7980433,16.8756514 16.4278473,16.9408036 16.776114,17.3694395 Z M4.70996094,9.48876953 C5.26139599,9.48876953 5.68863781,9.67219869 5.99169922,10.0390625 C6.29476063,10.4059263 6.44628906,10.9243131 6.44628906,11.5942383 L6.44628906,12.5 C6.44628906,13.1722039 6.29533029,13.6905906 5.9934082,14.0551758 C5.69148612,14.4197609 5.26595327,14.6020508 4.71679688,14.6020508 C4.16308317,14.6020508 3.73470204,14.4186216 3.43164063,14.0517578 C3.12857921,13.684894 2.97705078,13.1676466 2.97705078,12.5 L2.97705078,11.5908203 C2.97705078,10.9186164 3.12800956,10.4002297 3.42993164,10.0356445 C3.73185372,9.67105938 4.15852589,9.48876953 4.70996094,9.48876953 Z M8.76367188,9.48876953 C9.31510692,9.48876953 9.74234875,9.67219869 10.0454102,10.0390625 C10.3484716,10.4059263 10.5,10.9243131 10.5,11.5942383 L10.5,12.5 C10.5,13.1722039 10.3490412,13.6905906 10.0471191,14.0551758 C9.74519706,14.4197609 9.3196642,14.6020508 8.77050781,14.6020508 C8.21679411,14.6020508 7.78841297,14.4186216 7.48535156,14.0517578 C7.18229015,13.684894 7.03076172,13.1676466 7.03076172,12.5 L7.03076172,11.5908203 C7.03076172,10.9186164 7.1817205,10.4002297 7.48364258,10.0356445 C7.78556466,9.67105937 8.21223683,9.48876953 8.76367188,9.48876953 Z M15.2329102,9.48876953 C15.7843452,9.48876953 16.211587,9.67219869 16.5146484,10.0390625 C16.8177098,10.4059263 16.9692383,10.9243131 16.9692383,11.5942383 L16.9692383,12.5 C16.9692383,13.1722039 16.8182795,13.6905906 16.5163574,14.0551758 C16.2144353,14.4197609 15.7889025,14.6020508 15.2397461,14.6020508 C14.6860324,14.6020508 14.2576513,14.4186216 13.9545898,14.0517578 C13.6515284,13.684894 13.5,13.1676466 13.5,12.5 L13.5,11.5908203 C13.5,10.9186164 13.6509588,10.4002297 13.9528809,10.0356445 C14.2548029,9.67105937 14.6814751,9.48876953 15.2329102,9.48876953 Z M19.2866211,9.48876953 C19.8380561,9.48876953 20.265298,9.67219869 20.5683594,10.0390625 C20.8714208,10.4059263 21.0229492,10.9243131 21.0229492,11.5942383 L21.0229492,12.5 C21.0229492,13.1722039 20.8719904,13.6905906 20.5700684,14.0551758 C20.2681463,14.4197609 19.8426134,14.6020508 19.293457,14.6020508 C18.7397433,14.6020508 18.3113622,14.4186216 18.0083008,14.0517578 C17.7052394,13.684894 17.5537109,13.1676466 17.5537109,12.5 L17.5537109,11.5908203 C17.5537109,10.9186164 17.7046697,10.4002297 18.0065918,10.0356445 C18.3085139,9.67105937 18.735186,9.48876953 19.2866211,9.48876953 Z M12,13 C12.1822926,13 12.333821,13.0541173 12.4545898,13.1623535 C12.5753587,13.2705897 12.6357422,13.4090161 12.6357422,13.5776367 C12.6357422,13.7462574 12.5753587,13.8846837 12.4545898,13.9929199 C12.333821,14.1011561 12.1822926,14.1552734 12,14.1552734 C11.8154288,14.1552734 11.6633307,14.1005865 11.5437012,13.9912109 C11.4240717,13.8818354 11.3642578,13.7439787 11.3642578,13.5776367 C11.3642578,13.4112947 11.4240717,13.273438 11.5437012,13.1640625 C11.6633307,13.054687 11.8154288,13 12,13 Z M4.70996094,10.3774414 C4.51171776,10.3774414 4.36759485,10.4594718 4.27758789,10.6235352 C4.18758093,10.7875985 4.13916019,11.0359684 4.13232422,11.3686523 L4.13232422,12.6401367 C4.13232422,13.0115578 4.17903599,13.2832836 4.27246094,13.4553223 C4.36588588,13.6273609 4.51399638,13.7133789 4.71679688,13.7133789 C4.9127614,13.7133789 5.05745396,13.6296395 5.15087891,13.4621582 C5.24430385,13.2946769 5.29215494,13.0320656 5.29443359,12.6743164 L5.29443359,11.4438477 C5.29443359,11.0860985 5.24772182,10.8189299 5.15429687,10.642334 C5.06087193,10.465738 4.91276143,10.3774414 4.70996094,10.3774414 Z M8.76367187,10.3774414 C8.5654287,10.3774414 8.42130579,10.4594718 8.33129883,10.6235352 C8.24129187,10.7875985 8.19287113,11.0359684 8.18603516,11.3686523 L8.18603516,12.6401367 C8.18603516,13.0115578 8.23274693,13.2832836 8.32617187,13.4553223 C8.41959682,13.6273609 8.56770732,13.7133789 8.77050781,13.7133789 C8.96647233,13.7133789 9.1111649,13.6296395 9.20458984,13.4621582 C9.29801479,13.2946769 9.34586587,13.0320656 9.34814453,12.6743164 L9.34814453,11.4438477 C9.34814453,11.0860985 9.30143276,10.8189299 9.20800781,10.642334 C9.11458287,10.465738 8.96647237,10.3774414 8.76367187,10.3774414 Z M15.2329102,10.3774414 C15.034667,10.3774414 14.8905441,10.4594718 14.8005371,10.6235352 C14.7105301,10.7875985 14.6621094,11.0359684 14.6552734,11.3686523 L14.6552734,12.6401367 C14.6552734,13.0115578 14.7019852,13.2832836 14.7954102,13.4553223 C14.8888351,13.6273609 15.0369456,13.7133789 15.2397461,13.7133789 C15.4357106,13.7133789 15.5804032,13.6296395 15.6738281,13.4621582 C15.7672531,13.2946769 15.8151042,13.0320656 15.8173828,12.6743164 L15.8173828,11.4438477 C15.8173828,11.0860985 15.770671,10.8189299 15.6772461,10.642334 C15.5838211,10.465738 15.4357106,10.3774414 15.2329102,10.3774414 Z M19.2866211,10.3774414 C19.0883779,10.3774414 18.944255,10.4594718 18.854248,10.6235352 C18.7792422,10.7602546 18.7331158,10.9555203 18.7158678,11.2093365 L18.7089844,11.3686523 L18.7089844,12.6401367 C18.7089844,13.0115578 18.7556961,13.2832836 18.8491211,13.4553223 C18.942546,13.6273609 19.0906565,13.7133789 19.293457,13.7133789 C19.4894216,13.7133789 19.6341141,13.6296395 19.7275391,13.4621582 C19.8053932,13.3225904 19.8515988,13.1169602 19.8661567,12.8452629 L19.8710938,12.6743164 L19.8710938,11.4438477 C19.8710938,11.0860985 19.824382,10.8189299 19.730957,10.642334 C19.6375321,10.465738 19.4894216,10.3774414 19.2866211,10.3774414 Z M12,10.2724609 C12.1822926,10.2724609 12.333821,10.3265782 12.4545898,10.4348145 C12.5753587,10.5430507 12.6357422,10.681477 12.6357422,10.8500977 C12.6357422,11.0187183 12.5753587,11.1571446 12.4545898,11.2653809 C12.333821,11.3736171 12.1822926,11.4277344 12,11.4277344 C11.8154288,11.4277344 11.6633307,11.3730474 11.5437012,11.2636719 C11.4240717,11.1542963 11.3642578,11.0164396 11.3642578,10.8500977 C11.3642578,10.6837557 11.4240717,10.545899 11.5437012,10.4365234 C11.6633307,10.3271479 11.8154288,10.2724609 12,10.2724609 Z M7.36940737,5.223886 L11.3694074,1.973886 C11.7034098,1.70250903 12.1687984,1.6778384 12.5266892,1.8998741 L12.6305926,1.973886 L16.6305926,5.223886 C17.0592286,5.57215269 17.1243807,6.2019567 16.776114,6.63059263 C16.4546371,7.02625656 15.8932703,7.11220649 15.4716747,6.84916717 L15.3694074,6.776114 L12,4.03847051 L8.63059263,6.776114 C8.2019567,7.12438069 7.57215269,7.05922855 7.223886,6.63059263 C6.90240906,6.23492869 6.93319431,5.66785527 7.2769665,5.30903323 L7.36940737,5.223886 L11.3694074,1.973886 L7.36940737,5.223886 Z"></path>
										</svg>

									</a>
								</div>
								<div className={`flex justify-center items-center`}>
									<a href="https://www.liveradiu.com/" className={`block`}>
										<img alt="راديو لايف" className={`block w-[100px] h-[88px]`} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0TTYtz7rddwYt5M6048i8wOOyTrPPceajjR7SkbY9Sx5A8ZRp3XJKiUFBcz8UxIv85bXM_uPF_f427Yf7wyjQYL5Vv1ehVF7xZdfWF5WCnA4Ftk7zQ3VG77okbAknFozTvN7tvHa-uLE/s1600/logo.png" />
									</a>
								</div>
							</div>

						</div>

						<div className={`w-full px-2 lg:py-4 flex flex-wrap justify-center items-center sm:gap-7 border-t-2 ${dark_mode ? ` border-border_color` : `border-[#3578e5]`} rounded-tl-2xl rounded-tr-2xl rounded-md`}>

							<div className={`w-full flex justify-center items-center  rounded-full `}>
								<h1 className={`py-5 ${dark_mode ? `text-white` : `text-[#3578e5]`}`}> اذاعة القران الكريم من القاهرة بث مباشر mp3 صوت فقط </h1>
							</div>

							<div className={`w-full flex justify-center items-center gap-3 border  ${dark_mode ? `bg-dark_main_bg_color border-border_color`: `bg-[#ddd]`} py-5 rounded-lg`}>
								<div className={`w-[140px] flex flex-wrap justify-center items-center py-[3px] px-[5px] gap-1 rounded-2xl  ${dark_mode ? `bg-dark_main_bg_color border border-border_color`: `bg-[#eaebec]`} shadow-md`}>
									<div className='w-full flex justify-center items-center gap-2'>
										<span className={`text-[12px] text-[#f00] font-bold`}> ١٩٢  </span>
										<span className={`text-[12px] ${dark_mode && `text-white`}`}> كيلو بايت </span>
									</div>

									<div className={`w-full h-[27px] px-1 relative flex justify-end items-center border border-[#bebebedd] shadow-md rounded-full overflow-hidden gap-1 `}>

										<div className={`absolute left-2/3 top-[3px]`}>
											<img className={`greenRoundIcon hidden`} src="https://hosted.muses.org/2.4.4/ffmp3-repvku-100/statusplay.png" alt='...' />
											<img className={`redRoundIcon`} src="https://hosted.muses.org/2.4.4/ffmp3-repvku-100/statusstop.png" alt='...' />
										</div>

										<button
											title="stop"
											className={`flex justify-center items-center cursor-pointer`}
											onClick={() => showSTopIcon()}
										>
											<audio src='https://3vh.liveradiu.com:8000/192kp.mp3' className='radioQuranKareem'></audio>
											<img className={`whiteStopIcon`} src="https://hosted.muses.org/2.4.4/ffmp3-repvku-100/Stop.png" alt='...' />
											<img className={`redStopIcon hidden`} src="https://hosted.muses.org/2.4.4/ffmp3-repvku-100/Stopclick.png" alt='...' />
										</button>

										<button
											title="play"
											className={`flex justify-center items-center cursor-pointer`}
											onClick={() => showPlayIcon()}
										>
											<img className={`whitePlayIcon`} src="https://hosted.muses.org/2.4.4/ffmp3-repvku-100/Playclick.png" alt='...' />
											<img className={`greenPlayIcon hidden`} src="https://hosted.muses.org/2.4.4/ffmp3-repvku-100/Playclick.png" alt='...' />
										</button>

									</div>
								</div>
							</div>

							<div className={`w-full flex flex-wrap justify-center items-center`}>

								<div className={`w-full flex flex-wrap justify-center items-center gap-9 sm:gap-7 lg:gap-9 py-2 lg:py-2`}>

									<div className={`w-full flex justify-center items-center `}>
										<p className={` ${dark_mode ? `text-white` : `text-[#3578e5]`} `} dir='rtl'> بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ </p>
									</div>

									<div className={`w-full flex justify-center items-center `}>
										<p className={` ${dark_mode ? `text-white` : `text-[#3578e5]`} `}>﴿ إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا ﴾ </p>
									</div>

									<div className={`w-full flex justify-center items-center `}>
										<a
											href="http://archive.liveradiu.com:8080/@liveradiu.com/"
											className={`inline-block text-[13px] sm:text-[17px] text-[#fff]   ${dark_mode ? `bg-dark_main_bg_color` : `bg-[#3578e5]`} p-1 px-2 rounded-full`}
										>
											« أرشيف تسجيلات اذاعة القرآن »
										</a>
									</div>

								</div>
							</div>

						</div>

					</div >

				</div>

			</div>
		</div>
	)
}

export default RadioPage

