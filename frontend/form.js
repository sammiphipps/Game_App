const params = new URLSearchParams(window.location.search)
const game_id = params.get("game_id")
const form = document.querySelector("form")

fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(loadCategorySelect)
    .catch(error => console.log(error))

if (game_id != null){
    fetch(`http://localhost:3000/games/${game_id}`)
        .then(response => response.json())
        .then(loadGameInfo)
        .catch(error => console.log(error))
    form.method="PUT"
} 
else {
    form.method = "POST"
}

function loadCategorySelect(categories){
    const categorySelect = document.querySelector('select')
    categories.map(
        category => {
            const categoryOption = document.createElement('option')
            categoryOption.textContent = category.name
            categorySelect.appendChild(categoryOption)
        }
    )
}

function loadGameInfo(gameInfo){
console.log(gameInfo)
}