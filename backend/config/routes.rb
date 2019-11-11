Rails.application.routes.draw do
  resources :games, except: [:edit, :new]
  resources :categories, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
