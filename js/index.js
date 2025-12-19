import { renderHighlights } from "./handleHighlights.js";
import { renderMissions } from "./handleMissions.js";
import { renderPlanets } from "./handlePlanets.js";
import { renderRandomFacts } from "./handleRandomFacts.js";

console.log("Space Exploration...");

renderPlanets(); // Render Planets
renderRandomFacts(); // Render random facts
renderMissions(); // Render missions
renderHighlights();
