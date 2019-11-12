const mainContainer = document.querySelector('main');

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