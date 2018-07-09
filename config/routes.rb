Rails.application.routes.draw do
  scope '/api' do
    resources :forms
  end
end
