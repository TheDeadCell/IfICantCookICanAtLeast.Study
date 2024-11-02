import {randomMeal} from "./grabData.js";
import {searchMeal} from "./grabData.js";

//random recipe on open
randomRecipe();

document.getElementById("randomButton").addEventListener("click", randomRecipe); 
document.getElementById("searchField").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        searchRecipe(e);
    }
});

function randomRecipe() {
    let nameSection = document.getElementById("recipeName");
    let instructionsSection = document.getElementById("recipeInstructions");
    let recipeImage = document.getElementById("recipeImage");
    randomMeal(nameSection, instructionsSection, recipeImage);
}

function searchRecipe(e) {
    let searchTerm = e.target.value
    let nameSection = document.getElementById("recipeName");
    let recipeImage = document.getElementById("recipeImage");
    let instructionsSection = document.getElementById("recipeInstructions");
    searchMeal(nameSection, instructionsSection, recipeImage, searchTerm);
}