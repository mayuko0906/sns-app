Rails.application.routes.draw do
  devise_for :users
  root to: 'posts#timeline'
  resources :users, only: [:index, :show, :edit , :update] do
    resource :follows, only: [:create, :destroy]
    get :favorites, on: :member
    get :follows, on: :member
    get :followers, on: :member
    get :search, on: :collection
  end  
  resources :posts do
    get :search, on: :collection
    resource :favorites, only: [:create, :destroy]
    get :timeline, on: :collection
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
