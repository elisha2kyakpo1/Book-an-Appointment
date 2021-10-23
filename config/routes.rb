Rails.application.routes.draw do
  devise_for :clients
  get 'client/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'client#index'
end
