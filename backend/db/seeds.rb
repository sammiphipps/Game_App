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

Game.create(
    name: "Quarters",
    category: drinking,
    description: "A drinking game involving bouncing quarters into cups",
    basic_rules: "Players take turns trying to bounce a quarter off a table into a cup, passing the cup to the next player once they do. Should the other cup in play catch up to them, them must drink.",
    image_link: "https://usercontent2.hubstatic.com/13194651_f520.jpg",
    min_player: 3,
    # max_player: null    
)

Game.create(
    name: "Beer Pong",
    category: drinking,
    description: "Players throw a ping pong ball into cups (often of beer).",
    basic_rules: "Teams take turns throwing or bouncing ping pong balls across the table, attempting to make it into one of a series of cups. Should the ball land in a cup, that cup is removed from the table until all are gone. Losing team drinks.",
    image_link: "https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1705/wavebreakmediamicro170501108/77566969-friends-enjoying-beer-pong-game-on-table-in-bar.jpg",
    min_player: 2,
    max_player: 4
)

Game.create(
    name: "Ping Pong",
    category: other,
    description: "Sport where players hit a ball across the table using small rackets.",
    basic_rules: "Teams take turns hitting ping pong ball across the table. Points are conceded by hitting the net, or allowing more than one bounce per side of the table.",
    image_link: "https://i.ytimg.com/vi/-_cviYR1V3k/maxresdefault.jpg",
    min_player: 2,
    max_player: 4
)

Game.create(
    name: "Tag",
    category: other,
    description: "A game of chase wherein one player is IT and attempts to catch another player.",
    basic_rules: "The designated tagger attempts to touch another player. By succeeding in this the other player then becomes IT and the game begins again.",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/4/46/Jongensspelen_10.jpg",
    min_player: 2,
    # max_player: null 
)