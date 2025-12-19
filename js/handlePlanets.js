const getPlanets = async (path) => {
	try {
		const data = await fetch("json/planets.json");
		return await data.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};

const renderPlanets = async (path) => {
	const planetSlides = document.getElementById("planet-content");

	const planets = await getPlanets(path);

	planetSlides.innerHTML += planets
		.map((planet, index) => {
			return `
			<div class="planet_card" id="planet-${`${planet.name}-${index}`}">
				<figure class="planet_img_wrapper">
					<img
						src="${planet.image}"
						alt="${planet.fact}"
						srcset=""
						id="planet-${planet.name}"
						class="planet_img"
						height="250"
						width="200"
						loading="lazy"
					/>
					<figcaption class="planet_caption">${planet.fact}</figcaption>
				</figure>
				<h3 class="planet_name">${planet.name}</h3>
				<small class="planet_fact">${planet.fact}</small>
			</div>
		`;
		})
		.join("");
};

export { renderPlanets };
