const params = new URLSearchParams(window.location.search)
const game_id = params.get("game_id")
const form = document.querySelector("form")
const categorySelect = document.querySelector('select')

fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(loadCategorySelect)
    .catch(error => console.log(error))

if (game_id != null){
    fetch(`http://localhost:3000/games/${game_id}`)
        .then(response => response.json())
        .then(loadGameInfo)
        .catch(error => console.log(error))
} 
else {
}

function loadCategorySelect(categories){
    categories.map(
        category => {
            const categoryOption = document.createElement('option')
            categoryOption.textContent = category.name
            categorySelect.appendChild(categoryOption)
        }
    )
}

function loadGameInfo(gameInfo){
    //load Name
    const gameName = document.getElementsByName('name')[0]
    gameName.value = gameInfo.name

    //load category
    categorySelect.value = gameInfo.category.name

    //load description 
    const gameDescription = document.getElementsByName('description')[0]
    gameDescription.value = gameInfo.description

    //load rules 
    const gameRules = document.getElementsByName('basic_rules')[0]
    gameRules.value = gameInfo.basic_rules

    //load image link
    const gameImage = document.getElementsByName('image_link')[0]
    gameImage.value = gameInfo.image_link

    //load min amount 
    const gameMinPlayer = document.getElementsByName('min_player')[0]
    gameMinPlayer.value = gameInfo.min_player

    //load max amount 
    const gameMaxPlayer = document.getElementsByName('max_player')[0]
    gameMaxPlayer.value = gameInfo.max_player

}