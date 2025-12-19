const getRandomFacts = async (path) => {
	try {
		const data = await fetch(path);
		return await data.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};

const renderRandomFacts = async (path) => {
	const factParagraph = document.getElementById("fact-paragraph");
	const generateBtn = document.getElementById("generate-fact-btn");

	const facts = await getRandomFacts(path); // Array of facts fetched from json file
	const fact = () => facts[Math.floor(Math.random() * facts.length)]; // Get a single random fact anytime this function is called

	generateBtn.addEventListener("click", (_e) => {
		factParagraph.innerHTML = ""; // Clear the p tag any time te button is clicked

		// Initialize the index to - 0
		let index = 0;

		const factArray = Array.from(fact());

		const timer_id = setInterval(() => {
			if (index !== factArray.length) {
				factParagraph.innerHTML += factArray[index];
				index++;
			} else {
				index = 0;
				clearInterval(timer_id);
			}
		}, 25);
	});
};

export { renderRandomFacts };
