Rails.application.routes.draw do
  scope '/api' do
    resources :forms do
      resources 'responses', on: :member
    end
    resources :questions
    resources :form_responses
  end
end
