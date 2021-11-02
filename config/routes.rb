Rails.application.routes.draw do
  root 'pages#home'
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