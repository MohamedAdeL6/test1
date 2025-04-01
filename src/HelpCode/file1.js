

import {
    MdOutlineSubdirectoryArrowLeft,
    MdOutlineSubdirectoryArrowRight,
} from "react-icons/md";
import "./BrowseQuranPages.css"
import { useEffect, useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useSelector } from 'react-redux';

function BrowseQuranPages() {

    const BASE_URL = "https://cdn.qurango.net/Sura2/files/mobile/";
    const dark_mode = useSelector((state) => state.darkMode.value);
    const soundQuran = useSelector((state) => state.soundQuran.value)
    const PartQuran = [
        { "1": "2" }, { "2": "23" }, { "3": "43" }, { "4": "63" }, { "5": "83" }, { "6": "103" }, { "7": "122" },
        { "8": "143" }, { "9": "163" }, { "10": "183" }, { "11": "202" }, { "12": "223" }, { "13": "243" },
        { "14": "263" }, { "15": "283" }, { "16": "303" }, { "17": "323" }, { "18": "343" }, { "19": "363" },
        { "20": "383" }, { "21": "403" }, { "22": "423" }, { "23": "443" }, { "24": "463" }, { "25": "483" },
        { "26": "503" }, { "27": "523" }, { "28": "543" }, { "29": "563" }, { "30": "583" },
    ]

    const [currentNumberPage, setCurrentNumberPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    // -------------------------------------------------------------
    const [selectedPart, setSelectedPart] = useState("");
    // handleChange function
    const handleChange = (event) => {
        const partNumber = event.target.value;
        setSelectedPart(partNumber);
        // Find the corresponding page number
        const selectedObj = PartQuran.find((el) => Object.keys(el)[0] === partNumber);

        if (selectedObj) {
            const pageNumber = parseInt(Object.values(selectedObj)[0]); // Convert to number

            // Determine next and back page
            let nextPage = pageNumber === 2 ? 3 : pageNumber % 2 === 0 ? pageNumber : pageNumber - 1;
            let backPage = pageNumber === 2 ? 2 : pageNumber % 2 === 0 ? pageNumber + 1 : pageNumber;

            // Update image sources
            document.getElementById('nextImage').src = `https://cdn.qurango.net/Sura2/files/mobile/${nextPage}.jpg`;
            document.getElementById('backImage').src = `https://cdn.qurango.net/Sura2/files/mobile/${backPage}.jpg`;

        }
    };

    // -------------------------------------------------------------
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

    // Update screen size on resize
    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1280);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Function to update pages based on navigation
    const updatePage = (direction, isLarge) => {
        let newPage = currentPage;
        console.log(currentNumberPage);

        if (direction === "next") {
            newPage = newPage >= 606 ? 1 : newPage <= 0 ? 1 : isLarge ? newPage + 2 : newPage + 1;
        } else if (direction === "back") {
            newPage = newPage <= 1 ? 1 : isLarge ? newPage - 2 : newPage - 1;
        }
        setCurrentPage(newPage);

    };



    return (

        <div className={`w-full flex flex-wrap justify-center items-center gap-2`}>

            <header className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color` : `bg-[#fff]`} rounded-lg`}>

                <div className={`w-full py-2 px-2 sm:px-3 flex  sm:flex-nowrap justify-between items-center rounded-lg gap-4`}>

                    <div className={`w-full  flex justify-start items-center shadow rounded-md`}>
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

                    <div className={`w-full flex justify-center items-center shadow rounded-md`}>
                        <select
                            id="quranPart"
                            value={selectedPart}
                            onChange={handleChange}
                            className={`w-full bg-[#fafafa] outline-none p-1 rounded-md appearance-none`}
                        >
                            <option value="">اختر الجزء</option>
                            {PartQuran.map((part, index) => {
                                const partNumber = Object.keys(part)[0];
                                return <option key={index} value={partNumber}>الجزء {partNumber}</option>;
                            })}
                        </select>

                    </div>

                    <div className={`flex justify-center items-center p-2 bg-[#9fb3b3] rounded-lg cursor-pointer`}>
                        <MdOutlineZoomOutMap className={`text-white `} />
                    </div>

                </div>

            </header>

            <div className={`w-full flex justify-center items-center px-2`}>
                <div className={`w-full sm:w-1/2 flex justify-between items-center border border-[#cecece]  rounded-lg`}
                >
                    <button
                        className={`backBtn flex justify-between items-center gap-2 hover:text-[#fff] hover:bg-[#22a5ad] p-1 sm:px-4 rounded-md`}
                        onClick={() => updatePage("back", isLargeScreen)}
                    >
                        <span className={``}> <MdOutlineSubdirectoryArrowRight /> </span>
                        <span className={``}> السابق </span>
                    </button>

                    <button
                        className={`nextBtn flex justify-between items-center gap-2 hover:text-[#fff] hover:bg-[#22a5ad] p-1 sm:px-4 rounded-md`}
                        onClick={() => updatePage("next", isLargeScreen)}
                    >
                        <span> التالي </span>
                        <span> <MdOutlineSubdirectoryArrowLeft /> </span>
                    </button>
                </div>

            </div>

            <div className={`w-full justify-center items-center rounded-md border-[10px] border-main_hover_color `}>

                <div className='pageContainer w-full flex flex-nowrap justify-center items-center rounded-md   lg:h-[650px] xl:h-[650px]'>

                    <div className={`w-full h-full flex rounded-md`}>
                        <img
                            src={`${BASE_URL}${currentPage <= 1 ? 1 : currentPage - 1}.jpg`}
                            alt='QuranPages'
                            className={`w-full inline-block `}
                            id={`nextImage`}
                        />
                    </div>

                    <div className={`w-full h-full hidden xl:flex rounded-md`}>
                        <img
                            src={`${BASE_URL}${currentPage}.jpg`}
                            alt='QuranPages'
                            className={`w-full inline-block `}
                            id={`backImage`}
                        />
                    </div>

                </div>

            </div>

        </div>

    )

}

export default BrowseQuranPages;

