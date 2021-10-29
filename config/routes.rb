Rails.application.routes.draw do
  # get '/booking/', to: 'pages#booking'
  root 'pages#booking'
  devise_for :clients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      
      resources :doctors  
      resources :appointments
      resources :clients
  
    end
  end
end