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
    image_link: "https://media.buzzle.com/media/images-en/illustrations/recreational-games/card-games/1200-605659-rules-play-go-fish-card-game.jpg",
    min_player: 2, 
    max_player: 5
)

Game.create(
    name: "Old Maid",
    category: card,
    description: "A Victorian card game for two or more players probably deriving from an ancient gambling game in which the loser pays for the drinks.",
    basic_rules: "Each player takes turns offering his or her hand face-down to the person on his or her left. That person selects a card without looking and adds it to his or her hand.The objective of the game is to continue to take cards, discarding pairs, until no more pairs can be made. The player with the card that has no match is \"stuck with the old maid\" and loses.",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/7/71/Old_Maid_2.jpg",
    min_player: 2,
    max_player: 12
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
    name: "Checkers",
    category: board,
    description: " A strategy game involving diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces.",
    basic_rules: "Players take tunrs moving one of their pieces. A turn can involve moving a single space, or \"jumping\" an opponet's pieces. The goal is to reach the other side of the board and be \"kinged\", granting a piece more movement options. A player wins, when they capture the entirety of the other player's pieces.",
    image_link: "https://images-na.ssl-images-amazon.com/images/I/81qK4Te%2B6cL._SX466_.jpg",
    min_player: 2,
    max_player: 2
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
    image_link: "https://i.ytimg.com/vi/5eZRsBz_MIg/maxresdefault.jpg",
    min_player: 2,
    max_player: 4
)

Game.create(
    name: "Thumper",
    category: drinking,
    description: "Players circle a table and take turns exchanging hand signs.",
    basic_rules: "Each player chooses a unique hand sign. A player begins the round by doing their hand signal then someone else’s. The player whose hand signal was just done must repeat his own hand signal then the signal of another player.This continues until someone doesn’t realize it’s their turn or makes a signal that doesn’t belong to anyone, at which point htey drink.",
    image_link: "https://thebestdrinkinggames.com/wp-content/uploads/2015/11/fun-drinking-games.jpg",
    min_player: 4
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
    description: "A game of chase wherein one player is \"IT\" and attempts to catch another player.",
    basic_rules: "The designated tagger attempts to touch another player. By succeeding in this the other player then becomes \"IT\" and the game begins again.",
    image_link: "https://upload.wikimedia.org/wikipedia/commons/4/46/Jongensspelen_10.jpg",
    min_player: 2,
    # max_player: null 
)

Game.create(
    name: "Dungeons & Dragons",
    category: other,
    description: "A fantasy tabletop role-playing game (RPG)",
    basic_rules: "One player assuming the role of \"Dungeon Master\" leads a group of players, who constitute a \"party\", through a story wherein the party's decisions and dice rolls determine the trajectory of their characters' stories and combat incidents.",
    image_link: "https://i.pinimg.com/originals/1f/eb/29/1feb29ecb6bac1308532ed5def8f67d0.png",
    min_player: 3
)

Game.create(
    name: "Entwined",
    category: video,
    description: "A rhythm based game. The story is about two souls, a bird and a fish, that are in love but can't be together. Once united, the two souls will transform into a magnificent soaring dragon.",
    basic_rules: "The player is tasked with controlling the two souls simultaneously, one with each analog stick, to guide them through colored rings.",
    image_link: "https://i1.wp.com/www.geeksundergrace.com/wp-content/uploads/2014/06/entwined-screenshot-04.jpg",
    min_player: 1, 
)

Game.create(
    name: "Fifa 19",
    category: video,
    description: "A football video game where you can play as or manage your favorite team. Special to the 2019 release: play a simulation of your favorite match up from the Women's World Cup 2019.",
    basic_rules: "Control your favorite team in a simulated football match adhering to the rules and principles of real-life football.",
    image_link: "https://i.pinimg.com/originals/d3/b9/1d/d3b91d768aea3665e89929fb8a596b7d.jpg",
    min_player: 1,
    max_player: 4
)

Game.create(
    name: "World of Warcraft",
    category: video,
    description: "A fantasy based massively multiplayer online role-playing game (MMORPG).",
    basic_rules: "Players picka  faction (Horder or Alliance), a race, and a class for their character. They then complete a series of quests, dungeons, and raids, in order to level up their character.",
    image_link: "https://www.mobygames.com/images/shots/l/530853-world-of-warcraft-cataclysm-windows-screenshot-creating-a.jpg",
    min_player: 1,
)