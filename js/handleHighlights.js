const getHighlights = async () => {
	try {
		const data = await fetch("json/highlights.json");
		return await data.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};

const renderHighlights = async () => {
	const hightlightsWrapper = document.getElementById("highlights-content");

	const groups = await getHighlights(); // Array of facts fetched from json file
	const group = () => groups[Math.floor(Math.random() * groups.length)]; // Get a single random highlight group every page load | reload

	hightlightsWrapper.innerHTML += group()
		.map((hightlight, index) => {
			return `
				<li class="hightlight_card" id="hightlight-${`${hightlight.name}-${index}`}">
					<h4 class="hightlight_title">Title: ${hightlight.title}</h4>
					<small class="hightlight_content">Conent: ${hightlight.text}</small>
				</li>
			`;
		})
		.join("");
};

export { renderHighlights };
