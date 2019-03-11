Rails.application.routes.draw do
  root 'pages#index'
  get '*path', to: 'pages#index', via: :all
  # For details on the DSL available witMhin this file, see http://guides.rubyonrails.org/routing.html
end
