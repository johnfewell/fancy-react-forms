Rails.application.routes.draw do
  scope '/api' do
    get :form, to: 'forms#index'
  end
end
