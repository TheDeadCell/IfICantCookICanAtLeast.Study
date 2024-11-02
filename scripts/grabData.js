export function searchMeal(x, y, z, searchTerm) {
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
        y.innerText = data.meals[0].strInstructions;
        z.src = data.meals[0].strMealThumb;
    })
    .catch(error => console.log('ERROR'));
}

export function randomMeal(x, y, z) {
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
        x.innerText = data.meals[0].strMeal;
        y.innerText = data.meals[0].strInstructions;
        z.src = data.meals[0].strMealThumb;
    })
    .catch(error => console.log('ERROR'));
}