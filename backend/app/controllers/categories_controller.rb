class CategoriesController < ApplicationController
    def index 
        categories = Category.all
        render json: categories, include: [:games]
    end 

    def show 
        category = Category.find(params[:id])
        render json: category, include: [:games]
    end 
end
