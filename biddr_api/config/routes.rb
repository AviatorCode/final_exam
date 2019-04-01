Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    # /api...
    namespace :v1 do
      # /api/v1...
      resources :auctions
      # /api/v1/auctions...
      resource :session, only: [:create, :destroy]
      # /api/v1/session
      resources :users, only: [] do
        # /api/v1/users/current
        get :current, on: :collection
      end
    end
  end

  # Create user and signin and destory user signout
  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create] do
    delete :destroy, on: :collection
  end
end
