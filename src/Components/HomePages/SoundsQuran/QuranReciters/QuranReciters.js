import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function QuranReciters() {

	// -------------------------- dark mode  -----------------------
	const dark_mode = useSelector((state) => state.darkMode.value);
	const reciters = useSelector((state) => state.quranReciters.data);
	return (
		<div className={`w-full flex justify-center items-center ${dark_mode ? `bg-dark_main_bg_color` : `bg-white`}`}>
			<div className={`container w-full flex justify-center items-center ${dark_mode ? `py-[8px]` : `py-[7px]`}`}>
				<div className={`w-full flex flex-wrap justify-center items-center gap-5 `}>

					<div className={`w-full flex justify-center items-center py-3 rounded-lg text-white ${dark_mode ? `bg-dark_main_bg_color border border-border_color` : `bg-main_hover_color `}`}>
						<h1 className={`text-3xl font-bold p-4 `}> قـــــراء القـــرآن </h1>
					</div>

					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
						{reciters.map((reciter) => (
							<Link
								key={reciter.id}
								to={`/SoundsuranSoura/${reciter.name}-${reciter.style}`}
								className="block bg-slate-100 rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition duration-300"
							>
								<div className="relative w-full h-56">
									<img
										src={reciter.image}
										alt={reciter.name}
										className="w-full h-full object-cover "
									/>
								</div>
								<div className="p-4 text-center">
									<h3 className="text-lg font-semibold text-gray-800">{reciter.name}</h3>
									<p className="text-lg text-gray-600">{
										reciter.style === "Murattal" ? `مرتــــل` :  reciter.style === "Kids repeat" ? `المصحف المعلم`: `مجــــود`
									}</p>
								</div>
							</Link>
						))}
					</div>

				</div>
			</div>
		</div>
	)
}
export default QuranReciters



