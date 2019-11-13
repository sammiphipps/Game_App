class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games, include: [:category]
    end 

    def show 
        game = Game.find(params[:id])
        render json: game, include: [:category]
    end 

    def create
        game = Game.create(
            name: params[:name],
            category_id: params[:category_id],
            description: params[:description],
            basic_rules: params[:basic_rules],
            image_link: params[:image_link],
            min_player: params[:min_player],
            max_player: params[:max_player]
        )
    end 

    def update
        game = Game.find(params[:id])
        game.update(
            name: params[:name],
            category_id: params[:category_id],
            description: params[:description],
            basic_rules: params[:basic_rules],
            image_link: params[:image_link],
            min_player: params[:min_player],
            max_player: params[:max_player]
        )
    end 

    def destroy
        game = Game.find(params[:id])
        game.destroy();
    end 
end
