import { renderMissions } from "./service/handleMissions.js";
import { renderPlanets } from "./service/handlePlanets.js";
import { renderRandomFacts } from "./service/handleRandomFacts.js";

console.log("Space Exploration...");

renderPlanets(); // Render Planets
renderRandomFacts(); // Render random facts
renderMissions(); // Render missions
