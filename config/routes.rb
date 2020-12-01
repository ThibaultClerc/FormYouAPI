Rails.application.routes.draw do
  default_url_options :host => "http://localhost:3000"

  root to: 'sessions#index'

  namespace :api, defaults: { format: :json } do
    resources :users

    resources :courses, only: [:index, :show] do
      resources :sessions
    end
    
    resources :sessions
    resources :categories, only: [:index]
    resources :classrooms, only: [:index]

    namespace :admin do
      resources :users
      resources :categories
      resources :sessions
      resources :courses
      resources :classrooms
      end
    
  end

  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/login',
      sign_out: 'api/logout',
      registration: 'api/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }
end
