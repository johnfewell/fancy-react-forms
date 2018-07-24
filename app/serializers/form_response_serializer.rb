class FormResponseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :form_id
  has_many :answers
  belongs_to :form
end
