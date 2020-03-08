Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :index, :destroy, :join] do
      resources :channels, only: [:create]
    end
    post 'servers/join/:invite', to: 'servers#join'
    delete 'servers/leave', to: 'servers#delete'
    resources :channels, only: [:show, :destroy, :index] do 
      resources :messages, only: [:create]
    end
    resources :messages, only: [:update, :destroy]
  end

  root to: "static_pages#root"
end
