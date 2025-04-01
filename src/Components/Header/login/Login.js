import React from 'react'

import { FaSignInAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Login() {
		const dark_mode = useSelector((state) => state.darkMode.value);
	
	return (
		<div className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color` : `bg-light_main_bg_color`}`}>
			<div className="w-full h-full flex justify-center items-center p-4 py-7">
				<div className={`w-full sm:w-[500px] flex flex-wrap justify-center items-center gap-7 p-3  py-[32px] rounded-lg border ${dark_mode? `border-border_color` : `border-[#ddd]`}`}>
					<div className={`w-full flex flex-wrap justify-center items-center gap-1  border-b  pb-4 ${dark_mode ? `border-border_color` : `border-black`}`}>
						<span className={`w-full flex flex-wrap justify-center items-center text-2xl font-bold ${dark_mode ? `text-white` : `text-bg-danger `}`}> تسجيل الدخول إلى موقع </span>
						<span className={`w-full flex flex-wrap justify-center items-center text-bg-danger text-2xl font-bold ${dark_mode ? `text-white` : `text-bg-danger `}`}> Quran.com </span>
					</div>
					<form className="input_signin w-full flex flex-wrap gap-7">
						<div className="input w-full flex">
							<div className="w-full flex items-center justify-center gap-3">
								<input type="email" name="email" className={`w-full border border-[#ddd] rounded-lg p-2 text-start outline-0
							 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd] `}
									`} id="email" placeholder="البريد الإلكتروني" />
							</div>
						</div>
						<div className="input w-full flex">
							<div className="w-full flex items-center justify-center gap-3 ">
								<input type="password" name="email" className={`w-full border border-[#ddd] rounded-lg p-2 text-start outline-0
									 ${dark_mode ? `bg-dark_main_bg_color border-border_color` : `bg-light_main_bg_color border-[#ddd]`}
									`} id="email" placeholder="كلمة السر " />
							</div>
						</div>
						<button type="submit" dir="rtl" className={`w-full flex items-center justify-center gap-3 rounded-lg p-2
						   border duration-500 hover:bg-[#fff] hover:text-[#2ca4ab] hover:border-[#2ca4ab] 
						  ${dark_mode ? `bg-dark_main_bg_color border-border_color text-[#aaa]` : `bg-main_hover_color text-[#fff]`}
						 
						 `}>
							<span dir="rtl" className='text-[20px] '>
								<FaSignInAlt />
							</span>
							<span className="Button_content__hmBjB"> تسجيل الدخول  </span>
						</button>

						<button type="submit" dir="rtl" className={`w-full flex items-center justify-center gap-3 rounded-lg p-2 
						bg-[#2ca4ab]  border duration-500 hover:bg-[#fff] hover:text-[#2ca4ab] hover:border-[#2ca4ab] 
						   ${dark_mode ? `bg-dark_main_bg_color border-border_color text-[#aaa]` : `bg-main_hover_color text-[#fff]`}
						`}>
							<span dir="rtl">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

									</path>
									<path d="m22 6-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									</path>
								</svg>
							</span>
							<span className="Button_content__hmBjB">ادخل عبر البريد الإلكتروني</span>
						</button>
					</form>
					<button type="submit" dir="rtl" 
					className={`w-full flex justify-center items-center gap-3  border rounded-lg p-2 duration-500
					 
					  ${dark_mode ? `border-border_color text-[#aaa] hover:text-main_hover_color hover:bg-[#fff]` : `hover:bg-[#aaa]  text-[#aaa] hover:text-[#000] `}
						`}>
						<Link to={`/loginChoose`} className='w-full flex justify-center items-center gap-3'>
							<span className="">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7Z" fill="currentColor">
									</path>
								</svg>
							</span>
							<span> خيارات تسجيل الدخول الأخرى</span>
						</Link>
					</button>
					<span className="w-full text-base text-[#666]">
						حماية خصوصيتك هي أولويتنا - من خلال التسجيل، فإنك توافق على
						<a href="/privacy" target="_blank" rel="noreferrer" className="underline decoration-2 duration-500 hover:text-[#2ca4ab]">
							&nbsp;سياسة الخصوصية
						</a>
						و
						<a href="/terms-and-conditions" target="_blank" rel="noreferrer" className="underline decoration-2 duration-500 hover:text-[#2ca4ab]">
							الشروط والأحكام &nbsp;
						</a>
						الخاصة بنا.
					</span>
				</div>
			</div>

		</div>
	)
}

export default Login
