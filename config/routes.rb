Rails.application.routes.draw do
  default_url_options :host => "http://localhost:3000"

  root to: 'coursesessions#index'

  namespace :api, defaults: { format: :json } do
    resources :users

    resources :courses, only: [:index, :show] do
      resources :coursesessions
    end
    
    resources :coursessessions
    resources :categories, only: [:index, :show]
    resources :courses, only: [:index, :show]
    resources :classrooms, only: [:index, :show]

    namespace :admin do
      resources :users
      resources :categories
      resources :coursesessions
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
