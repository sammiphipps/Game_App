# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.destroy_all
Category.destroy_all

card = Category.create(name: "Card")
board = Category.create(name: "Board")
video = Category.create(name: "Video")
drinking = Category.create(name: "Drinking")
other = Category.create(name: "Other")

Game.create(
    name: "Uno",
    category: card,
    description: "An American shedding-type card game that is played with a specially printed deck",
    basic_rules: "Match either by the number, color or symbol to the card on top of the pile",
    image_link: "https://ubistatic19-a.akamaihd.net/ubicomstatic/en-US/global/buy-now/uno-buy-edition_thumb-632x356_Mobile_264816.png",
    min_player: 2,
    max_player: 10
)

Game.create(
    name: "Go Fish",
    category: card, 
    description: "A card game based on matching pairs",
    basic_rules: "Ask another player for a card on your turn. If they don't have it, draw another card from the pile",
    image_link: "https://images-na.ssl-images-amazon.com/images/I/71BeX%2BOQkuL.png",
    min_player: 2, 
    max_player: 5
)

Game.create(
    name: "Monopoly",
    category: board,
    description: "Players move around the game board: buying and trading properties and developing them with houses and hotels",
    basic_rules: "Players take turns rolling dice to move around the board. If the place is owned, player pays rent. Otherwise, player may purchase property. ",
    image_link: "https://prodimage.images-bn.com/pimages/0630509512638_p1_v2_s550x406.jpg",
    min_player: 2,
    max_player: 6
)

Game.create(
    name: "Settlers of Catan",
    category: board, 
    description: "Players assume the roles of settlers, attempting to build and develop holdings",
    basic_rules: "After rolling dice to begin the turn, players collect resources as determined by dice roll, with the goal of building roads,settlements, and keeps with said resources in order to gain Victory Points.",
    image_link: "https://www.catan.com/files/pageimages/dye_catan_150407_0564.jpg",
    min_player: 2,
    max_player: 4
)