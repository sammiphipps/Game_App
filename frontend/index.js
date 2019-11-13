const mainContainer = document.querySelector('main');
const gameOfDayBox = document.createElement('div')

fetch('http://localhost:3000/categories')
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

fetch('http://localhost:3000/games')
    .then(response => response.json())
    .then(FeaturedGame)
    .catch(error => console.log("oopsie " + error))

    function FeaturedGame(games){
        let gameOfDay = games[Math.floor(Math.random() * games.length)]
        const gameOfDayImg = document.createElement('img')
        const gameOfDayName = document.createElement('h2')
        const gameOfDayBlurb = document.createElement('p')

        gameOfDayImg.alt = gameOfDay.name
        gameOfDayImg.src = gameOfDay.image_link
        gameOfDayName.textContent = `A Random Game for You: ${gameOfDay.name}`
        gameOfDayBlurb.textContent = gameOfDay.description
        gameOfDayBox.append(gameOfDayImg, gameOfDayName, gameOfDayBlurb)
        mainContainer.append(gameOfDayBox)
    }


    
  
