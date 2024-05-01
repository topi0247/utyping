Rails.application.routes.draw do
  root 'play#index'

  resources :play, only: %i[show create update]
  resource :record, only: %i[create]
end
