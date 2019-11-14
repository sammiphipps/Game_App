const backendUrl = 'http://localhost:3000'
const params = new URLSearchParams(window.location.search)
const categoryId = params.get('category_id')
const mainContainer = document.querySelector('main')

fetch(`${backendUrl}/categories/${categoryId}`)
    .then(response => response.json())
    .then(loadPage)
    .catch(error => console.log(error))

function loadPage(category){
    loadHeader(category.name)
    loadGames(category.games)
    addCreateGameLink()
}

function loadHeader(categoryName){
    const header = document.querySelector('header')
    const pageTitle = document.createElement('h1')
    const homePageButton = document.createElement('a')
    homePageButton.innerText = "GS"
    homePageButton.href = "/home"
    pageTitle.textContent = categoryName + " Games"
    header.append(pageTitle, homePageButton)
}

function loadGames(games){
    games.map(game => {

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

        //game title
        const gameTitle = document.createElement('h2')
        gameTitle.textContent = game.name

        //game description
        const gameDescription = document.createElement('p')
        gameDescription.textContent = `Description: ${game.description}`

        //game rules 
        const gameRules = document.createElement('p')
        gameRules.textContent = `Rules: ${game.basic_rules}`

        //create container for buttons 
        const buttonContainer = document.createElement('div')
        buttonContainer.className = "buttonContainer"

        //update button that links to the form
        const updateLink = document.createElement('a')
        updateLink.innerHTML = `<button>Update</button>`
        updateLink.href = `form.html?game_id=${game.id}`

        //delete button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", (event) => {
            deleteFetch(game.id, game.category_id)
        })

        //append both update and delete to buttonContainer
        buttonContainer.append(updateLink, deleteButton)
        
        //append everything to the container
        gameContainer.append(gameFigure, gameTitle, gameDescription, gameRules, buttonContainer)

    })
}

function addCreateGameLink(){
    const formLink = document.createElement('a')
    formLink.innerHTML = `<button>Create Another Game</button>`
    formLink.href = `form.html`
    mainContainer.append(formLink)
}

function deleteFetch(gameId, previousCategoryId){
    fetch(`${backendUrl}/games/${gameId}`, { method: "DELETE" })
        .then(window.location.replace(`http://localhost:3001/show.html?category_id=${previousCategoryId}`))
}