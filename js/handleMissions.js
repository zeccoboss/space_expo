const getMissions = async () => {
	try {
		const data = await fetch("json/missions.json");
		return await data.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};

const renderMissions = async () => {
	const missionsWrapper = document.getElementById("mission-content");

	const missions = await getMissions();

	missionsWrapper.innerHTML += missions
		.map((mission, index) => {
			return `
			<li class="mission_card" id="mission-${`${mission.name}-${
				index + mission.id
			}`}">
				<figure class="mission_img_wrapper">
					<img
						src="${mission.image}"
						alt="${mission.name}"
						srcset=""
						id="mission-${mission.name}"
						class="mission_img"
						height="150"
						width="100"
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
			</li>
		`;
		})
		.join("");
};

export { renderMissions };
