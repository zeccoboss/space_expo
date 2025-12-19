import { renderMissions } from "./handleMissions.js";
import { renderPlanets } from "./handlePlanets.js";
import { renderRandomFacts } from "./handleRandomFacts.js";

console.log("Space Exploration...");

renderPlanets("json/planets.json"); // Render Planets
renderRandomFacts("json/missions.json"); // Render random facts
renderMissions("json/missions.json"); // Render missions
