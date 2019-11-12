const baseUrl = 'http://localhost:3000'
const params = new URLSearchParams(window.location.search)
const game_id = params.get("game_id")
const form = document.querySelector("form")
const gameName = document.querySelector('#name')
const gameCategory = document.querySelector('select')
const gameDescription = document.querySelector('#description')
const gameRules = document.querySelector('#basic_rules')
const gameImage = document.querySelector('#image_link')
const gameMinPlayer = document.querySelector('#min_player')
const gameMaxPlayer = document.querySelector('#max_player')
const formButton = document.querySelector('#formButton')

fetch(`${baseUrl}/categories`)
.then(response => response.json())
    .then(loadCategorySelect)
    .catch(error => console.log(error))

if (game_id != null){
    fetch(`${baseUrl}/games/${game_id}`)
    .then(response => response.json())
        .then(loadGameInfo)
        .catch(error => console.log(error))

    addUpdateButton("Update")
} 
else {
}

function loadCategorySelect(categories){
    categories.map(
        category => {
            const categoryOption = document.createElement('option')
            categoryOption.value = category.id
            categoryOption.textContent = category.name
            gameCategory.appendChild(categoryOption)
        }
    )
}

function loadGameInfo(gameInfo){
    //load Name
    gameName.value = gameInfo.name

    //load category
    // gameCategory.value = gameInfo.category.name
    gameCategory.value = gameInfo.category.id

    //load description 
    gameDescription.value = gameInfo.description

    //load rules 
    gameRules.value = gameInfo.basic_rules

    //load image link
    gameImage.value = gameInfo.image_link

    //load min amount 
    gameMinPlayer.value = gameInfo.min_player

    //load max amount 
    gameMaxPlayer.value = gameInfo.max_player
}

function addUpdateButton(content){
    formButton.textContent = content
    formButton.addEventListener("click")
}

function updateFetch(){
    const options = {
        method: "PUT",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: gameName.value,
            category_id: gameCategory.value,
            description: gameDescription.value, 
            basic_rules: gameRules.value, 
            image_link: gameImage.value, 
            min_player: gameMinPlayer.value, 
            max_player: gameMaxPlayer.value
        })
    }
    fetch(`${base_url}/games/${game_id}`, options)
}