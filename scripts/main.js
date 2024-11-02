import {randomMeal} from "./grabData.js";

document.getElementById("randomButton").addEventListener("click", randomRecipe); 

function randomRecipe() {
    console.log(randomMeal());
}
