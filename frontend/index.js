const mainContainer = document.querySelector('main');

fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(loadCategories)
    .catch(error => console.log(error))

function loadCategories(categories){
    categories.map(category => {
        const category_link = document.createElement('a')
        category_link.className = category.name.toLowerCase()
        category_link.innerHTML = `<h2>${category.name}</h2>`
        category_link.href = "#"
        mainContainer.appendChild(category_link)
    })
}