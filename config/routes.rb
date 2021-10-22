Rails.application.routes.draw do
  devise_for :clients
  resources :appointments
  resources :doctors
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
