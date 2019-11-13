const backendUrl = 'http://localhost:3000'
const mainContainer = document.querySelector('main');
const gameOfDayBox = document.createElement('div')

fetch(`${backendUrl}/categories`)
    .then(response => response.json())
    .then(loadCategories)
    .catch(error => console.log(error))

function loadCategories(categories){
    categories.map(category => {
        const link = document.createElement('a')
        const button = document.createElement('button')

        link.href= `show.html?category_id=${category.id}`
        button.textContent = category.name
        button.className = category.name.toLowerCase()

        button.style.fontSize = "24px"
        button.style.borderRadius = "25px"
        button.style.fontFamily = "'KoHo', sans-serif"
        button.style.padding = "0.2rem 1.5rem"
        mainContainer.appendChild(link)
        link.appendChild(button)

    })
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

        randomGame.innerText = "Does this Game Spark Joy?"
        gameOfDayImg.alt = gameOfDay.name
        gameOfDayImg.src = gameOfDay.image_link
        gameOfDayName.textContent = `${gameOfDay.name}`
        gameOfDayBlurb.textContent = gameOfDay.description
        a.innerText = ` Click here to see more games like ${gameOfDay.name}`
        a.href = `show.html?category_id=${gameOfDay.category.id}`
        gameOfDayBox.append(randomGame,gameOfDayName, gameOfDayImg, gameOfDayBlurb, a )
        mainContainer.append(gameOfDayBox)
    }



    
  
