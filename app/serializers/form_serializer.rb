class FormSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description
  has_many :questions
  has_many :form_responses
end
