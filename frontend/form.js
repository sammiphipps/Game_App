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
const updateButton = document.querySelector('#updateButton')
const createButton = document.querySelector("#createButton")

//send request to categories to load category select on the form 
fetch(`${baseUrl}/categories`)
    .then(response => response.json())
    .then(loadCategorySelect)
    .then(addEventListeners)
    .then(loadFormBasedOnGameId)
    .catch(error => console.log(error))
    
//using the variables pulled above change form based on it you are updating information or creating a new game
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

function addEventListeners(){
    updateButton.addEventListener("click", updateFetch)
    createButton.addEventListener("click", postFetch)
}

function loadFormBasedOnGameId(){
    if (game_id != null){
        showUpdateButton()

        fetch(`${baseUrl}/games/${game_id}`)
            .then(response => response.json())
            .then(loadGameInfo)
            .catch(error => console.log(error))
    } 
    else {
        showCreateButton()
        selectPromptOption()
    }
}

function loadGameInfo(gameInfo){
    gameName.value = gameInfo.name
    gameCategory.value = gameInfo.category.id
    gameDescription.value = gameInfo.description
    gameRules.value = gameInfo.basic_rules
    gameImage.value = gameInfo.image_link
    gameMinPlayer.value = gameInfo.min_player
    gameMaxPlayer.value = gameInfo.max_player
}

function showUpdateButton(){
    updateButton.style.display = "inline-block"
    createButton.style.display = "none"
}

function showCreateButton(){
    createButton.style.display = "inline-block"
    updateButton.style.display = "none"
}

function selectPromptOption(){
    const promptOption = gameCategory.querySelector('option')
    promptOption.selected = true
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
    
    // console.log(options)
    fetch(`${baseUrl}/games/${game_id}`, options)
        .then(window.location.replace(`http://localhost:3001/show.html?category_id=${gameCategory.value}`))
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
        .then(window.location.replace(`http://localhost:3001/show.html?category_id=${gameCategory.value}`))
}