Rails.application.routes.draw do
  
  # resources :follows
  # resources :steps
  # resources :routines
  # resources :products, only: [:index, :show]
  # resources :users
  
  get '/me', to: 'users#me'
  get '/my-followers', to: 'users#my_followers'
  get '/my-following', to: 'users#my_following'
  # get '/routine-steps', to: 'routines#routine_steps'

  resources :users do
    resources :products, only: [:index, :show]
    resources :routines, only: [:index, :show] do
      resources :steps, only: [:index]
    end
  end


  post '/signup', to: 'users#signup'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
