Rails.application.routes.draw do
  root to: 'mains#index'
  devise_for :users
  resources :mains, only:[:index]
  resources :selects, only: [:index] do
    resources :joys, only:[:index]
  end
  resources :users, only:[:show]
  resources :questions do
    resources :comments, only:[:index, :create, :edit, :update, :destroy]
  end
  resources :genres, only: [:index, :new, :create]
end
