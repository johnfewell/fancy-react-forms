class FormResponseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :form_id, :answers_attributes
  has_many :answers
  belongs_to :form
end
