Rails.application.routes.draw do
  root 'client#index'
  devise_for :clients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :clients do
      resources :doctors, only: %i[index show, new, create] do
        resources :appointments, only: %i[new create show]
      end
    end
    end
  end
end