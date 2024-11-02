function searchMeal(searchTerm) {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    fetch(apiUrl + searchTerm)
    .then(res => {
        if (!res.ok) {
            console.log(`HTTP error! Status: ${res.status}`)
        }
        console.log(res.json())

    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}

function randomMeal() {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(apiUrl)
    .then(res => {
        if (!res.ok) {
            console.log(`HTTP error! Status: ${res.status}`)
        }
        console.log(res.json())

    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}