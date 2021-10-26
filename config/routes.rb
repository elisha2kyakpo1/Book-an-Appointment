Rails.application.routes.draw do
  root 'client#show'
  devise_for :clients
  get 'http://localhost:3000/doctors', action: :index, controller: 'client' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :doctors, only: %i[index show, new, create] 
      resources :clients do
      
        resources :appointments, only: %i[new create show]
      end
    end
 
  end
  
end

