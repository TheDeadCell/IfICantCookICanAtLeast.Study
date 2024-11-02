function searchMeal(searchTerm) {
    const apiUrl = "www.themealdb.com/api/json/v1/1/search.php?s=";
    fetch(apiUrl + searchTerm)
    .then(res => {
        if (!res.ok) {
            console.log('HTTP error! Status: ${response.status}')
        }
    })
    .then(res => {
        return res.json()
    })
    .then(res => console.log(res.json()))
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}