Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root "homes#top"
   resources :items, only: [:index, :snow, :new, :create]
end
