Rails.application.routes.draw do
  root 'play#index'

  resources :play, only: %i[index show create update]
end
