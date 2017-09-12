Rails.application.routes.draw do
  namespace :api do
    resources :authors do
      resources :books, only: [:index, :show]
    end
  end 
end
