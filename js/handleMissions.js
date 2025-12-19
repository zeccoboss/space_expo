const getMissions = async (path) => {
	try {
		const data = await fetch(path);
		return await data.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};

const path = "../missions.json";

const renderMissions = async () => {
	const missionsWrapper = document.getElementById("mission-content");

	const missions = await getMissions(path);

	missionsWrapper.innerHTML += missions
		.map((mission, index) => {
			return `
			<div class="mission_card" id="mission-${`${mission.name}-${
				index + mission.id
			}`}">
				<figure class="mission_img_wrapper">
					<img
						src="${mission.image}"
						alt="${mission.fact}"
						srcset=""
						id="mission-${mission.name}"
						class="mission_img"
						height="250"
						width="200"
						loading="lazy"
					/>
					<figcaption class="mission_caption">
						${mission.type}
					</figcaption>
				</figure>
				<h3 class="mission_name">Name: ${mission.name}</h3>
				<p class="mission_year">Year: ${mission.year}</p>
				<p class="mission_agency">Agency: ${mission.agency}</p>
				<p class="mission_type">Type: ${mission.type}</p>
				<p class="mission_description">Description: ${mission.description}</p>
			</div>
		`;
		})
		.join("");
};

export { renderMissions };
