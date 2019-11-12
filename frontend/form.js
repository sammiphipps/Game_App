const baseUrl = 'http://localhost:3000'
const params = new URLSearchParams(window.location.search)
const game_id = params.get("game_id")
const form = document.querySelector("form")
const gameName = document.querySelector('#name')
let gameCategory = document.querySelector('select')
const gameDescription = document.querySelector('#description')
const gameRules = document.querySelector('#basic_rules')
const gameImage = document.querySelector('#image_link')
const gameMinPlayer = document.querySelector('#min_player')
const gameMaxPlayer = document.querySelector('#max_player')
const formButton = document.querySelector('#formButton')

//send request to categories to load category select on the form 
fetch(`${baseUrl}/categories`)
    .then(response => response.json())
    .then(loadCategorySelect)
    .catch(error => console.log(error))

//using the variables pulled above change form based on it you are updating information or creating a new game
if (game_id != null){
    fetch(`${baseUrl}/games/${game_id}`)
        .then(response => response.json())
        .then(loadGameInfo)
        .catch(error => console.log(error))

    updateFormButton("Update", updateFetch)
} 
else {
    updateFormButton("Submit", postFetch)
}


function loadCategorySelect(categories){
    const gameCategory = document.querySelector('select')
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
    console.log("Category ID", gameInfo.category.id)
    gameCategory.value = gameInfo.category.id
    console.log(gameCategory.value)

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

function updateFormButton(content, fetchMethod){
    formButton.textContent = content
    console.log("Game Category", gameCategory)
    console.log("Game Category Value", gameCategory.value)
    formButton.addEventListener("click", fetchMethod())
}

function updateFetch(){
    //set options needed for put request 
    const options = {
        method: "PATCH",
        headers: {
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
    
    fetch(`${baseUrl}/games/${game_id}`, options)
}

function postFetch(){
    //set options needed for post request
    const options = {
        method: "POST",
        headers: {
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

    fetch(`${baseUrl}/games`, options)
}