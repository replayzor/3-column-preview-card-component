// - Font size: 15px

function App() {
	return (
		<main className="min-h-screen py-8 flex flex-col items-center justify-center  md:max-w-[1200px]">
			<article className="flex  flex-col w-3/4 md:flex-row md:w-[700px]">
				<div className="px-8 py-8 rounded-t-lg md:rounded-bl-lg md:rounded-tr-none bg-primary-brightOrange ">
					<img src="/images/icon-sedans.svg" alt="" />
					<h1 className="py-5 text-2xl uppercase text-neutral-transparentWhite font-bigShouldersDisplay">
						Sedans
					</h1>
					<p className="pb-5 text-sm font-light md:pb-16 text-neutral-transparentWhite font-lexendDeca">
						Choose a sedan for its affordability and excellent fuel economy.
						Ideal for cruising in the city or on your next road trip.
					</p>
					<button
						type="button"
						className="transition-all duration-300 px-7 py-2.5 tracking-wide rounded-full hover:ring hover:ring-white hover:text-white hover:bg-transparent text-primary-brightOrange bg-neutral-veryLightGray"
					>
						Learn More
					</button>
				</div>
				<div className="px-8 py-8 bg-primary-darkCyan ">
					<img src="/images/icon-suvs.svg" alt="" />
					<h1 className="py-5 text-2xl uppercase text-neutral-transparentWhite font-bigShouldersDisplay">
						SUVs
					</h1>
					<p className="pb-5 text-sm font-light md:pb-16 text-neutral-transparentWhite font-lexendDeca">
						Take an SUV for its spacious interior, power, and versatility.
						Perfect for your next family vacation and off-road adventures.
					</p>
					<button
						type="button"
						className="px-7 transition-all duration-300 py-2.5 tracking-wide rounded-full hover:ring hover:ring-white hover:text-white hover:bg-transparent text-primary-darkCyan bg-neutral-veryLightGray"
					>
						Learn More
					</button>
				</div>
				<div className="px-8 py-8 rounded-b-lg md:rounded-tr-lg md:rounded-bl-none bg-primary-veryDarkCyan">
					<img src="/images/icon-luxury.svg" alt="" />
					<h1 className="py-5 text-2xl uppercase text-neutral-transparentWhite font-bigShouldersDisplay">
						Luxury
					</h1>
					<p className="pb-5 text-sm font-light md:pb-16 text-neutral-transparentWhite font-lexendDeca">
						Cruise in the best car brands without the bloated prices. Enjoy the
						enhanced comfort of a luxury rental and arrive in style.
					</p>
					<button
						type="button"
						className="px-7 py-2.5 transition-all duration-300 tracking-wide rounded-full hover:ring hover:ring-white hover:text-white hover:bg-transparent text-primary-veryDarkCyan bg-neutral-veryLightGray"
					>
						Learn More
					</button>
				</div>
			</article>
		</main>
	);
}

export default App;
