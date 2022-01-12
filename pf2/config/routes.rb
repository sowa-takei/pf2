Rails.application.routes.draw do
  devise_for :users
  root "homes#top"
  resources :items, only: [:index, :snow, :new, :create]
end
