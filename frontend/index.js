const backendUrl = 'http://localhost:3000'
const mainContainer = document.querySelector('main');
const gameOfDayBox = document.createElement('div')
const navBar = document.createElement('div')
const buttonBar = document.createElement('div')
const buttonInstructions = document.querySelector('h3')
const homePageInfoAndGameBox = document.querySelector('div')
navBar.className = "navBar"
gameOfDayBox.className = "gameBox"

fetch(`${backendUrl}/categories`)
    .then(response => response.json())
    .then(loadCategories)
    .catch(error => console.log(error))

function loadCategories(categories){
    categories.map(category => {
        const link = document.createElement('a')
        const button = document.createElement('button')
        const header = document.querySelector('header')
     

        link.href= `show.html?category_id=${category.id}`
        button.textContent = category.name
        button.className = category.name.toLowerCase()

        header.appendChild(navBar)
        navBar.appendChild(buttonBar)
        buttonBar.append(link)
        link.appendChild(button)

    })
    navBar.appendChild(buttonInstructions)
}

fetch(`${backendUrl}/games`)
    .then(response => response.json())
    .then(FeaturedGame)
    .catch(error => console.log(error))

    function FeaturedGame(games){
        let gameOfDay = games[Math.floor(Math.random() * games.length)]
        const gameOfDayImg = document.createElement('img')
        const randomGame = document.createElement('h2')
        const gameOfDayName = document.createElement('h3')
        const gameOfDayBlurb = document.createElement('p')
        const a = document.createElement('a')

        randomGame.innerText = "Checkout this Game:"
        gameOfDayImg.alt = gameOfDay.name
        gameOfDayImg.src = gameOfDay.image_link
        gameOfDayName.textContent = `${gameOfDay.name}`
        gameOfDayBlurb.textContent = gameOfDay.description
        a.innerText = `<<Click here to see more games like ${gameOfDay.name} >>`
        a.href = `show.html?category_id=${gameOfDay.category.id}`
        gameOfDayBox.append(randomGame,gameOfDayName, gameOfDayImg, gameOfDayBlurb, a )
        homePageInfoAndGameBox.prepend(gameOfDayBox)
    }



    
  
