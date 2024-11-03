function displayIngredients(data) {
    const meal = data.meals[0];
    const ingredientList = document.getElementById("ingredientList");
    ingredientList.innerText = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = `${measure} ${ingredient}`;
            ingredientList.appendChild(listItem);
        }
    }
}

function displayRecipeOptions(data) {
    const recipesList = document.getElementById("recipesList");
    recipesList.innerText = '';
    otherResultsHeader.innerText = '';
    if (data.meals.length > 1) {
        const otherResultsHeader = document.getElementById("otherResultsHeader");
        otherResultsHeader.innerText = 'Other Matching Recipes'
    }
    for (let i = 1; i < data.meals.length; i++) {
        let meal = data.meals[i];
        let mealName = meal.strMeal;
        const listItem = document.createElement("li");
        listItem.textContent = `${mealName}`;
        recipesList.appendChild(listItem);
    }
}

export function searchMeal(x, y, z, a, searchTerm) {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    let mainBox = document.getElementById("mainSection1");

    mainBox.style.height = "97vh";

    fetch(apiUrl + searchTerm)
    .then(res => {
        if (!res.ok) {
            console.log(`HTTP error! Status: ${res.status}`);
        }
        return(res.json());
    })
    .then(data => {
        console.log(data);
        x.innerText = data.meals[0].strMeal;
        z.src = data.meals[0].strMealThumb;
        y.innerText = data.meals[0].strInstructions;

        if (data.meals[0].strInstructions.length > 1600) {
            mainBox.style.height = "100%";
        }
    
        displayIngredients(data);
        displayRecipeOptions(data);
    })
    .catch(error => console.log('ERROR'));
}

export function randomMeal(x, y, z, a) {
    let mainBox = document.getElementById("mainSection1");

    const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    const otherResultsHeader = document.getElementById("otherResultsHeader");
    otherResultsHeader.innerText = '';
    const recipesList = document.getElementById("recipesList");
    recipesList.innerText = '';

    mainBox.style.height = "97vh";

    fetch(apiUrl)
    .then(res => {
        if (!res.ok) {
            console.log(`HTTP error! Status: ${res.status}`);
        }
        return(res.json());
    })
    .then(data => {
        console.log(data);
        console.log(data.meals[0].strInstructions.length);
        x.innerText = data.meals[0].strMeal;
        z.src = data.meals[0].strMealThumb;
        y.innerText = data.meals[0].strInstructions;

        //Make text box larger if need be:
        if (data.meals[0].strInstructions.length > 1600) {
            mainBox.style.height = "100%";
        }
        displayIngredients(data);
    })
    .catch(error => console.log('ERROR'));
}