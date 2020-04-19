Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :index, :destroy, :join, :update, :leave] do
      resources :channels, only: [:create]
    end
    post 'servers/join/:invite', to: 'servers#join'
    delete 'servers/leave/:serverId', to: 'servers#leave'
    resources :channels, only: [:show, :destroy, :update] do 
      resources :messages, only: [:create]
    end
    resources :messages, only: [:update, :destroy]
    resources :server_users, only: [:show]
  end

  root to: "static_pages#root"
end
