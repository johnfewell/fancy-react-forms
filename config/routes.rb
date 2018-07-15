Rails.application.routes.draw do
  scope '/api' do
    resources :forms
    resources :questions
  end
end
