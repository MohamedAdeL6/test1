import React from 'react'
import { useSelector } from 'react-redux';
import "./Section1SearchInput.css"
function Section1SearchInput() {

    const dark_mode = useSelector((state) => state.darkMode.value);

    return (
        <div className="Section1SearchInputs w-full flex justify-center items-center">
           
            <div className={`w-full flex items-center justify-between rounded-full bg-light_main_bg_color ${dark_mode ? `border-light_main_bg_color` : `border-main_hover_color`}`}>
                
                <div className="w-full flex relative px-5">

                    <div className="flex justify-center items-center">
                        <button
                            data-auto-flip-icon="true"
                            aria-label="البحث عن طريق الصوت"
                            className="flex justify-center items-center"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#22a5ad"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m23.5 21.466-7.01-7.01a9.066 9.066 0 0 0 1.736-5.343C18.226 4.088 14.138 0 9.113 0 4.088 0 0 4.088 0 9.113c0 5.025 4.088 9.113 9.113 9.113a9.066 9.066 0 0 0 5.343-1.735l7.01 7.009 2.034-2.034ZM9.113 15.348a6.236 6.236 0 1 1 6.235-6.235 6.243 6.243 0 0 1-6.235 6.235Z"></path>
                            </svg>
                        </button>

                    </div>

                    <div className="flex grow justify-center items-center">
                        <input type='search' className='w-full flex rounded-full py-5 px-3  outline-0 border-0' placeholder='ماذا تريد أن تقرأ ؟' />
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            data-auto-flip-icon="true"
                            aria-label="البحث عن طريق الصوت"
                            className="flex justify-center items-center rounded-full"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#22a5ad"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.304 14.946a3.573 3.573 0 0 0 3.558-3.566V3.566A3.573 3.573 0 0 0 12.304 0a3.573 3.573 0 0 0-3.56 3.566v7.814a3.573 3.573 0 0 0 3.56 3.566Zm6.286-3.915c0 3.566-3.024 6.062-6.286 6.062-3.263 0-6.287-2.496-6.287-6.062H4c0 4.041 3.203 7.429 7.117 7.964v4.255h2.373v-4.255c3.914-.594 7.117-3.923 7.117-7.964H18.59Z"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section1SearchInput
