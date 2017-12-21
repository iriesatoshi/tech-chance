Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  resources :home, only: [:index] do
    collection do
      get :others
    end
  end
  resources :lessons do
    resources :products
    collection do
      get 'index_newest'
      get 'purchase_view'
      post 'purchase'
      delete 'free'
    end
  end
  resources :my_lessons, only: [:index, :destroy] do
    member do
      post "add", to: "my_lessons#create"
    end
  end
  resources :users, only: [:edit, :update, :show] do
    member do
      get :school_edit
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
