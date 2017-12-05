Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  resources :lessons
  resources :users, only: [:edit, :update, :show] do
    member do
      get :school_edit
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
