Rails.application.routes.draw do
  scope '/api' do
    resources :forms do
      get 'responses', on: :member
    end
    resources :questions
    resources :form_responses
  end
end
