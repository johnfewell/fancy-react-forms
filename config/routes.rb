Rails.application.routes.draw do
  scope '/api' do
    resources :forms
    resources :questions
    resources :form_responses
  end
end
