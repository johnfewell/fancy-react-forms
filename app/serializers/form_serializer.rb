class FormSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :questions
  has_many :form_responses
end
