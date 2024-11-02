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

export function searchMeal(x, y, z, a, searchTerm) {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
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

        //text wrap check
        if (data.meals[0].strInstructions < 1600) {
            y.innerText = data.meals[0].strInstructions;
            a.innerText = "";
        }
        else {
            console.log(data.meals[0].strInstructions.charAt(1600));
        }
        displayIngredients(data);
    })
    .catch(error => console.log('ERROR'));
}

export function randomMeal(x, y, z, a) {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
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

        //text wrap check
        if (data.meals[0].strInstructions < 1600) {
            y.innerText = data.meals[0].strInstructions;
            a.innerText = "";
        }
        else {
            console.log(data.meals[0].strInstructions.charAt(1600));
        }
        displayIngredients(data);
    })
    .catch(error => console.log('ERROR'));
}