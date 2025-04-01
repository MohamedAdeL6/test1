
import { FaSignInAlt, FaFacebook, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LoginChoos() {
	const dark_mode = useSelector((state) => state.darkMode.value);

	return (
		<div className={`w-full  flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color` : `bg-light_main_bg_color`}`}>
			<div className="w-full h-full flex justify-center items-center p-4 py-[18.7px] sm:py-[18.7px]">
				<div className={`w-full sm:w-[500px] flex flex-wrap justify-center items-center gap-4 border ${dark_mode ? `border-border_color`: `border-[#ddd]`}  rounded-lg px-3 pb-3`}>
					<div className={`w-full flex flex-wrap justify-center items-center gap-1 border-b  py-4
						${dark_mode ? `text-light_main_txt_color border-border_color` : `text-light_main_tooltip_color border-[#22a5ad]`}
						`}>
						<span className={`w-full flex flex-wrap justify-center items-center text-bg-danger text-2xl font-bold first-letter`}>
							تسجيل الدخول إلى موقع
						</span>
						<span className='w-full flex flex-wrap justify-center items-center text-bg-danger text-2xl font-bold'> Quran.com </span>
					</div>

					<form className="input_signin w-full flex flex-wrap gap-4">

						<div className="w-full flex justify-between items-center">

							<div className="input w-[47%] flex">
								<div className="w-full flex items-center justify-center gap-3 ">
									<input type="text" name="email" className={`w-full border rounded-lg p-2 text-start outline-0 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd] `}`} id="email" placeholder=" الأسم الأول" />
								</div>
							</div>

							<div className="input w-[47%] flex">
								<div className="w-full flex items-center justify-center gap-3 ">
									<input type="text" name="email" className={`w-full border rounded-lg p-2 text-start outline-0 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd] `}`} id="email" placeholder="الأسم الأخير" />
								</div>
							</div>

						</div>

						<div className="w-full flex justify-between items-center">

							<div className="input w-[48%] flex">
								<div className="w-full flex items-center justify-center gap-3 ">
									<input type="password" name="email" className={`w-full border rounded-lg p-2 text-start outline-0 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd] `}`} id="email" placeholder="كلمة السر " />
								</div>
							</div>

							<div className="input w-[48%] flex">
								<div className="w-full flex items-center justify-center gap-3 ">
									<input type="password" name="email" className={`w-full border rounded-lg p-2 text-start outline-0 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd] `}`} id="email" placeholder="تأكيد كلمة السر " />
								</div>
							</div>
						</div>

						<div className="input w-full flex">
							<div className="w-full flex items-center justify-center gap-3 ">
								<input type="email" name="email" className={`w-full border rounded-lg p-2 text-start outline-0 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd] `}`} id="email" placeholder="البريد الإلكتروني" />
							</div>
						</div>

						<div className="w-full flex justify-start items-center gap-3">
							<input type="checkbox" className={` `} />
							<span className={`${dark_mode ? `text-[#9ca3af]` : `text-[#666]`}`}> أوافق علي الشروط والأحكام </span>
						</div>

						<button type="submit" dir="rtl"
							className={`w-full flex justify-center items-center gap-3  border rounded-lg p-2 duration-500  ${dark_mode ? `text-[#9ca3af] border-border_color hover:bg-border_color` : `bg-light_main_bg_color border-[#ddd] hover:bg-[#aaa] hover:text-light_main_txt_color`}`}>
							<span className="">
								<FaSignInAlt />
							</span>
							<span className="">  تسجيل الدخول </span>
						</button>

					</form>

					<div className={`w-full flex justify-center items-center relative after:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[42%] after:h-[2px]
                     before:content-[''] before:absolute before:top-[50%] before:left-0  before:w-[42%] before:h-[2px] 
										 ${dark_mode ? `text-[#fff] before:bg-border_color after:bg-border_color` : `text-[#666] after:bg-main_hover_color before:bg-main_hover_color `}
										 `}>
						OR
					</div>

					<div className="w-full flex flex-wrap justify-center items-center gap-4">
						<Link to={`/login`} className="w-full flex items-center justify-center gap-3">
							<button type="submit" dir="rtl" className="w-full flex items-center justify-center gap-3 rounded-lg p-2 bg-[#fff] text-[#666] duration-500 hover:bg-[#aaa] hover:text-[#000] ">
								<span dir="rtl">
									<FaUserCircle />
								</span>
								<span className="Button_content__hmBjB"> بالفعل انا امتلك حساب </span>
							</button>
						</Link>

						<button type="submit" dir="rtl" className={`w-full flex items-center justify-center gap-3 rounded-lg p-2 bg-[#fff] text-[#2ca4ab] duration-500 hover:bg-[#aac7c9] hover:text-[#fff]`}>
							<span dir="rtl">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4">
									</path>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853">
									</path>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05">
									</path>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335">
									</path>
								</svg>
							</span>
							<span className="Button_content__hmBjB"> ادخل عبر  جوجل</span>
						</button>

						<button type="submit" dir="rtl" className="w-full flex items-center justify-center gap-3 rounded-lg p-2 bg-[#4267b2e6] text-[#fff] duration-500 hover:bg-[#fff] hover:text-[#2ca4ab] ">
							<span dir="rtl">
								<FaFacebook />
							</span>
							<span className="Button_content__hmBjB">ادخل فيسبوك </span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginChoos
