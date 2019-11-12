const params = new URLSearchParams(window.location.search)
const category_id = params.get('category_id')
const mainContainer = document.querySelector('main')
BASE_URL = 'http://localhost:3000'

fetch(`${BASE_URL}/categories/${category_id}`)
    .then(response => response.json())
    .then(loadPage)
    .catch(error => console.log(error))

function loadPage(category){
    loadHeader(category.name)
    loadGames(category.games)
}

function loadHeader(category_name){
    const header = document.querySelector('header')
    const pageTitle = document.createElement('h1')
    pageTitle.textContent = category_name + " Games"
    header.appendChild(pageTitle)
}

function loadGames(games){
    games.map(game => {
        console.log(game)
        //create a div container
        const gameContainer = document.createElement('div')
        gameContainer.className = "gameContainer"
        mainContainer.appendChild(gameContainer)
        //create figure container to hold image and number of players 
        const gameFigure = document.createElement('figure')
        const gameImage = document.createElement('img')
        gameImage.alt = game.name
        gameImage.src = game.image_link
        
        const gameImageCaption = document.createElement('figcaption')
        gameImageCaption.textContent = `Number of Players: ${game.min_player}`
        if (game.max_player == null)
            gameImageCaption.textContent += "+"
        else 
            gameImageCaption.textContent += ` - ${game.max_player}` 
        
        gameFigure.append(gameImage, gameImageCaption)
        //h2 for title 
        const gameTitle = document.createElement('h2')
        gameTitle.textContent = game.name
        //p for description
        const gameDescription = document.createElement('p')
        gameDescription.textContent = `Description: ${game.description}`
        //p for rules 
        const gameRules = document.createElement('p')
        gameRules.textContent = `Rules: ${game.basic_rules}`
        //button link for update button to form 
        const updateLink = document.createElement('a')
        updateLink.innerHTML = `<button>Update</button>`
        updateLink.href = "#"
        //delete link
        const deleteForm = document.createElement('form')
        // deleteForm.method = "DELETE"
        // deleteForm.action = `${BASE_URL}/games/${game.id}`

        const deleteSubmit = document.createElement('button')
        deleteSubmit.textContent = "Delete"
        deleteForm.appendChild(deleteSubmit)
        //append everything to the container
        gameContainer.append(gameFigure, gameTitle, gameDescription, gameRules, updateLink, deleteForm)
    })
}