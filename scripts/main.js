import {randomMeal} from "./grabData.js";

document.getElementById("randomButton").addEventListener("click", randomRecipe); 

function randomRecipe() {
    let nameSection = document.getElementById("recipeName");
    let instructionsSection = document.getElementById("recipeInstructions");
    randomMeal(nameSection, instructionsSection);
}
